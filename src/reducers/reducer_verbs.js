import { FETCH_VERBS, FIND_VERB } from '../actions';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_VERBS:
      return action.payload.data

    case FIND_VERB:
      return { ...state, _current: action.verb }

    default:
      console.log('Unknown action: ', action.type)
  }
  return state;
}
