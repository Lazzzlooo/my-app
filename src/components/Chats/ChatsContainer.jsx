import React from 'react';
import {connect} from 'react-redux';
import Chats from './Chats';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';

const ChatsContainer = (props) => {
  return <Chats {...props}/>
}

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  }
}

export default compose(connect(mapStateToProps, {}), withAuthRedirect)(ChatsContainer);