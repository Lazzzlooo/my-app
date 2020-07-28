import React from 'react';
import s from './MessageForm.module.scss';
import IconAdd from "./Icons/IconAdd";
import IconSend from "./Icons/IconSend";


const MessageForm = (props) => {
// debugger;
  let newMessageBody = props.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessage();
  };

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  }

  return (
    <div className={s.container}>

      <div className={s.form}>
        <button id="add">
          <IconAdd fill="#3d3d3d"/>
          <span className={s.visually_hidden}>Add</span>
        </button>
        <form action="">
          <textarea value={newMessageBody} onChange={onNewMessageChange} placeholder="Написать сообщение..."/>
        </form>
        <button onClick={onSendMessageClick}>
          <IconSend fill="#3d3d3d"/>
          <span className={s.visually_hidden}>Send Message</span>
        </button>
      </div>
    </div>
  )
}

export default MessageForm;