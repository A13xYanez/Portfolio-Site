import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CursorProvider } from './components/global/cursor/CursorContext.jsx';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/*' element={
          <CursorProvider>
            <App />
          </CursorProvider>
        } />
      </Routes>
    </Router>
  </StrictMode>,
)
