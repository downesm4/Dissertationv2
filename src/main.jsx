import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { HashRouter } from 'react-router-dom'
import App from './App.jsx'
import { ThemeProvider } from './Context/ThemeContext.tsx'
import { HomeIconProvider } from './Context/HomeIconContext.tsx'
import { RepresentationProvider } from './Context/RepresentationContext.tsx'
import { CalendarsProvider } from './Context/CalendarContext.tsx'

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <ThemeProvider>
      <HomeIconProvider>
        <RepresentationProvider>
          <CalendarsProvider>
            <HashRouter>
              <div className="font-baloo">
                <App />
              </div>
            </HashRouter>
          </CalendarsProvider>
        </RepresentationProvider>
      </HomeIconProvider>
    </ThemeProvider>
  </StrictMode>,
)
