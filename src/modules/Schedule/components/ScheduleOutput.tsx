import { FunctionComponent } from 'react'

import { ScheduleOptions } from '../types'

interface ScheduleOutputProps {
  options: ScheduleOptions
}

const ScheduleOutput: FunctionComponent<
  React.PropsWithChildren<ScheduleOutputProps>
> = ({ options }) => {
  return <div className="c-output">{JSON.stringify(options)}</div>
}

export default ScheduleOutput
