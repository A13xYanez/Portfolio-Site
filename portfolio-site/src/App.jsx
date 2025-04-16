import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './App.css';

import Nav from './components/global/nav/Nav';
import Menu from './components/global/menu/Menu';
import Landing from './components/landing/Landing';
import Projects from './components/projects/Projects';
import About from './components/about/About';
import Contact from './components/contact/Contact';

function App() {
  const location = useLocation();

  return (
    <div className='contain-app'>
      <div className="app-contents">
        <Nav page={location.pathname} />
        <Menu />
        <AnimatePresence mode='wait'>
          <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Landing />} exact />
            <Route path='/projects' element={<Projects />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default App;