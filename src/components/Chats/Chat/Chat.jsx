import React from 'react';
import s from './Chat.module.css';
import avatar from '../../../img/Photo.png'

const Chat = () => {
  return (
    <ul className={s.list}>
      <li className={s.avatar}><img src={avatar} width={40} height={40} alt="user avatar"/></li>
      <li className={s.text}>
        <div className={s.text_box}>
          <p className={s.user_name}>User Name</p>
          <p className={s.isOnline}>Online</p>
        </div>
        <p className={s.message}>Phasellus sit amet ultricies...</p>
      </li>
    </ul>
  )
}

export default Chat;