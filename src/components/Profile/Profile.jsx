import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div className={s.profile}>
            <ul className={s.list}>
                <li className={s.item}>
                    <p className={s.avatar}>
                        <img src="https://img.icons8.com/plasticine/2x/user.png" width={200} height={200} alt=""/>
                    </p>
                    <div className={s.user_descr}>
                        <p className={s.name}>User Name</p>
                        <p className={s.working}>User Job</p>
                    </div>
                    <ul className={s.social_list}>
                        <li className={s.social_item}><a href="#">Facebook</a></li>
                        <li className={s.social_item}><a href="#">Twitter</a></li>
                        <li className={s.social_item}><a href="#">Instagram</a></li>
                        <li className={s.social_item}><a href="#">Linkedin</a></li>
                    </ul>
                    <div className={s.buttons}>
                        <button className={s.button_message}>Message</button>
                        <button className={s.button_more}>More</button>
                    </div>
                </li>
                <li className={s.item}>
                    <div className={s.info}>
                        <p className={s.online}>last seen one hour ago</p>
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
                        <div className={s.photo}>
                            <p className={s.title}>My Photo</p>
                            <ul className={s.photo_list}>
                                <li className={s.photo_item}>
                                    <a href="#">
                                        <img src="https://via.placeholder.com/94" alt=""/>
                                    </a>
                                </li>
                                <li className={s.photo_item}>
                                    <a href="#">
                                        <img src="https://via.placeholder.com/94" alt=""/>
                                    </a>
                                </li>
                                <li className={s.photo_item}>
                                    <a href="#">
                                        <img src="https://via.placeholder.com/94" alt=""/>
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Profile;