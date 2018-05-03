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
        let verb = action.verb;
        if (action.verb === RANDOM_VERB) {
          verb = randomProperty(state.verbs);
        }


        // no word - return previous state
        if (!state.verbs[verb]) {
          return state;
        }

        // do not duplicate
        const exists = state.active.find(el => el.verb === verb);
        if (exists) {
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