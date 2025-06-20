import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { HashRouter } from 'react-router-dom'
import App from './App.jsx'
import { ThemeProvider } from './Context/ThemeContext.tsx'
import { HomeIconProvider } from './Context/HomeIconContext.tsx'
import { RepresentationProvider } from './Context/RepresentationContext.tsx'
import { CalendarsProvider } from './Context/CalendarContext.tsx'
import { HomeWordingProvider } from './Context/HomeWordingContext.tsx'
import { HeadingsProvider } from './Context/HeadingContext.tsx'
import { FlowWordingProvider } from './Context/FlowWordingContext.tsx'
import { FlowEmojiProvider } from './Context/FlowEmojisContext.tsx'
import { PainEmojiProvider } from './Context/PainEmojisContext.tsx'
import { PainWordingProvider } from './Context/PainWordingContext.tsx'
import { SymptomWordingProvider } from './Context/SymptomsWordingContext.tsx'

createRoot(document.getElementById('root')).render(

  // Main entry point for the app which deals with the Providers for each of the accessibility first settings

  <StrictMode>
    <ThemeProvider>
      <HomeIconProvider>
        <RepresentationProvider>
          <CalendarsProvider>
            <HomeWordingProvider>
              <HeadingsProvider>
                <FlowWordingProvider>
                  <FlowEmojiProvider>
                    <PainEmojiProvider>
                      <PainWordingProvider>
                        <SymptomWordingProvider>
                          <HashRouter>
                            <div className="font-baloo">
                              <App />
                            </div>
                          </HashRouter>
                        </SymptomWordingProvider>
                      </PainWordingProvider>
                    </PainEmojiProvider>
                  </FlowEmojiProvider>
                </FlowWordingProvider>
              </HeadingsProvider>
            </HomeWordingProvider>
          </CalendarsProvider>
        </RepresentationProvider>
      </HomeIconProvider>
    </ThemeProvider>
  </StrictMode>,
)
