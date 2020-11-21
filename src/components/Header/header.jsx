import React from 'react';
import Link from '../Link/link';
const Header = () => {
    return (
        <header class="header">
            <div class="header__left-block">
                <div class="header__logo">
                    <img src="assets/icons/logo.svg" alt="Логотип"></img>
                </div>
                <nav class="header__links">
                    <Link text='Доставка питания' classes='header__link'/>
                    <Link text='Второй пункт' classes='header__link'/>
                </nav>
            </div>
            <div class="header__right-block">
                <button data-modal class="btn btn_white">Связаться с нами</button>
            </div>
        </header>
    );
}

export default Header;