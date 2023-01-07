import { FunctionComponent } from 'react'
import { Helmet } from 'react-helmet'

import useLocalStorage from '../../effects/useLocalStorage'

import ScheduleForm from './components/ScheduleForm'
import { DEFAULT_SCHEDULE_VALUES } from './components/ScheduleForm/ScheduleFormWrapper'
import ScheduleOutput from './components/ScheduleOutput'

import { ScheduleOptions } from './types'

const Schedule: FunctionComponent = () => {
  const [input, setInput] = useLocalStorage<ScheduleOptions>(
    'schedule.input',
    DEFAULT_SCHEDULE_VALUES
  )

  return (
    <>
      <Helmet title="Schedule creator" />
      <ScheduleForm input={input} onSubmit={setInput} />
      <ScheduleOutput options={input} />
    </>
  )
}

export default Schedule
