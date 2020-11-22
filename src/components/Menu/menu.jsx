const Menu = () => {

    let menuCards = [
        {
            src: 'assets/images/tabs/vegy.jpg',
            alt: 'vegu',
            title: 'Меню "Фитнес"',
            desc: 'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!"',
            price: 9,
        },
        {
            src: 'assets/images/tabs/elite.jpg',
            alt: 'premium',
            title: 'Меню "Премиум"',
            desc: 'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
            price: 12,
        },
        {
            src: 'assets/images/tabs/post.jpg',
            alt: 'postnoe',
            title: 'Меню "Постное"',
            desc: 'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
            price: 16
        }
    ];

    let menuCardsRender = menuCards.map(card => 
        <div class="menu__item">
            <img src={card.src} alt={card.alt}></img>
            <h3 class="menu__item-subtitle">{card.title}</h3>
            <div class="menu__item-descr">{card.desc}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>{card.price}</span> дол/день</div>
            </div>
        </div>
    )


    return (
        <div class="menu">
            <h2 class="title">Наше меню на день</h2>
            <div class="menu__field">
                <div class="container js-container">
                    {menuCardsRender}
                </div>
            </div>
        </div>
    );        
}

export default Menu;