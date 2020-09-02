import React from 'react';
import s from './Chats.module.scss';
import Chat from "./Chat/Chat";
import SearchForm from "./SearchForm/SearchForm";
import Message from "./message/Message";
import MessageFormContainer from "./MessageForm/MessageFormContainer";

const Chats = (props) => {
  let state = props.store.getState().dialogsPage;

  let dialogElements = state.dialogs.map(dialog => <li className={s.item} key={dialog.id}><Chat id={dialog.id} name={dialog.name}
                                                                                      message={dialog.message}/></li>)
  let messageElements = state.messages.map(message => <li className={s.message_item} key={message.id}><Message
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
          <MessageFormContainer />
        </div>
      </div>
    </div>
  )
}

export default Chats;