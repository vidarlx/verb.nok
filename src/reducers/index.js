import { combineReducers } from 'redux';
import ReducerVerbs from './reducer_verbs';
import ReducerActiveVerbs from './reducer_active_verbs';

const rootReducer = combineReducers({
  verbs: ReducerVerbs,
  active_verbs: ReducerActiveVerbs
});

export default rootReducer;
