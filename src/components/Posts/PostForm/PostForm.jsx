import React from 'react';
import s from './PostForm.module.scss';
import avatar from '../../../img/Photo.png'
import Button from '../../common/Button/Button';
import {Field, reduxForm, reset} from 'redux-form';


const PostForm = (props) => {
  return (
    <form className={s.form} onSubmit={props.handleSubmit}>
      <img src={avatar} className={s.avatar} alt="" width={40} height={40}/>
      <Field component={'textarea'} type={'text'} name='newPostText'
             className={s.input} placeholder="Что случилось..."/>
      <Button buttonValue={'Share'} />
    </form>
  );
}

const afterSubmit = (result, dispatch) => dispatch(reset('post'));


const PostReduxForm = reduxForm({
  form: 'post',
  onSubmitSuccess: afterSubmit
})(PostForm)

export default PostReduxForm;
