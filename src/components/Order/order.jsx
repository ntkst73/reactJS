const Order = () => {
    return (
        <div class="order">
            <div class="container">
                <div class="title">Заказывай пробный день прямо сейчас!</div>
                <form action="#" class="order__form">
                    <input required placeholder="Ваше имя" name="name" type="text" class="order__input"></input>
                    <input required placeholder="Ваш номер телефона" name="phone" type="phone" class="order__input"></input>
                    <img src="assets/icons/right.svg" alt="right"></img>
                    <button class="btn btn_dark btn_min">Перезвонить мне</button>
                </form>
            </div>
        </div>
    );
}

export default Order;