import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { PreloaderProvider } from './components/global/preloader/LoaderContext.jsx';
import { useCursor } from './components/global/cursor/CursorContext.jsx';
import './App.css';

import Nav from './components/global/nav/Nav';
import Menu from './components/global/menu/Menu';
import Landing from './components/landing/Landing';
import Projects from './components/projects/Projects';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Loader from './components/global/preloader/Loader';
import Cursor from './components/global/cursor/Cursor.jsx';

function App() {
  const location = useLocation();
  const { useCustomCursor } = useCursor();

  return (
    <div className={useCustomCursor ? 'contain-app custom-cursor-enabled' : 'contain-app'}>
      <div className="app-contents">
        <PreloaderProvider>
          <Loader />
          {useCustomCursor && <Cursor />}
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
        </PreloaderProvider>
      </div>
    </div>
  );
};

export default App;