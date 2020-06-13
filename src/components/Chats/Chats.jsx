import React from 'react';
import s from './Chats.module.css';
import {NavLink} from 'react-router-dom';
import Chat from "./Chat/Chat";
import SearchForm from "./SearchForm/SearchForm";

const Chats = () => {
  return (
    <div className={s.chats}>

      <ul className={s.list}>
        <li className={s.item}><SearchForm /></li>
        <li className={s.item}>
          <NavLink to='/chats/1' activeClassName={s.active} className={s.link}><Chat /></NavLink>
        </li>
        <li className={s.item}>
          <NavLink to='/chats/2' activeClassName={s.active} className={s.link}><Chat /></NavLink>
        </li>
        <li className={s.item}>
          <NavLink to='/chats/3' activeClassName={s.active} className={s.link}><Chat /></NavLink>
        </li>
        <li className={s.item}>
          <NavLink to='/chats/4' activeClassName={s.active} className={s.link}><Chat /></NavLink>
        </li>
        <li className={s.item}>
          <NavLink to='/chats/5' activeClassName={s.active} className={s.link}><Chat /></NavLink>
        </li>
        <li className={s.item}>
          <NavLink to='/chats/6' activeClassName={s.active} className={s.link}><Chat /></NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Chats;