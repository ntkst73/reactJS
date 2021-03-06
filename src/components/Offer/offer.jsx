const Offer = () => {
    return (
        <div className="offer">
            <div className="bgc_y"></div>
            <div className="container">
                <div className="offer__text">
                    <h2 className="title">Что мы можем вам предложить?</h2>
                    <div className="offer__descr">
                        Наша основная идея - это правильное питание. Оно может быть простым и вкусным. Мы не просто доставка, мы
                        сервис! Мы взяли на себя все расчеты БЖУ, калорийности, объемов порций и прочие важные, но скучные аспекты.
                        Вам остается только полезная, сытная и правильная еда, которую мы привозим прямо под дверь.
                    </div>
                </div>
                <div className="offer__action">
                    <button data-modal className="btn btn_dark">Связаться с нами</button>
                </div>
            </div>
            <div className="container">
                <div className="offer__advantages">
                    <h2>Быстро и полезно</h2>
                    <div className="offer__advantages-text">
                        Готовка дома занимает много сил, времени и нервов. Мы привозим еду сразу на целый день, и ты можешь
                        действовать так, как тебе удобно, не подстраиваясь ни под кого и будучи уверенным в качестве продукта!
                    </div>
                    <h2>Правильный рацион</h2>
                    <div className="offer__advantages-text">
                        Мы разработали специальное меню, где учтены все нюансы правильного питания, от баланса БЖУ до их приготовления
                        и дробления рациона.
                    </div>
                </div>
                <div className="offer__slider">
                    <div className="offer__slider-counter">
                        <div className="offer__slider-prev">
                            <img src="assets/icons/left.svg" alt="prev"></img>
                        </div>
                        <span id="current">03</span>
                        /
                <span id="total">04</span>
                        <div className="offer__slider-next">
                            <img src="assets/icons/right.svg" alt="next"></img>
                        </div>
                    </div>
                    <div className="offer__slider-wrapper">
                        <div className="offer__slide">
                            <img src="assets/images/slider/pepper.jpg" alt="pepper"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Offer;