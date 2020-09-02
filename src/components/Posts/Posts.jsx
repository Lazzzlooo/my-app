import React from 'react';
import s from './Posts.module.scss'
import Post from "./Post/Post";
import PostFormContainer from "./PostForm/PostFormContainer";

const Posts = (props) => {
  let state = props.store.getState();

  let postElements = state.newsPage.post.map(post => <li className={s.item} key={post.id}>
    <Post id={post.id} postText={post.postText} likes={post.likes}
          comments={post.comments} shared={post.shared}/></li>)
  return (
    <section>
      <div className={s.form}>
        <PostFormContainer/>
      </div>
      <ul className={s.list}>
        {postElements}
      </ul>
    </section>
  );
}

export default Posts;