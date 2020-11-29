import React, {useState} from 'react';
import Link from '../Link/link';

const Header = () => {
    const [state, setstate] = useState({
        value1: 'Ваш город',
        value2: 'Связаться с нами'
    })

    return (
        <header className="header">
            <div className="header__left-block">
                <div className="header__logo">
                    <img src="assets/icons/logo.svg" alt="Логотип"></img>
                </div>
                <nav className="header__links">
                    <Link text='Доставка питания' classes='header__link'/>
                    <Link text='Второй пункт' classes='header__link'/>
                    <div className="city">{state.value1}</div>
                </nav>
            </div>
            <div className="header__right-block">
                <button data-modal className="btn btn_white">{state.value2}</button>
            </div>
        </header>
    );
}

export default Header;