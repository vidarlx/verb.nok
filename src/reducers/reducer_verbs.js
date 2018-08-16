import {
  FETCH_VERBS,
  FIND_VERB,
  FIND_SINGLE_VERB
} from '../actions';

import { RANDOM_VERB } from '../common/consts';

const INITIAL_STATE = {
  all: [],
  active: []
};

export default function (state = INITIAL_STATE, action) {
  let verb = null;

  switch (action.type) {
    case FETCH_VERBS:
      return {
        all: action.payload.data,
        active: state.active
      }

    case FIND_VERB:
      verb = action.payload.data;
      if (verb) {
        if (verb === RANDOM_VERB) {
          // replace the random flag with actual verb
          verb = findRandom(state.verbs, state.active);
        }


        // do not add if already on the list
        const foundNorsk = state.active.find(v => v.norsk_verb === verb.norsk_verb);
        const foundPolsk = state.active.find(v => v.polsk_verb === verb.polsk_verb);

        if (foundNorsk || foundPolsk) {
          return state;
        }

        // no word - return previous state
        if (!verb) {
          return state;
        }
        return {
          all: state.all,
          active: [
            ...state.active,
            { ...verb }
          ],
          chosen: state.chosen
        };
      }
      break;

    case FIND_SINGLE_VERB:
      verb = action.payload.data;
      if (verb) {
        return {
          all: state.all,
          active: [
            ...state.active,
            { ...verb }
          ],
          chosen: verb
        };
      }
      
      break;
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
