import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { HashRouter } from 'react-router-dom'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <HashRouter>
      <div className="font-baloo font-extrabold">
        <App />
      </div>
    </HashRouter>
  </StrictMode>,
)
