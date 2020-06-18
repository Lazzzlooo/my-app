import React from 'react';
import s from './Profile.module.css';
import ProfileCard from "./ProfileCard/ProfileCard";
import ProfileDescription from "./ProfileDescription/ProfileDescription";

const Profile = (props) => {

  return (
    <div className={s.profile}>
      <ul className={s.list}>
        <li className={s.item}>
          <ProfileCard firstName={props.state.firstName} lastName={props.state.lastName} job={props.state.job}/>
        </li>
        <li className={s.item}>
          <ProfileDescription birthday={props.state.birthday} currentCity={props.state.currentCity}
                              website={props.state.website} isOnline={props.state.isOnline}/>
        </li>
      </ul>
    </div>
  );
}

export default Profile;