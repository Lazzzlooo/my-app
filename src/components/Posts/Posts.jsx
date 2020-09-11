import React from 'react';
import s from './Posts.module.scss'
import Post from "./Post/Post";
import PostReduxForm from './PostForm/PostForm';

const Posts = (props) => {

  let postElements = props.newsPage.post.map(post => <li className={s.item} key={post.id}>
    <Post id={post.id} postText={post.postText} likes={post.likes}
          comments={post.comments} shared={post.shared}/></li>)
  let addNewPost = (values) => {
    props.addPost(values.newPostText);
  }
  return (
    <section>
      <div className={s.form}>
        <PostReduxForm onSubmit={addNewPost}/>
      </div>
      <ul className={s.list}>
        {postElements}
      </ul>
    </section>
  );
}

export default Posts;