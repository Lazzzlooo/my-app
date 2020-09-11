import React from 'react';
import {connect} from 'react-redux';
import Chats from './Chats';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';
import {sendMessage} from '../../redux/dialog-reducer';

const ChatsContainer = (props) => {
  return <Chats {...props}/>
}

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  }
}

export default compose(connect(mapStateToProps, {sendMessage}), withAuthRedirect)(ChatsContainer);