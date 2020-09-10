import React from 'react';
import s from './Profile.module.scss';
import ProfileCard from "./ProfileCard/ProfileCard";
import ProfileDescription from "./ProfileDescription/ProfileDescription";
import Preloader from '../common/Preloader/Preloader';

const Profile = (props) => {

  if (!props.profile) return <Preloader />
  return (
    <section className={s.profile}>
      <ul className={s.list}>
        <li className={s.item}>
          <ProfileCard fullName={props.profile.fullName}
                       status={props.status} updateStatus={props.updateStatus}
                       photo={props.profile.photos.large}
          />
        </li>
        <li className={s.item}>
          <ProfileDescription birthday={props.profile.birthday} currentCity={props.profile.currentCity}
                              website={props.profile.website} isOnline={props.profile.isOnline}/>
        </li>
      </ul>
    </section>
  );

}

export default Profile;