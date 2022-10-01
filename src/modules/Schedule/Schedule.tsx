import { FunctionComponent } from 'react'
import { Helmet } from 'react-helmet'

import useLocalStorage from '../../effects/useLocalStorage'

import ScheduleForm from './components/ScheduleForm'
import ScheduleOutput from './components/ScheduleOutput'

import { ScheduleOptions } from './types'

const Schedule: FunctionComponent = () => {
  const [input, setInput] = useLocalStorage<ScheduleOptions>('schedule.input', {
    theme: 'lili',
    days: []
  })

  return (
    <>
      <Helmet title="Schedule creator" />

      <div className="o-scaffolding">
        <div className="o-scaffolding__sidebar">
          <div className="c-sidebar">
            <h1>schedule</h1>

            <ScheduleForm input={input} onSubmit={setInput} />
          </div>
        </div>

        <div className="o-scaffolding__page">
          <ScheduleOutput options={input} />
        </div>
      </div>
    </>
  )
}

export default Schedule
