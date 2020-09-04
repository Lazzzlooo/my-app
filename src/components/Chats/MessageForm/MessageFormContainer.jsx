import {sendMessage, updateNewMessageBody} from "../../../redux/dialog-reducer";
import MessageForm from "./MessageForm";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
  return {
    newMessageBody: state.dialogsPage.newMessageBody
  }
}

const MessageFormContainer = connect(mapStateToProps, {sendMessage, updateNewMessageBody})(MessageForm);

export default MessageFormContainer;