import React from 'react';
import s from './Post.module.scss';
import avatar from '../../../img/Photo.png'
import {Comments, Like, Share} from "./Icon/Icons";

const Post = (props) => {
  return (
    <div className={s.post}>
      <div className={s.box}>
        <img className={s.avatar} src={avatar} alt="" width={40} height={40}/>
        <div>
          <p className={s.userName}>UserName</p>
          <p className={s.postText}>{props.postText}</p>
        </div>
      </div>
      <ul className={s.icons}>
        <li className={s.comment}>
          <Comments fill={"none"} stroke={"#000"}/>
          <span className={s.count}>{props.comments}</span>
        </li>
        <li className={s.share}>
          <Share fill={"none"} stroke={"#000"}/>
          <span className={s.count}>{props.shared}</span>
        </li>
        <li className={s.like}>
          <Like fill={"none"} stroke={"#000"}/>
          <span className={s.count}>{props.likes}</span>
        </li>
      </ul>
    </div>
  );
}

export default Post;