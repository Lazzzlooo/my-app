import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header} >
            <ul className={s.list}>
                <li className={s.item}>
                    <a className={s.logo} href="#">Chat</a>
                </li>
                <li className={s.item}>
                    <div className={s.search}>
                        <form action="" className="search-form">
                            <input type="text" placeholder={"Search"}/>
                        </form>
                    </div>
                </li>
                <li className={s.item}>
                    <a href="#" className={s.user}>User Name</a>
                    <img src="/src/img/Photo.png" alt="" width={40} height={40}/>
                </li>
            </ul>
        </header>

    );
}

export default Header;