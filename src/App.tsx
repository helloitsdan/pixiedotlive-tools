import { BrowserRouter, Routes, Route } from 'react-router-dom'

import AviSynth from './modules/AviSynth'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="avisynth" element={<AviSynth />} />
      <Route index element={<>💖</>} />
    </Routes>
  </BrowserRouter>
)

export default App
