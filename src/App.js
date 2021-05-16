import { Route, Link } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homePage/homepage.component';
import ShopPage from './pages/shop/shop.component'
import './pages/homePage/homepage.styles.scss';


function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />      
    </div>
  );
}

export default App;
