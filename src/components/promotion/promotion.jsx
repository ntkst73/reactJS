const Promotion = () => {
    return (
        <div className="promotion">
            <div className="bgc_y"></div>
            <div className="container">
                <div className="promotion__text">
                    <div className="title">Акция для новых клиентов!</div>
                    <div className="promotion__descr">
                        Мы ценим каждого клиента и предлагаем вам стать одним из них на очень выгодных условиях.
                        Каждому, кто закажет доставку питание на неделю, будет предоставлена скидка в размере <span>20%!</span>
                        <br></br><br></br>
                         Акция закончится 20 мая в 00:00
                    </div>
                </div>
                <div className="promotion__timer">
                    <div className="title">Осталось до конца акции:</div>
                    <div className="timer">
                        <div className="timer__block">
                            <span id="days">12</span>дней
                        </div>
                        <div className="timer__block">
                            <span id="hours">20</span>часов
                        </div>
                        <div className="timer__block">
                            <span id="minutes">56</span>минут
                        </div>
                        <div className="timer__block">
                            <span id="seconds">20</span>секунд
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Promotion;