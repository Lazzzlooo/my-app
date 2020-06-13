import React from 'react';
import s from './ProfileDescription.module.css';
import PhotoGallery from "./PhotoGallery/PhotoGallery";

const ProfileDescription = () => {
  return (
    <div className={s.info}>
      <p className={s.isOnline}>last seen one hour ago</p>
      <ul className={s.about}>
        {/*Ключ _ значение ?*/}
        <li className={s.about_key}>
          <p>Birthday:</p>
          <p>Current city:</p>
          <p>Website:</p>
        </li>
        <li className={s.about_value}>
          <a href={"#"}>February 20, 2000</a>
          <a href={"#"}>New-York</a>
          <a href={"#"}>www.x.com</a>
        </li>
      </ul>
      <PhotoGallery />

    </div>

  );
}

export default ProfileDescription;