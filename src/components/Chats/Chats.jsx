import React from 'react';
import s from './Chats.module.scss';
import Chat from "./Chat/Chat";
import SearchForm from "./SearchForm/SearchForm";
import Message from "./message/Message";
import MessageForm from "./MessageForm/MessageForm";

const Chats = (props) => {

  let dialogElements = props.state.dialogs.map(dialog => <li className={s.item}><Chat id={dialog.id} name={dialog.name}
                                                                                      message={dialog.message}/></li>)
  let messageElements = props.state.messages.map(message => <li className={s.message_item}><Message
    message={message.message} id={message.id}/></li>)

  return (
    <div className={s.chats}>
      <ul className={s.list}>
        <li className={s.item}><SearchForm/></li>
        {dialogElements}
      </ul>
      <div className={s.message_container}>
        <ul className={s.message_list}>
          {messageElements}
        </ul>
        <div className={s.message_form}>
          <MessageForm newMessageBody={props.state.newMessageBody} dispatch={props.dispatch}/>
        </div>
      </div>
    </div>
  )
}

export default Chats;