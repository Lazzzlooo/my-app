import React from 'react';
import s from './Message.module.scss';
import avatar from '../../../img/Photo.png'

const Message = (props) => {

  return (
    <div className={s.message}>
      <p className={s.avatar}><img src={avatar} alt=""/></p>
      <p className={s.text}>
        {props.message}
      </p>
    </div>
  )
}

export default Message;