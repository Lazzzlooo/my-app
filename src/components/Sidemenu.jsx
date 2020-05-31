import React from 'react';

const Sidemenu = () => {
    return (
        <aside className="sidemenu container">
            <ul className="sidemenu__list">
                <li className="sidemenu__item">
                    <a href="#" className="sidemenu__link">Profile</a>
                </li>
                <li className="sidemenu__item">
                    <a href="#" className="sidemenu__link">Friends</a>
                </li>
                <li className="sidemenu__item">
                    <a href="#" className="sidemenu__link">Chats</a>
                </li>
                <li className="sidemenu__item">
                    <a href="#" className="sidemenu__link">Music</a>
                </li>
                <li className="sidemenu__item">
                    <a href="#" className="sidemenu__link">News</a>
                </li>
                <li className="sidemenu__item">
                    <a href="#" className="sidemenu__link">Games</a>
                </li>
                <li className="sidemenu__item">
                    <a href="#" className="sidemenu__link">Setting</a>
                </li>
            </ul>

        </aside>
    );
}

export default Sidemenu;