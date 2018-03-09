import { FETCH_VERBS } from '../actions';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_VERBS:
      return action.payload.data;
    default:
      console.log('Unknown action: ', action.type)
  }
  return state;
}
