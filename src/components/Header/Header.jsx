import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header} >
            <ul className={s.list}>
                <li className={s.item}>
                    <NavLink className={s.logo} to='/feed'>Chat</NavLink>
                </li>
                <li className={s.item}>
                    <div className={s.search}>
                        <form action="" className="search-form">
                            <input type="text" placeholder={"Search"}/>
                        </form>
                    </div>
                </li>
                <li className={s.item}>
                    <NavLink to="#" className={s.user}>User Name</NavLink>
                    <img src="/src/img/Photo.png" alt="" width={40} height={40}/>
                </li>
            </ul>
        </header>

    );
}

export default Header;