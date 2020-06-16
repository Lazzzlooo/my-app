import React from 'react';
import s from './Chats.module.css';
import Chat from "./Chat/Chat";
import SearchForm from "./SearchForm/SearchForm";
import Message from "./message/Message";

const Chats = (props) => {

  let dialogElements = props.dialogs.map( dialog => <li className={s.item}><Chat id={dialog.id} name={dialog.name} message={dialog.message}/></li>)
  let messageElements = props.messages.map( message => <li className={s.message_item}><Message message={message.message} id={message.id}/></li>)

  return (
    <div className={s.chats}>
      <ul className={s.list}>
        <li className={s.item}><SearchForm /></li>
        {dialogElements}
      </ul>
      <ul className={s.message_list}>
        {messageElements}
      </ul>
    </div>
  )
}

export default Chats;