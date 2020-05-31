import React from 'react';

const Header = () => {
    return (
        <header className="header container">
            <ul className="header__list">
                <li className="header__item">
                    <a className="header__logo logo" href="#">Chat</a>
                </li>
                <li className="header__item">
                    <div className="header__search search">
                        <form action="" className="search-form">
                            <input type="text" placeholder={"Search"}/>
                        </form>
                    </div>
                </li>
                <li className="header__item">
                    <a href="#" className="header__user">User Name</a>
                    <img src="/src/img/Photo.png" alt="" width={40} height={40}/>
                </li>
            </ul>
        </header>

    );
}

export default Header;