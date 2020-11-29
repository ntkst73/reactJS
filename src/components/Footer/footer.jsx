import React, {useEffect, useState} from 'react';
import Link from '../Link/link';


const Footer = () => {
    const [state, setstate] = useState({
        value1: 'Мы в социальных сетях',
        value2: 'Или позвоните нам',
        value3: '0'
    });

    const [counter, setcounter] = useState(0);

    useEffect(() => {
        document.title = `Вы нажали ${counter} раз`;
    });


    return (
        <footer className="footer">
            <div className="container">
                <div className="social">
                    <div className="subtitle">{state.value1}</div>
                    <button className="subtitle" onClick={() => setcounter(counter + 1)}>Добавит единицу</button>
                    <button className="subtitle" onClick={() => setcounter(counter - 1)}>Заберет единицу</button>
                    <div className="subtitle">{counter}</div>
                    <Link text='instagram' classes='link'/>
                    <Link text='facebook' classes='link'/>
                </div>
                <div className="pepper">
                    <img src="assets/icons/veg.svg" alt="pepper"></img>
                </div>
                <div className="call">
                    <div className="subtitle">{state.value2}</div>
                    <Link text='+380678341034' classes='link'/>
                    <Link text='+380500941356' classes='link'/>
                </div>
            </div>
        </footer>
    );
}

export default Footer;