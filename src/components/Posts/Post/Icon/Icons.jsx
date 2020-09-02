import React from 'react';

export const Comments = ({fill, stroke}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 533 512" width="16" height="16">
      <path
        d="M82.5 481.4H46.3L72 455.7a86.73 86.73 0 0024.8-51.3C37.5 365.5 8 309.2 8 250.2 8 141.3 108.1 30.6 264.9 30.6 431 30.6 520 132.4 520 240.6c0 108.9-90 210.7-255.1 210.7-28.9 0-59.1-3.9-86.1-10.9-25.5 26.2-60.1 41-96.3 41z"
        fill={fill} stroke={stroke} strokeWidth="20" strokeMiterlimit="10"/>
    </svg>
  )
}

export const Share = ({fill, stroke}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 536 531" width="16" height="16">
      <path
        d="M406 340c-29.6 0-55.8 14.6-72.2 36.8L192 304.1c2.4-8 4-16.3 4-25.1 0-11.9-2.4-23.2-6.7-33.6L337.8 156c16.5 19.4 40.8 32 68.2 32 49.6 0 90-40.4 90-90S455.6 8 406 8s-90 40.4-90 90c0 11.4 2.4 22.3 6.3 32.4L173.4 220c-16.5-18.9-40.5-31-67.4-31-49.6 0-90 40.4-90 90s40.4 90 90 90c30.1 0 56.7-15 73-37.8l141.4 72.4c-2.6 8.4-4.4 17.2-4.4 26.4 0 49.6 40.4 90 90 90s90-40.4 90-90-40.4-90-90-90z"
        fill={fill} stroke={stroke} strokeWidth="20" strokeMiterlimit="10"/>
    </svg>
  )
}

export const Like = ({fill, stroke}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 532.4 512" width="16" height="16">
      <path
        d="M387 30c-27.8 0-53.3 8.8-75.7 26.2-21.5 16.6-35.8 37.8-44.3 53.2-8.4-15.4-22.8-36.6-44.3-53.3C200.3 38.8 174.8 30 147 30 69.5 30 11 93.4 11 177.5c0 90.9 72.9 153 183.4 247.1 18.8 16 40 34.1 62.1 53.4 2.9 2.5 6.7 4 10.5 4s7.6-1.4 10.5-4c22.1-19.3 43.3-37.4 62.1-53.4C450.1 330.5 523 268.4 523 177.5 523 93.4 464.6 30 387 30z"
        fill={fill} stroke={stroke} strokeWidth="20" strokeMiterlimit="10"/>
    </svg>
  )
}
