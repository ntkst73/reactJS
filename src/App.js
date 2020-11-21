import './App.css';
import Header from './components/header';
import SidePanel from './components/sidePanel';
import Preview from './components/preview';
import Offer from './components/offer';
import Calculating from './components/calculating';
import Footer from './components/footer';
import Order from './components/order';
import Promotion from './components/promotion';
import Modal from './components/modal';
import Divider from './components/divider';
import Menu from './components/menu';

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

function App() {
  return (
    <div className="App">
      <Header />
      <SidePanel />
      <Preview />
      <Divider />
      <Offer />
      <Divider />
      <Calculating />
      <Menu />
      <Order />
      <Divider />
      <Promotion />
      <Footer />
      <Modal />
      <Divider />


    </div>
  );
}

export default App;
