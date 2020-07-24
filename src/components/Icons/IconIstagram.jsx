import React from 'react';

const IconInstagram = ({Fill, iconFill}) => {
  return (
    <svg width="22" height="22" fill="none">
      <title id="title">Instagram</title>
      <path fill={iconFill} d="M11 1a10 10 0 110 20 10 10 0 010-20z"/>
      <path fill={Fill}
            d="M13 9a3 3 0 00-4 0H5V7l1-2v3h1V5v3h1V5v3-3h7l2 2v2h-4zm1-3v2h2V6h-2zm-2 3h1v2l-2 2-2-2a2 2 0 011-2 2 2 0 012 0zm-3 2l2 2 2-2-2-2-2 2zm6 6H8c-2 0-3-1-3-2V9h4l-1 2c0 2 2 3 3 3 2 0 3-1 3-3V9h3v6l-2 2z"
            opacity=".5"/>
    </svg>

  )
}
export default IconInstagram;