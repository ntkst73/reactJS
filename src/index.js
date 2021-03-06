import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './redux/state';


ReactDOM.render(
  <React.StrictMode>
    <App appState= {state}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


window.addEventListener('DOMContentLoaded', () => {
    //имитация запроса с сервера
    console.log('Запрос данных');
    const req = new Promise(function(resolve, reject){
        setTimeout(() => {
            console.log('Подготовка данных...');
        
            const product = {
                name: 'Phone',
                price: 10000,
            };
        
            resolve(product);
        },2000);  
    });

    req.then((product) => {
        setTimeout(() => {
            product.status = 'order';
            console.log(product);
        }, 2000);
    });

    //табы
    const tabItem = document.querySelectorAll('.tabheader__item'),
        tabContent = document.querySelectorAll('.tabcontent'),
        tabParents = document.querySelector('.tabheader__items');

        function hideTabContent() {
            tabContent.forEach(item => {
                item.classList.remove('visible');
                item.classList.add('hide');
            });

            tabItem.forEach(item => {
                item.classList.remove('tabheader__item_active');
            });
        }

        function visibleTabContent(i) {
            tabContent[i].classList.add('visible');
            tabItem[i].classList.add('tabheader__item_active');
        }

        hideTabContent();
        visibleTabContent(0);

        tabParents.addEventListener('click', (event) => {
            const target = event.target;

            if (target && target.classList.contains('tabheader__item')) {
                tabItem.forEach((item, i) => {
                    if(target == item) {
                        hideTabContent();
                        visibleTabContent(i);
                    }
                });
            }
        });
        // модалка
        const   modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal');

        function closeModal() {
            modal.classList.add('hidden');
            modal.classList.remove('show');
            document.body.style.overflow = '';
        }

        function openModal() {
            modal.classList.add('show');
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
            clearInterval(modalTimer);
        }

        modalTrigger.forEach(btn => {
            btn.addEventListener('click', openModal);
        });

        modal.addEventListener('click', (e) => {
            if(e.target === modal || e.target.getAttribute('data-close')) {
                closeModal();
            }
        });

        const  modalTimer = setTimeout(openModal, 50000);

        function showModalByScroll() {
            if (window.pageYOffset + document.documentElement.clientHeight > document.documentElement.scrollHeight) {
                openModal();
                window.removeEventListener('scroll', showModalByScroll);
            }
        }

        window.addEventListener('scroll', showModalByScroll);


    //таймер

    const deadline = '2021-01-01';

    function getTimeRemaining(endTime) {
        const   t = Date.parse(endTime) - Date.parse(new Date()),
                days = Math.floor(t / (1000 * 60 * 60 * 24)),
                hours = Math.floor(t / (1000 * 60 * 60) % 24),
                minutes = Math.floor(t / (1000 * 60) % 60),
                seconds = Math.floor((t / 1000) % 60);
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        }

        else {
            return num;
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer', deadline);

    const forms = document.querySelectorAll('form');
    const message = {
        loading: 'assets/images/spinner.svg',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    forms.forEach(item => {
        postData(item);
    });

    function postData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            

            let statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText =`
                display: block;
                margin: 0 auto;
            `;
            form.append(statusMessage);
        
            // const request = new XMLHttpRequest();
            // request.open('POST', 'server.php');
            
            
            // request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            const formData = new FormData(form);

            // const object = {};
            // formData.forEach(function(value, key){
            //     object[key] = value;
            // });
            // const json = JSON.stringify(object);

            // request.send(json);
            fetch('server.php', {
                method: "POST",
                // headers: {
                //     'Content-type': 'application/json'
                // },
                body: formData
            }).then(data => data.text())
            .then(data => {
                console.log(data);
                showThanksModal(message.success);
                statusMessage.remove();
            }).catch(() => {
                showThanksModal(message.failure);
                statusMessage.remove();
            }).finally(() => {
                form.reset();
            });
            // request.addEventListener('load', () => {
            //     if (request.status === 200) {
            //         console.log(request.response);
            //         showThanksModal(message.success);
            //         form.reset();
            //         statusMessage.remove();
            //     } else {
            //         showThanksModal(message.failure);
            //         statusMessage.remove();
            //         form.reset();
            //     }
            // });
        });
    }

    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');

        prevModalDialog.classList.add('hidden');
        openModal();

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>х</div>
                <div class="modal__title">${message}</div>
            </div>
        `;

        document.querySelector('.modal').append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hidden');
            closeModal();
        }, 1000);
    }
});