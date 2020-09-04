import React from 'react';
import s from './ProfileCard.module.scss';
import avatar from '../../../img/Photo.png'
import IconFacebook from "../../Icons/IconFacebook";
import IconTwitter from "../../Icons/IconTwitter";
import IconLinkedin from "../../Icons/IconLinkedin";
import IconInstagram from "../../Icons/IconIstagram";
import Button from '../../common/Button/Button';

const ProfileCard = (props) => {
  return (
    <div className={s.profile_card}>
      <div className={s.avatar}>
        <img src={avatar} width={260} height={260} alt=""/>
      </div>
      <div className={s.box}>
        <div className={s.user_descr}>
          <p className={s.name}>{props.firstName} {props.lastName}</p>
          <p className={s.working}>{props.job}</p>
        </div>
        <ul className={s.social_list}>
          <li className={s.social_item}>
            <p>
              <IconFacebook iconFill="#E8E8EB" Fill="#393939"/>
              <span className={s.visually_hidden}>Facebook</span>
            </p>
          </li>
          <li className={s.social_item}>
            <p>
              <IconTwitter iconFill="#e8e8e8" Fill="#393939"/>
              <span className={s.visually_hidden}>Twitter</span>
            </p>
          </li>
          <li className={s.social_item}>
            <p>
              <IconInstagram iconFill="#e8e8e8" Fill="#393939"/>
              <span className={s.visually_hidden}>Instagram</span>
            </p>
          </li>
          <li className={s.social_item}>
            <p>
              <IconLinkedin iconFill="#e8e8e8" Fill="#393939"/>
              <span className={s.visually_hidden}>Linkedin</span>
            </p>
          </li>
        </ul>
        <div className={s.buttons}>
          <Button buttonValue={'Message'}/>
          <Button buttonValue={'More'}/>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;