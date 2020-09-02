import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";
import newsReducer from "./news-reducer";
import usersReducer from './users-reducer';

let reducers = combineReducers({
  dialogsPage: dialogsReducer,
  profilePage: profileReducer,
  newsPage: newsReducer,
  usersPage: usersReducer
});

let store = createStore(reducers);

export default store;