// import React from 'react';
import {addPost, updateNewPostText} from "../../../redux/news-reducer";
import PostForm from "./PostForm";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
  return {
    newPostText: state.newsPage.newPostText

  }
}

const PostFormContainer = connect(mapStateToProps, {updateNewPostText, addPost})(PostForm)

export default PostFormContainer;