import newsReducer from "./news-reducer";
import dialogsReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";

let store = {
  _state: {
    dialogsPage: {
      dialogs: [
        {id: 1, name: 'Dimych', message: 'Hi'},
        {id: 2, name: 'Andrew', message: 'How'},
        {id: 3, name: 'Sveta', message: 'Yo'},
        {id: 4, name: 'Sasha', message: 'Yo'},
        {id: 5, name: 'Viktor', message: 'Yo'},
        {id: 6, name: 'Valera', message: 'How is your it-kamasutra?'}
      ],
      messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
      ],
      newMessageBody: ''
    },
    profilePage: {
      user: {
        id: 1,
        firstName: 'Amilia',
        lastName: 'Luna',
        job: 'Designer',
        birthday: 'February 21, 2000',
        currentCity: 'Boston',
        website: 'http:/www.xyz.com',
        isOnline: 'last seen one hour ago'
      }
    },
    newsPage: {
      post: [
        {id: 1, postText: 'My first post'},
        {id: 2, postText: 'What\'s up?'}
      ],
      newPostText: ''
    }
  },
  _callSubscriber() {
  },


  subscribe(observer) {
    this._callSubscriber = observer;
  },
  getState() {
    return this._state;
  },

  dispatch(action) {
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.newsPage = newsReducer(this._state.newsPage, action);
    this._callSubscriber();
  }
}

window.store = store;

export default store;