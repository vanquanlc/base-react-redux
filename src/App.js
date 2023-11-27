
import './App.scss';
import Header from './components/Header/Header';
import { Link, Outlet } from 'react-router-dom';
const App = () => {

  return (
    <div className="App">
      <div className='header-container'>
        <Header/>
      </div>
      <div className='main-container'>
        <Outlet/>
      </div>

    </div>
  );
}

export default App;
