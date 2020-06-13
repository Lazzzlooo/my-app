import React from 'react';

const IconLinkedin = ({Fill, iconFill}) => {
  return (
    <svg width="22" height="22" fill="none">
      <title id="title">Linkedin</title>
      <path fill={iconFill} fill-rule="evenodd" d="M11 1a10 10 0 110 20 10 10 0 010-20z" clip-rule="evenodd"/>
      <path fill={Fill} fill-rule="evenodd"
            d="M7 8l1-1-1-2-2 2 2 1zm-1 8h2V9H6v7zm7-5l-1 2v3H9V9h3v1l2-1c1 0 2 1 2 3v4h-2v-3l-1-2z" clip-rule="evenodd"
            opacity=".5"/>
    </svg>

  )
}
export default IconLinkedin;