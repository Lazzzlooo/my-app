import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../redux/dialog-reducer";
import MessageForm from "./MessageForm";


const MessageFormContainer = (props) => {
  let state = props.store.getState();

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator())
  };

  let onNewMessageChange = (body) => {
    let action = updateNewMessageBodyCreator(body)
    props.store.dispatch(action);
  };

  return <MessageForm sendMessage={onSendMessageClick} updateNewMessageBody={onNewMessageChange} newMessageBody={state.dialogsPage.newMessageBody}/>
}

export default MessageFormContainer;