const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  post: [
    {id: 1, postText: 'My first post', likes: 2, comments: 8, shared: 14},
    {id: 2, postText: 'What\'s up?', likes: 20, comments: 5, shared: 4}
  ],
  newPostText: ''
}

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: state.post.length + 1, postText: state.newPostText, likes: 0, comments: 0, shared: 0
      }
      return {
        ...state,
        post: [...state.post, newPost],
        newPostText: ''
      };
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText
      };
    default:
      return state;
  }
}

export const addPost = () => ({type: ADD_POST});
export const updateNewPostText = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default newsReducer;