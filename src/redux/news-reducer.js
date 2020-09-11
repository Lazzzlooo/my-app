const ADD_POST = 'ADD-POST';

let initialState = {
  post: [
    {id: 1, postText: 'My first post', likes: 2, comments: 8, shared: 14},
    {id: 2, postText: 'What\'s up?', likes: 20, comments: 5, shared: 4}
  ]
}

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: state.post.length + 1, postText: action.newPostText, likes: 0, comments: 0, shared: 0
      }
      return {
        ...state,
        post: [...state.post, newPost],
      };

    default:
      return state;
  }
}

export const addPost = (newPostText) => ({type: ADD_POST, newPostText});

export default newsReducer;