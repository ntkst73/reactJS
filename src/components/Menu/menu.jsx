const Menu = (props) => {
    let menuCardsRender = props.menuCards.map(card => 
        <div className="menu__item">
            <img src={card.src} alt={card.alt}></img>
            <h3 className="menu__item-subtitle">{card.title}</h3>
            <div className="menu__item-descr">{card.desc}</div>
            <div className="menu__item-divider"></div>
            <div className="menu__item-price">
                <div className="menu__item-cost">Цена:</div>
                <div className="menu__item-total"><span>{card.price}</span> дол/день</div>
            </div>
        </div>
    )


    return (
        <div className="menu">
            <h2 className="title">Наше меню на день</h2>
            <div className="menu__field">
                <div className="container js-container">
                    {menuCardsRender}
                </div>
            </div>
        </div>
    );        
}

export default Menu;