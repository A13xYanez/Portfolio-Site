import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './App.css';

import Nav from './components/global/nav/Nav';
import Menu from './components/global/menu/Menu';
import Landing from './components/landing/Landing';
import Projects from './components/projects/Projects';

function App() {
  const location = useLocation();

  return (
    <div className='contain-app'>
      <div className="app-contents">
        <Nav />
        <Menu />
        <AnimatePresence mode='wait'>
          <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Landing />} exact />
            <Route path='/projects' element={<Projects />} exact />
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default App;