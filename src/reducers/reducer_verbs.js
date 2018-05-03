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
        let verb = null;
        if (action.verb === RANDOM_VERB) {
          verb = findUnique(state.verbs, state.active);
        }
        // no word - return previous state
        if (!state.verbs[verb]) {
          return state;
        }

        const word = state.verbs[verb];
        word.verb = verb;

        return {
          verbs: state.verbs,
          active: [
            ...state.active,
            word
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

const randomProperty = (obj) => {
  var keys = Object.keys(obj)
  return keys[keys.length * Math.random() << 0];
};

const findUnique = (collection, used) => {
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
