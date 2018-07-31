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
      let verb = action.payload.data;
      if (verb) {
        if (verb === RANDOM_VERB) {
          // replace the random flag with actual verb
          verb = findRandom(state.verbs, state.active);
        }
 
        // do not add if already on the list
        if (state.active.find(v => v.norsk_verb === verb.norsk_verb)) {
          return state;
        }
        
        // no word - return previous state
        if (!verb) {
          return state;
        }
        return {
          verbs: state.verbs,
          active: [
            ...state.active,
            { ...verb }
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
  console.log(collection);
  console.log(phrase);
  let word = collection.find(item => item.norsk_verb === phrase);

  if (word) {
    return word; 
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
