const Modal = () => {
    return (
        <div className="modal">
            <div className="modal__dialog">
                <div className="modal__content">
                    <form action="#">
                        <div data-close className="modal__close">&times;</div>
                        <div className="modal__title">Мы свяжемся с вами как можно быстрее!</div>
                        <input required placeholder="Ваше имя" name="name" type="text" className="modal__input"></input>
                        <input required placeholder="Ваш номер телефона" name="phone" type="phone" className="modal__input"></input>
                        <button className="btn btn_dark btn_min">Перезвонить мне</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Modal;