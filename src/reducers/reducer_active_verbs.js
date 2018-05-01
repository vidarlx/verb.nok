import { FIND_VERB, CLEAR_VERBS } from '../actions';

export default function (state = [], action) {
  switch (action.type) {
    case FIND_VERB:
      if (action.verb) {
        return [ ...state, action.verb ];
      }
      break;
    case CLEAR_VERBS:
      return [];
  }
  return state;
}
