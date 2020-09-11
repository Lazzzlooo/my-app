import React from 'react';
import LoginReduxForm from './LoginForm';



const Login = () => {
  const onSubmit = (formData) => {
    console.log(formData)
  }

  return (
    <section>
      <p>Login page</p>
      <LoginReduxForm onSubmit={onSubmit}/>
    </section>
  )
}

export default Login;