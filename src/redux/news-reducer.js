const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  post: [
    {id: 1, postText: 'My first post'},
    {id: 2, postText: 'What\'s up?'}
  ],
    newPostText: ''
}

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 3, postText: state.newPostText
      }
      state.post.push(newPost);
      state.newPostText = '';
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default newsReducer;