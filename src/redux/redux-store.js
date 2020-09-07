import {applyMiddleware, combineReducers, createStore} from 'redux';
import  thunkMiddleware from 'redux-thunk'
import dialogsReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";
import newsReducer from "./news-reducer";
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';

let reducers = combineReducers({
  dialogsPage: dialogsReducer,
  profilePage: profileReducer,
  newsPage: newsReducer,
  usersPage: usersReducer,
  auth: authReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;


export default store;