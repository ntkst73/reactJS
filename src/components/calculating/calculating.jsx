const Calculating = () => {
    return (
        <div class="calculating">
            <div class="container">
                <h2 class="title">Рассчитаем вашу потребность в калориях?
                </h2>
                <div class="calculating__field">
                    <div class="calculating__subtitle">
                        Ваш пол
                    </div>
                    <div class="calculating__choose" id="gender">
                        <div class="calculating__choose-item calculating__choose-item_active">Женщина</div>
                        <div class="calculating__choose-item">Мужчина</div>
                    </div>

                    <div class="calculating__subtitle">
                        Ваша конституция
                    </div>
                    <div class="calculating__choose calculating__choose_medium">
                        <input type="text" id="height" placeholder="Введите рост" class="calculating__choose-item"></input>
                        <input type="text" id="weight" placeholder="Введите вес" class="calculating__choose-item"></input>
                        <input type="text" id="age" placeholder="Введите возраст" class="calculating__choose-item"></input>
                    </div>

                    <div class="calculating__subtitle">
                        Выберите вашу физическая активность
                    </div>
                    <div class="calculating__choose calculating__choose_big">
                        <div id="low" class="calculating__choose-item">Низкая активность </div>
                        <div id="small" class="calculating__choose-item calculating__choose-item_active">Невысокая активность</div>
                        <div id="medium" class="calculating__choose-item">Умеренная активность</div>
                        <div id="high" class="calculating__choose-item">Высокая активность</div>
                    </div>

                    <div class="calculating__divider"></div>

                    <div class="calculating__total">
                        <div class="calculating__subtitle">
                            Ваша суточная норма калорий:
                    </div>
                        <div class="calculating__result">
                            <span>2700</span> ккал
                    </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Calculating;