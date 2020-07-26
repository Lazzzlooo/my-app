import React from 'react';
import s from './PostForm.module.scss';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";



const PostForm = (props) => {

    let newPostElement = React.createRef();

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    let addPost = () => {
        props.dispatch(addPostActionCreator());
        newPostElement.current.value = '';
        console.log(newPostElement.current.value);
    }

    return (
        <section className={s.post_form}>
            <ul className={s.buttons_list}>
                <li className={s.buttons_item}>
                    <button className={s.button}>Status</button>
                </li>
                <li className={s.buttons_item}>
                    <button className={s.button}>Photo</button>
                </li>
                <li className={s.buttons_item}>
                    <button className={s.button}>Video</button>
                </li>
            </ul>
            <form action="" className={s.form}>
                <textarea value={props.newPostText} onChange={onPostChange} ref={newPostElement} className={s.input}/>
            </form>
            <ul className={s.action_list}>
                <li className={s.action_item}>
                    <input type="radio" placeholder=""/>
                    <label htmlFor="">People</label>
                </li>
                <li className={s.action_item}>
                    <input type="radio" placeholder=""/>
                    <label htmlFor="">Check in</label>
                </li>
                <li className={s.action_item}>
                    <input type="radio" placeholder=""/>
                    <label htmlFor="">Mood</label>
                </li>
                <li className={s.action_item}>
                    <button onClick={ addPost } className={s.button_get}>Add post</button>
                </li>
            </ul>
        </section>
    );
}

export default PostForm;