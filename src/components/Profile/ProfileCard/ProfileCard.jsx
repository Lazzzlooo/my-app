import React from 'react';
import s from './ProfileCard.module.css';
import avatar from '../../../img/Photo.png'
import IconFacebook from "../../Icons/IconFacebook";
import IconTwitter from "../../Icons/IconTwitter";
import IconLinkedin from "../../Icons/IconLinkedin";
import IconInstagram from "../../Icons/IconIstagram";

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
            <a href={"http:\\www.facebook.com"}>
              <IconFacebook iconFill="#E8E8EB" Fill="#393939"/>
              <span className={s.vissually_hidden}>Facebook</span>
            </a>
          </li>
          <li className={s.social_item}>
            <a href={"http:\\www.twitter.com"}>
              <IconTwitter iconFill="#e8e8e8" Fill="#393939"/>
              <span className={s.vissually_hidden}>Twitter</span>
            </a>
          </li>
          <li className={s.social_item}>
            <a href={"http:\\www.instagram.com"}>
              <IconInstagram iconFill="#e8e8e8" Fill="#393939"/>
              <span className={s.vissually_hidden}>Instagram</span>
            </a>
          </li>
          <li className={s.social_item}>
            <a href={"http:\\www.linkedin.com"}>
              <IconLinkedin iconFill="#e8e8e8" Fill="#393939"/>
              <span className={s.vissually_hidden}>Linkedin</span>
            </a>
          </li>
        </ul>
        <div className={s.buttons}>
          <button className={s.button_message}>Message</button>
          <button className={s.button_more}>More</button>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;