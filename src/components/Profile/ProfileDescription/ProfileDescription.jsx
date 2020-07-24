import React from 'react';
import s from './ProfileDescription.module.scss';
import PhotoGallery from "./PhotoGallery/PhotoGallery";
import {NavLink} from 'react-router-dom';

const ProfileDescription = (props) => {
  return (
    <div className={s.info}>
      <p className={s.isOnline}>{props.isOnline}</p>
      <ul className={s.about}>
        {/*Ключ _ значение ?*/}
        <li className={s.about_key}>
          <p>Birthday:</p>
          <p>Current city:</p>
          <p>Website:</p>
        </li>
        <li className={s.about_value}>
          <NavLink to={"#"}>{props.birthday}</NavLink>
          <NavLink to={"#"}>{props.currentCity}</NavLink>
          <NavLink to={"#"}>{props.website}</NavLink>
        </li>
      </ul>
      <PhotoGallery />

    </div>

  );
}

export default ProfileDescription;