import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import AviSynth from './modules/AviSynth'
import Schedule from './modules/Schedule'

const App = () => (
  <>
    <Helmet defaultTitle="pixie tools" titleTemplate="%s 💖 pixie tools" />

    <BrowserRouter>
      <Routes>
        <Route path="avisynth/*" element={<AviSynth />} />

        <Route path="schedule/*" element={<Schedule />} />

        <Route index element={<>💖</>} />
      </Routes>
    </BrowserRouter>
  </>
)

export default App
