import React from 'react';
import s from './Button.module.scss';

const Button = (props) => <button className={s.button} onClick={props.onClick}>{props.buttonValue}</button>
export default Button;