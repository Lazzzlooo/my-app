import React from 'react';
import s from './MessageForm.module.scss';
import IconAdd from './Icons/IconAdd';
import IconSend from './Icons/IconSend';
import {Field, reduxForm, reset} from 'redux-form';

const MessageForm = (props) => {
  return (
    <form className={s.form} onSubmit={props.handleSubmit}>
      <button id="add">
        <IconAdd fill="#3d3d3d"/>
        <span className={s.visually_hidden}>Add</span>
      </button>
      <Field component={'textarea'} type={'text'} name='newMessageBody'
             placeholder="Написать сообщение..."/>
      <button>
        <IconSend fill="#3d3d3d"/>
        <span className={s.visually_hidden}>Send Message</span>
      </button>
    </form>
  )
}

const afterSubmit = (result, dispatch) => dispatch(reset('message'));


const MessageReduxForm = reduxForm({
  form: 'message',
  onSubmitSuccess: afterSubmit
})(MessageForm)

export default MessageReduxForm;