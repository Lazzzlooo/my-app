import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Sidemenu.module.css';

const Sidemenu = () => {
    return (
        <aside className={s.sidemenu}>
            <ul className={s.list}>
                <li className={s.item}>
                    <NavLink to='/profile' activeClassName={s.active} className={s.link}>Profile</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to='/friends' activeClassName={s.active} className={s.link}>Friends</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to='/chats' activeClassName={s.active} className={s.link}>Chats</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to='/music' activeClassName={s.active} className={s.link}>Music</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to='/feed' activeClassName={s.active} className={s.link}>News</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to='/games' activeClassName={s.active} className={s.link}>Games</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to='/setting' activeClassName={s.active} className={s.link}>Setting</NavLink>
                </li>
            </ul>

        </aside>
    );
}

export default Sidemenu;