import React from 'react';

const IconTwitter = ({Fill, iconFill}) => {
  return (
    <svg width="20" height="20" fill="none">
      <title id="title">Twitter</title>
      <path fill={iconFill} d="M10 0a10 10 0 110 20 10 10 0 010-20z"/>
      <path fill={Fill} d="M4 13l4 1c4 0 7-3 7-6l1-1h-1l1-1h-2l-2-1-2 3-5-2C4 7 4 8 6 9H4l2 2H5l3 2H4z" opacity=".5"/>
    </svg>
  )
}
export default IconTwitter;