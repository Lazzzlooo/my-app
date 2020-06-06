import React from 'react';
import s from './Posts.module.css'
import Post from "./Post/Post";
import Post_form from "./Post_form/Post_form";

const Posts = () => {
    return (
        <section className={s.posts}>
            <Post_form />

            <Post message={"My first post"}/>
            <Post message={"My second post"}/>
        </section>
    );
}

export default Posts;