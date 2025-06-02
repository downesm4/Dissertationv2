import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { HashRouter } from 'react-router-dom'
import App from './App.jsx'
import { ThemeProvider } from './Context/ThemeContext.tsx'
import { HomeIconProvider } from './Context/HomeIconContext.tsx'
import { RepresentationProvider } from './Context/RepresentationContext.tsx'

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <ThemeProvider>
      <HomeIconProvider>
        <RepresentationProvider>
          <HashRouter>
            <div className="font-baloo">
              <App />
            </div>
          </HashRouter>
        </RepresentationProvider>
      </HomeIconProvider>
    </ThemeProvider>
  </StrictMode>,
)
