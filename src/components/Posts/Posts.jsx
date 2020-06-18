import React from 'react';
import s from './Posts.module.css'
import Post from "./Post/Post";
import PostForm from "./PostForm/PostForm";

const Posts = (props) => {

  let postElements = props.state.map(post => <Post id={post.id} postText={post.postText}/>)
    return (
        <section className={s.posts}>
            <PostForm addPost={props.addPost}/>
            { postElements }

        </section>
    );
}

export default Posts;