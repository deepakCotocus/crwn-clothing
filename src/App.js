import { Route, Link } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homePage/homepage.component.jsx';
import './pages/homePage/homepage.styles.scss';

const HatsPage = (props) => {
  console.log(props);
  return (
    <div>
      {/* <Link to='/topics'>Topics</Link> */}
      <h1>Hats Page</h1>
    </div>
  )
};

function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage} />
      <Route path='/hats' component={HatsPage} />      
    </div>
  );
}

export default App;
