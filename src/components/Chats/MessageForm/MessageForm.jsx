import React from 'react';
import s from './MessageForm.module.scss';
import IconAdd from "./Icons/IconAdd";
import IconSend from "./Icons/IconSend";


const MessageForm = () => {
  return (
    <div className={s.container}>
      <form action="#" className={s.form}>
        <button id="add">
          <IconAdd fill="#3d3d3d"/>
          <span className={s.visually_hidden}>Add</span></button>
        <textarea name="" id="" placeholder="Написать сообщение..."/>
        <button id="submit" type={onsubmit}>
          <IconSend fill="#3d3d3d"/>
          <span className={s.visually_hidden}>Send Message</span></button>
      </form>
    </div>
  )
}

export default MessageForm;