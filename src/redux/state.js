const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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
      ]
    },
    user: {
      id: 1,
      firstName: 'Amilia',
      lastName: 'Luna',
      job: 'Designer',
      birthday: 'February 21, 2000',
      currentCity: 'Boston',
      website: 'http:/www.xyz.com',
      isOnline: 'last seen one hour ago'
    },
    post: [
      {id: 1, postText: 'My first post'},
      {id: 2, postText: 'What\'s up?'}
    ],
    newPostText: ''
  },
  _callSubscriber() {},


  subscribe(observer) {
    this._callSubscriber = observer;
  },
  getState() {
    return this._state;
  },

  dispatch(action) {
    if(action.type === 'ADD-POST') {
        let newPost = {
          id: 3, postText: this._state.newPostText
        }
        this._state.post.push(newPost);
        this._state.newPostText = '';
        this._callSubscriber();
    } else if (action.type === 'UPDATE-NEW-POST-TEXT'){
        this._state.newPostText = action.newText;
        this._callSubscriber();
    }
  }
}
export const addPostActionCreater = () => {
  return {type: ADD_POST}
};

export const updateNewPostTextActionCreator = (text) => {
  return {type: UPDATE_NEW_POST_TEXT, newText: text}
}

window.store = store;

export default store;