import React from 'react';

const Post = () => {
    return (
        <section className="post container">
            <ul className="post__buttons-list">
                <li className="post__buttons-item">
                    <button className="post__button">Status</button>
                </li>
                <li className="post__buttons-item">
                    <button className="post__button">Photo</button>
                </li>
                <li className="post__buttons-item">
                    <button className="post__button">Video</button>
                </li>
            </ul>
            <form action="" className="post__form">
                <input type="text" placeholder="What’s on your mind?" className="post__input"/>
            </form>
            <ul className="post__action-list">
                <li className="post__action-item">
                    <input type="radio" placeholder=""/>
                    <label htmlFor="">People</label>
                </li>
                <li className="post__action-item">
                    <input type="radio" placeholder="" checked/>
                    <label htmlFor="">Check in</label>
                </li>
                <li className="post__action-item">
                    <input type="radio" placeholder=""/>
                    <label htmlFor="">Mood</label>
                </li>
                <li className="post__action-item">
                    <button className="post__button-get">Share</button>
                </li>
            </ul>

        </section>
    );
}

export default Post;