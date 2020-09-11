import {applyMiddleware, combineReducers, createStore} from 'redux';
import  thunkMiddleware from 'redux-thunk'
import dialogsReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";
import newsReducer from "./news-reducer";
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
  dialogsPage: dialogsReducer,
  profilePage: profileReducer,
  newsPage: newsReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;


export default store;