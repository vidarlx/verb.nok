import { FIND_VERB } from '../actions';

export default function (state = [], action) {
  switch (action.type) {
    case FIND_VERB:
      if (action.verb) {
        return [ ...state, action.verb ];
      }
  }
  return state;
}
