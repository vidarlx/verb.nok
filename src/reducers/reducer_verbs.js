import {
  FETCH_VERBS,
  FIND_VERB,
  CLEAR_VERBS
} from '../actions';

import { RANDOM_VERB } from '../common/consts';

const INITIAL_STATE = {
  verbs: [],
  active: []
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_VERBS:
      return {
        verbs: action.payload.data,
        active: state.active
      }

    case FIND_VERB:
      if (action.verb) {
        let { verb } = action;
        if (verb === RANDOM_VERB) {
          // replace the random flag with actual verb
          verb = findRandom(state.verbs, state.active);
        }
 
        let found = findActualVerb(state.verbs, verb);
        
        if (state.active.find(v => v.verb === found.basic)) {
          return state;
        }
        // no word - return previous state
        if (!found) {
          return state;
        }
        return {
          verbs: state.verbs,
          active: [
            ...state.active,
            { ...found.verb, verb: found.basic }
          ]
        };
      }
      break;

    case CLEAR_VERBS:
      return {
        verbs: state.verbs,
        active: [],
      }
  }

  return state;
}

function randomProperty(obj) {
  var keys = Object.keys(obj)
  return keys[keys.length * Math.random() << 0];
};

function findRandom(collection, used) {
  let found = null;
  let exists = true;
  let limit = 0;
  while (exists) {
    found = randomProperty(collection);
    // do not duplicate
    exists = used.find(el => el.verb === found);
    limit++;
    if (limit > 20) {
      exists = false;
    }
  }
  return found;
}

function findActualVerb(collection, phrase) {
  let word = collection[phrase];
  if (word) {
    return {
      basic: phrase,
      verb: word
    }; 
  }

  // try to search by polish basic form
  for (let norskVerb in collection) {
      let polishVerb = collection[norskVerb].meaning_pl;
      if (polishVerb === phrase) {
        word = norskVerb;
        break;
      }
  }

  return collection[word] ? { basic: word, verb: collection[word] } : false;
}
