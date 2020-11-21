const Modal = () => {
    return (
        <div class="modal">
            <div class="modal__dialog">
                <div class="modal__content">
                    <form action="#">
                        <div data-close class="modal__close">&times;</div>
                        <div class="modal__title">Мы свяжемся с вами как можно быстрее!</div>
                        <input required placeholder="Ваше имя" name="name" type="text" class="modal__input"></input>
                        <input required placeholder="Ваш номер телефона" name="phone" type="phone" class="modal__input"></input>
                        <button class="btn btn_dark btn_min">Перезвонить мне</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Modal;