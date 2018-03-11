import { FIND_VERB } from '../actions';

export default function (state = [], action) {
  switch (action.type) {
    case FIND_VERB:
      return [ ...state, action.verb ];
  }
  return state;
}
