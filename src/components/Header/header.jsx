import React from 'react';
import Link from '../Link/link';

const Header = () => {
    return (
        <header className="header">
            <div className="header__left-block">
                <div className="header__logo">
                    <img src="assets/icons/logo.svg" alt="Логотип"></img>
                </div>
                <nav className="header__links">
                    <Link text='Доставка питания' classes='header__link'/>
                    <Link text='Второй пункт' classes='header__link'/>
                    <div className="city">Ваш город </div>
                </nav>
            </div>
            <div className="header__right-block">
                <button data-modal className="btn btn_white">Связаться с нами</button>
            </div>
        </header>
    );
}

export default Header;