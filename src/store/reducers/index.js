import { combineReducers } from 'redux';
import getTasks from './getTasks';

const rootReducer = combineReducers({
  getTasks
})

export default rootReducer;
