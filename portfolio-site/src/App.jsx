import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

import Landing from './components/landing/Landing';

function App() {
  const location = useLocation();

  return (
    <>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Landing />} exact />
        </Routes>
    </>
  )
}

export default App;