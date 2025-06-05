import './App.css'
import { Route, Routes } from 'react-router-dom'

import Menstruation from './Pages/Menstrual.jsx'
import AppSettings from './Pages/AppSettings.jsx'
import Flow from './Pages/Flow.jsx'
import Pain from './Pages/Pain.jsx'
import Mood from './Pages/Mood.jsx'
import MoodSeverity from './Pages/MoodSeverity.jsx'
import Symptoms from './Pages/Symptoms.jsx'
import Severity from './Pages/Severity.jsx'
import Menopause from './Pages/Menopause.jsx'
import Physical from './Pages/Physical.jsx'
import Emotional from './Pages/Emotional.jsx'
import Topic from './Pages/Topic.jsx'
import Resources from './Pages/Resources.jsx'
import History from './Pages/History.jsx'

function App() {

  // Deals with all the routing for navigation in the app

  return (
    <Routes>
      <Route path="/" element={<Menstruation />} />
      <Route path="/settings" element={<AppSettings />} />
      <Route path="/flow" element={<Flow />} />
      <Route path="/pain" element={<Pain />} />
      <Route path="/symptoms" element={<Symptoms />} />
      <Route path="/severity" element={<Severity />} />
      <Route path="/mood" element={<Mood />} />
      <Route path="/mseverity" element={<MoodSeverity />} />
      <Route path="/menopause" element={<Menopause />} />
      <Route path="/physical" element={<Physical />} />
      <Route path="/emotional" element={<Emotional />} />
      <Route path="/history" element={<History />} />
      <Route path="/topic" element={<Topic />} />
      <Route path="/resources" element={<Resources />} />

    </Routes>
  )
}

export default App
