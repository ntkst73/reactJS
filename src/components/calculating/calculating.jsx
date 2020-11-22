const Calculating = () => {
    return (
        <div className="calculating">
            <div className="container">
                <h2 className="title">Рассчитаем вашу потребность в калориях?
                </h2>
                <div className="calculating__field">
                    <div className="calculating__subtitle">
                        Ваш пол
                    </div>
                    <div className="calculating__choose" id="gender">
                        <div className="calculating__choose-item calculating__choose-item_active">Женщина</div>
                        <div className="calculating__choose-item">Мужчина</div>
                    </div>

                    <div className="calculating__subtitle">
                        Ваша конституция
                    </div>
                    <div className="calculating__choose calculating__choose_medium">
                        <input type="text" id="height" placeholder="Введите рост" className="calculating__choose-item"></input>
                        <input type="text" id="weight" placeholder="Введите вес" className="calculating__choose-item"></input>
                        <input type="text" id="age" placeholder="Введите возраст" className="calculating__choose-item"></input>
                    </div>

                    <div className="calculating__subtitle">
                        Выберите вашу физическая активность
                    </div>
                    <div className="calculating__choose calculating__choose_big">
                        <div id="low" className="calculating__choose-item">Низкая активность </div>
                        <div id="small" className="calculating__choose-item calculating__choose-item_active">Невысокая активность</div>
                        <div id="medium" className="calculating__choose-item">Умеренная активность</div>
                        <div id="high" className="calculating__choose-item">Высокая активность</div>
                    </div>

                    <div className="calculating__divider"></div>

                    <div className="calculating__total">
                        <div className="calculating__subtitle">
                            Ваша суточная норма калорий:
                    </div>
                        <div className="calculating__result">
                            <span>2700</span> ккал
                    </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Calculating;