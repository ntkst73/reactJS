import React from 'react';
import Link from '../Link/link';


const Footer = () => {
    return (
        <footer class="footer">
            <div class="container">
                <div class="social">
                    <div class="subtitle">Мы в социальных сетях:</div>
                    <Link text='instagram' classes='link'/>
                    <Link text='facebook' classes='link'/>
                </div>
                <div class="pepper">
                    <img src="assets/icons/veg.svg" alt="pepper"></img>
                </div>
                <div class="call">
                    <div class="subtitle">Или позвоните нам</div>
                    <Link text='+380678341034' classes='link'/>
                    <Link text='+380500941356' classes='link'/>
                </div>
            </div>
        </footer>
    );
}

export default Footer;