import './App.css';
import Header from './components/Header/header.jsx';
import SidePanel from './components/SlidePanel/sidePanel.jsx';
import Preview from './components/preview/preview.jsx';
import Offer from './components/Offer/offer.jsx';
import Calculating from './components/calculating/calculating.jsx';
import Footer from './components/Footer/footer.jsx';
import Order from './components/Order/order.jsx';
import Promotion from './components/promotion/promotion.jsx';
import Modal from './components/Modal/modal.jsx';
import Divider from './components/divider/divider.jsx';
import Menu from './components/Menu/menu.jsx';
import {BrowserRouter, Route} from 'react-router-dom';

import slider1 from './assets/images/slider/food-12.jpg';
import slider2 from './assets/images/slider/olive-oil.jpg';
import slider3 from './assets/images/slider/paprika.jpg';
import slider4 from './assets/images/slider/pepper.jpg';
import tabs1 from './assets/images/tabs/elite.jpg';
import tabs2 from './assets/images/tabs/hamburger.jpg';
import tabs3 from './assets/images/tabs/post.jpg';
import tabs4 from './assets/images/tabs/vegy.jpg';
import icon1 from './assets/icons/facebook.svg';
import icon2 from './assets/icons/Group 5.svg';
import icon3 from './assets/icons/instagram.svg';
import icon4 from './assets/icons/left.svg';
import icon5 from './assets/icons/logo.svg';
import icon6 from './assets/icons/right.svg';
import icon7 from './assets/icons/switch.svg';
import icon8 from './assets/icons/veg.svg';
import spinner from './assets/icons/spinner.svg';
import Ulsk from './components/ulsk/ulsk';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
          <Route path='/moskow' component={SidePanel}/>
          <Route path='/ulsk' component={Ulsk}/>
      </BrowserRouter>
      <Preview />
      <Divider />
      <Offer />
      <Divider />
      <Calculating />
      <Menu />
      <Order />
      <Divider />
      <Promotion />
      <Footer>
      </Footer>
      <Modal />
      <Divider />


    </div>
  );
}

export default App;
