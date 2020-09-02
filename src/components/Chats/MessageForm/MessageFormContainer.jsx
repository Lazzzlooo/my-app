// import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../redux/dialog-reducer";
import MessageForm from "./MessageForm";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
  return {
    newMessageBody: state.dialogsPage.newMessageBody
  }
}

let mapDispatchToProps = (dispatch) => {

  return {
    sendMessage: () => {
      dispatch(sendMessageCreator())
    },
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body))
    }
  }
}

const MessageFormContainer = connect(mapStateToProps, mapDispatchToProps)(MessageForm);

export default MessageFormContainer;