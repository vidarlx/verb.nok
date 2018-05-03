import { combineReducers } from 'redux';
import ReducerVerbs from './reducer_verbs';

const rootReducer = combineReducers({
  verbs: ReducerVerbs
});

export default rootReducer;
