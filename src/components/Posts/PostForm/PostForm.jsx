import React from 'react';
import s from './PostForm.module.scss';
import avatar from '../../../img/Photo.png'
import TextareaAutosize from "react-autosize-textarea";


const PostForm = (props) => {

  let newPostElement = React.createRef();

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostTextAction(text);
  }

  let addPost = () => {
    props.addPost();
  }

  return (
    <section className={s.post_form}>
      <img src={avatar} className={s.avatar} alt="" width={40} height={40}/>
      <form action="" className={s.form}>
        <TextareaAutosize onResize={() => {}} className={s.input} contenteditable="true" required
                          value={props.newPostText} onChange={onPostChange} ref={newPostElement}
                          placeholder="Что случилось..." maxRows={3}/>
      </form>
      <button onClick={addPost} className={s.button}>Share</button>
    </section>
  );
}

export default PostForm;