const Preview = () => {
    return (
        <div className="preview">
            <div className="bgc_blue"></div>
            <div className="container">
                <div className="tabcontainer">
                    <div className="tabcontent">
                        <img src="./assets/images/tabs/vegy.jpg" alt="vegy"></img>
                        <div className="tabcontent__descr">
                            Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Для людей, которые
                            интересуются спортом; активных и здоровых. Это абсолютно новый продукт с оптимальной ценой и высоким
                            качеством!
                        </div>
                    </div>
                    <div className="tabcontent">
                        <img src="assets/images/tabs/elite.jpg" alt="elite"></img>
                        <div className="tabcontent__descr">
                            Меню “Премиум” - мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд.
                            Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!
                        </div>
                    </div>
                    <div className="tabcontent">
                        <img src="/assets/images/tabs/post.jpg" alt="post"></img>
                        <div className="tabcontent__descr">
                            Наше специальное “Постное меню” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного
                            происхождения. Полная гармония с собой и природой в каждом элементе! Все будет Ом!
                        </div>
                    </div>
                    <div className="tabcontent">
                        <img src="assets/images/tabs/vegy.jpg" alt="vegy"></img>
                        <div className="tabcontent__descr">
                            Меню "Сбалансированное" - это соответствие вашего рациона всем научным рекомендациям. Мы тщательно
                            просчитываем вашу потребность в к/б/ж/у и создаем лучшие блюда для вас.
                    </div>
                    </div>
                    <div className="tabheader">
                        <h3>Выберите стиль питания</h3>
                        <div className="tabheader__items">
                            <div className="tabheader__item tabheader__item_active">Фитнес</div>
                            <div className="tabheader__item">Премиум</div>
                            <div className="tabheader__item">Постное</div>
                            <div className="tabheader__item">Сбалансированное</div>
                        </div>
                    </div>
                </div>
                <div className="preview__life">Живи полной жизнью!</div>
            </div>
        </div>
    );
}

export default Preview;