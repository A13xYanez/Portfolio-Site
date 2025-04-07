import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

import Nav from './components/global/nav/Nav';
import Menu from './components/global/menu/Menu';
import Landing from './components/landing/Landing';

function App() {
  const location = useLocation();

  return (
    <div className='contain-app'>
      <div className="app-contents">
        <Nav />
        <Menu />
          <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Landing />} exact />
          </Routes>
      </div>
    </div>
  );
};

export default App;