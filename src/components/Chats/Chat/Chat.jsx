import React from 'react';
import s from './Chat.module.css';
import avatar from '../../../img/Photo.png'
import {NavLink} from 'react-router-dom';

const Chat = (props) => {
  let path = "/chats/" + props.id;

  return (
    <NavLink to={path} activeClassName={s.active} className={s.link}>
      <ul className={s.list}>
        <li className={s.avatar}><img src={avatar} width={40} height={40} alt="user avatar"/></li>
        <li className={s.text}>
          <div className={s.text_box}>
            <p className={s.user_name}>{props.name}</p>
            <p className={s.isOnline}>Online</p>
          </div>
          <p className={s.message}>{props.message}</p>
        </li>
      </ul>
    </NavLink>
  )
}

export default Chat;