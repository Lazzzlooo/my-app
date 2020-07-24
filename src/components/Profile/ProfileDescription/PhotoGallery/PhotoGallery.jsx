import React from 'react';
import s from './PhotoGallery.module.scss';

const PhotoGallery = () => {
  return (
      <div className={s.photo}>
        <p className={s.title}>My Photo</p>
        <ul className={s.list}>
          <li className={s.item}>
            <p>
              <img src="https://via.placeholder.com/94" alt=""/>
            </p>
          </li>
          <li className={s.item}>
            <p>
              <img src="https://via.placeholder.com/94" alt=""/>
            </p>
          </li>
          <li className={s.item}>
            <p>
              <img src="https://via.placeholder.com/94" alt=""/>
            </p>
          </li>
        </ul>
      </div>
  );
}

export default PhotoGallery;