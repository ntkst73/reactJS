const Header = () => {
    return (
        <header class="header">
            <div class="header__left-block">
                <div class="header__logo">
                    <img src="assets/icons/logo.svg" alt="Логотип"></img>
                </div>
                <nav class="header__links">
                    <a href="#" class="header__link">Доставка питания</a>
                    <a href="#" class="header__link">Второй пункт</a>
                </nav>
            </div>
            <div class="header__right-block">
                <button data-modal class="btn btn_white">Связаться с нами</button>
            </div>
        </header>
    );
}

export default Header;