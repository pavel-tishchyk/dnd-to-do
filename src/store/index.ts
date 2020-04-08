import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk';
import rootReducer from './../reducers';

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

//@ts-ignore
window.store = store;

export type State = ReturnType<typeof rootReducer>

export default store;
