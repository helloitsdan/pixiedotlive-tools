import { Route, Routes } from 'react-router-dom'

import Schedule from './Schedule'

const ScheduleRoutes = () => (
  <>
    <Routes>
      <Route path=":theme" element={<Schedule />} />
      <Route path="*" element={<Schedule />} />
    </Routes>
  </>
)

export default ScheduleRoutes
