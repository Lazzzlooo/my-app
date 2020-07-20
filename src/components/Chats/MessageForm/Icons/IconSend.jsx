import React from 'react';
import s from './Icons.module.css';

const IconSend = ({fill}) => {
  return (
    <svg className={s.icon} width={20} height={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path fill={fill} d="M507 5V4c-4-4-10-5-16-3L10 183a15 15 0 00-1 28l205 88 87 204a15 15 0 0028-1L509 23c4-5 4-13-2-18zM55 198L438 53 222 269 55 198zm259 259l-71-166L458 76 314 457z"/>
    </svg>
  )
}

export default IconSend;