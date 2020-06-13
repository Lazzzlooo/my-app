import React from 'react';

const IconFacebook = ({Fill, iconFill}) => {
  return (
    <svg className="facebook" width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <title id="title">Facebook</title>
      <path fill-rule="evenodd" clip-rule="evenodd"
            d="M11 1c5.523 0 10 4.477 10 10s-4.477 10-10 10S1 16.523 1 11 5.477 1 11 1z" fill={iconFill}/>
      <path opacity=".5" fill-rule="evenodd" clip-rule="evenodd"
            d="M9.494 16.983h2.18v-6.052h1.522l.162-2.026h-1.683V7.751c0-.478.086-.667.503-.667h1.18V4.982h-1.51c-1.623 0-2.354.791-2.354 2.307v1.616H8.36v2.052h1.134v6.026z"
            fill={Fill}/>
    </svg>

  )
}
export default IconFacebook;