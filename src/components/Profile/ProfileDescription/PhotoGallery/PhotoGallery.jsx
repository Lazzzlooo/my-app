import React from 'react';
import s from './PhotoGallery.module.css';

const PhotoGallery = () => {
  return (
      <div className={s.photo}>
        <p className={s.title}>My Photo</p>
        <ul className={s.list}>
          <li className={s.item}>
            <a href="#">
              <img src="https://via.placeholder.com/94" alt=""/>
            </a>
          </li>
          <li className={s.item}>
            <a href="#">
              <img src="https://via.placeholder.com/94" alt=""/>
            </a>
          </li>
          <li className={s.item}>
            <a href="#">
              <img src="https://via.placeholder.com/94" alt=""/>
            </a>
          </li>
        </ul>
      </div>
  );
}

export default PhotoGallery;