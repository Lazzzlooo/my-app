import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Header.module.scss';
import avatar from '../../img/Photo.png'

const Header = (props) => {
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
          {props.isAuth
            ? <NavLink to={`/profile/${props.userId}`} className={s.user}>
              {props.login}
              <img className={s.avatar} src={avatar} alt="" width={40} height={40}/>
            </NavLink>
            :<NavLink to="/login" className={s.user}>Login</NavLink>}

        </li>
      </ul>
    </header>

  );
}

export default Header;