import './App.css'
import { Route, Routes } from 'react-router-dom'


import Menstruation from './Pages/Menstrual'
import Flow from './Pages/Flow.jsx'
import Pain from './Pages/Pain.jsx'
import Mood from './Pages/Mood.jsx'
import Symptoms from './Pages/Symptoms.jsx'
import Severity from './Pages/Severity.jsx'
import Menopause from './Pages/Menopause.jsx'
import MenSymptoms from './Pages/MenSymptoms'
import History from './Pages/History.jsx'
import Learning from './Pages/Learning.jsx'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Menstruation />} />
      <Route path="/flow" element={<Flow />} />
      <Route path="/pain" element={<Pain />} />
      <Route path="/symptoms" element={<Symptoms />} />
      <Route path="/severity" element={<Severity />} />
      <Route path="/mood" element={<Mood />} />
      <Route path="/menopause" element={<Menopause />} />
      <Route path="/menSymptoms" element={<MenSymptoms />} />
      <Route path="/history" element={<History />} />
      <Route path="/learning" element={<Learning />} />
    </Routes>
  )
}

export default App
