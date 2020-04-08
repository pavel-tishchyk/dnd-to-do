import { combineReducers } from "redux";
import { reducer as form } from 'redux-form';
import login from './login';
import lists from './lists';
import tasks from './tasks';


export default combineReducers({
  form,
  login, 
  lists, 
  tasks
});