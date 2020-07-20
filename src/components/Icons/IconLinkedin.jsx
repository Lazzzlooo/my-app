import React from 'react';
import s from './Icons.module.css';

const IconLinkedin = ({Fill, iconFill}) => {
  return (
    <svg className={s.linkedin} width="22" height="22" fill="none">
      <title id="title">Linkedin</title>
      <path id={s.path_1} fill={iconFill} d="M11 1a10 10 0 110 20 10 10 0 010-20z"/>
      <path id={s.path_2} fill={Fill}
            d="M7 8l1-1-1-2-2 2 2 1zm-1 8h2V9H6v7zm7-5l-1 2v3H9V9h3v1l2-1c1 0 2 1 2 3v4h-2v-3l-1-2z"
            opacity=".5"/>
    </svg>

  )
}
export default IconLinkedin;