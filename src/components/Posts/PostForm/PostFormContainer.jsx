import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/news-reducer";
import PostForm from "./PostForm";



const PostFormContainer = (props) => {
    let state = props.store.getState();

    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    }

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    return <PostForm updateNewPostTextAction={onPostChange} addPost={addPost} newPostText={state.newsPage.newPostText}/>
}

export default PostFormContainer;