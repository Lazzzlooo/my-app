import React from 'react';
import s from './Profile.module.scss';
import ProfileCard from "./ProfileCard/ProfileCard";
import ProfileDescription from "./ProfileDescription/ProfileDescription";

const Profile = (props) => {
  let state = props.store.getState().profilePage.user;
  return (
    <section className={s.profile}>
      <ul className={s.list}>
        <li className={s.item}>
          <ProfileCard firstName={state.firstName} lastName={state.lastName} job={state.job}/>
        </li>
        <li className={s.item}>
          <ProfileDescription birthday={state.birthday} currentCity={state.currentCity}
                              website={state.website} isOnline={state.isOnline}/>
        </li>
      </ul>
    </section>
  );
}

export default Profile;