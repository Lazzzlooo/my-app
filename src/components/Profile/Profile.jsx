import React from 'react';
import s from './Profile.module.css';
import ProfileCard from "./ProfileCard/ProfileCard";
import ProfileDescription from "./ProfileDescription/ProfileDescription";

const Profile = () => {
  return (
    <div className={s.profile}>
      <ul className={s.list}>
        <li className={s.item}>
          <ProfileCard />
        </li>
        <li className={s.item}>
          <ProfileDescription />
        </li>
      </ul>
    </div>
  );
}

export default Profile;