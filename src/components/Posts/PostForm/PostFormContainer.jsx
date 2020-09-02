// import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/news-reducer";
import PostForm from "./PostForm";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
  return {
    newPostText: state.newsPage.newPostText

  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostTextAction: (text) => {
      dispatch(updateNewPostTextActionCreator(text));
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    }
  }
}

const PostFormContainer = connect(mapStateToProps, mapDispatchToProps)(PostForm)

export default PostFormContainer;