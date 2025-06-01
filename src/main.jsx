import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { HashRouter } from 'react-router-dom'
import App from './App.jsx'
import { ThemeProvider } from './Context/ThemeContext.tsx'
import { HomeIconProvider } from './Context/HomeIconContext.tsx'

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <ThemeProvider>
      <HomeIconProvider>
        <HashRouter>
          <div className="font-baloo font-extrabold">
            <App />
          </div>
        </HashRouter>
      </HomeIconProvider>
    </ThemeProvider>
  </StrictMode>,
)
