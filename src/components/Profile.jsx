import React from 'react';

const Profile = () => {
    return (
        <section className="profile container">
            <ul className="profile__list">
                <li className="profile__item">
                    <p className="profile__avatar">
                        <img src="https://img.icons8.com/plasticine/2x/user.png" width={200} height={200} alt=""/>
                    </p>
                    <div className="profile__user-descr">
                        <p className="profile__name">User Name</p>
                        <p className="profile__working">User Job</p>
                    </div>
                    <ul className="profile__social-list">
                        <li className="profile__social-item"><a href="#">Facebook</a></li>
                        <li className="profile__social-item"><a href="#">Twitter</a></li>
                        <li className="profile__social-item"><a href="#">Instagram</a></li>
                        <li className="profile__social-item"><a href="#">Linkedin</a></li>
                    </ul>
                    <div className="profile__buttons">
                        <a href="" className="profile__button-message">Message</a>
                        <button className="profile__button-more">More</button>
                    </div>
                </li>
                <li className="profile__item">
                    <div className="profile__info">
                        <p className="profile__online">last seen one hour ago</p>
                        <ul className="profile__about">
                            {/*Ключ - значение ?*/}
                            <li className="profile__about--key">
                                <p>Birthday:</p>
                                <p>Current city:</p>
                                <p>Website:</p>
                            </li>
                            <li className="profile__about--value">
                                <a href={"#"}>February 20, 2000</a>
                                <a href={"#"}>New-York</a>
                                <a href={"#"}>www.x.com</a>
                            </li>
                        </ul>
                        <div className="profile__photo">
                            <p className="profile__title">My Photo</p>
                            <ul className="profile__photo-list">
                                <li className="profile__photo-item">
                                    <a href="#">
                                        <img src="https://via.placeholder.com/94" alt=""/>
                                    </a>
                                </li>
                                <li className="profile__photo-item">
                                    <a href="#">
                                        <img src="https://via.placeholder.com/94" alt=""/>
                                    </a>
                                </li>
                                <li className="profile__photo-item">
                                    <a href="#">
                                        <img src="https://via.placeholder.com/94" alt=""/>
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </li>
            </ul>
        </section>
    );
}

export default Profile;