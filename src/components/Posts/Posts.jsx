import React from 'react';
import s from './Posts.module.scss'
import Post from "./Post/Post";
import PostFormContainer from "./PostForm/PostFormContainer";

const Posts = (props) => {
  let state = props.store.getState();

  let postElements = state.newsPage.post.map(post => <Post id={post.id} postText={post.postText}/>)
    return (
        <section className={s.posts}>
            <PostFormContainer store={props.store}/>
            { postElements }
        </section>
    );
}

export default Posts;