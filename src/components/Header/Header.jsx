import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Header.module.scss';
import avatar from '../../img/Photo.png'

const Header = (props) => {

  let state = props.store.getState().profilePage.user;

  return (
    <header className={s.header}>
      <ul className={s.list}>
        <li className={s.item}>
          <NavLink className={s.logo} to='/feed'>Chat</NavLink>
        </li>
        <li className={s.item}>
          <div className={s.search}>
            <form action="" className={s.search_form}>
              <input type="text" placeholder={'Search'}/>
            </form>
          </div>
        </li>
        <li className={s.item}>
          <NavLink to="#" className={s.user}>
            {state.firstName} {state.lastName}
            <img className={s.avatar} src={avatar} alt="" width={40} height={40}/>
          </NavLink>

        </li>
      </ul>
    </header>

  );
}

export default Header;