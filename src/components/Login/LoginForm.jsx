import React from 'react';
import s from './Login.module.scss'
import {Field, reduxForm} from 'redux-form';
import Button from '../common/Button/Button';


const LoginForm = (props) => {
  return (
    <form className={s.form} onSubmit={props.handleSubmit}>
      <div className={s.formItem}>
        <label htmlFor="login">Login</label>
        <Field component={"input"} type={'text'} name='login' id={'login'} placeholder='login'/>
      </div>
      <div className={s.formItem}>
        <label htmlFor="password">Password</label>
        <Field component={"input"} type={'password'} name='password' id={'password'} placeholder='password'/>
      </div>
      <div className={s.formItem}>
        <label htmlFor="rememberMe">
          <Field component={"input"} type={'checkbox'} name='rememberMe' id={'rememberMe'}/>
          Remember Me</label>
      </div>
      <Button buttonValue={"Login"}/>

    </form>
  )
}

const LoginReduxForm = reduxForm({
  form: 'login'
})(LoginForm)

export default LoginReduxForm;