import React from 'react';
import s from './Sidemenu.module.css';

const Sidemenu = () => {
    return (
        <aside className={s.sidemenu}>
            <ul className={s.list}>
                <li className={s.item}>
                    <a href="#" className={s.link}>Profile</a>
                </li>
                <li className={s.item}>
                    <a href="#" className={s.link}>Friends</a>
                </li>
                <li className={s.item}>
                    <a href="#" className={s.link}>Chats</a>
                </li>
                <li className={s.item}>
                    <a href="#" className={s.link}>Music</a>
                </li>
                <li className={s.item}>
                    <a href="#" className={s.link}>News</a>
                </li>
                <li className={s.item}>
                    <a href="#" className={s.link}>Games</a>
                </li>
                <li className={s.item}>
                    <a href="#" className={s.link}>Setting</a>
                </li>
            </ul>

        </aside>
    );
}

export default Sidemenu;