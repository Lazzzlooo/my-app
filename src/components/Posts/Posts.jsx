import React from 'react';
import s from './Posts.module.css';
import Post from "./Post/Post";

const Posts = () => {
    return (
        <section className={s.posts}>
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
                <input type="text" placeholder="What’s on your mind?" className={s.input}/>
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
                    <button className={s.button_get}>Share</button>
                </li>
            </ul>
            <Post />
        </section>
    );
}

export default Posts;