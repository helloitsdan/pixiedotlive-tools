import { FunctionComponent } from 'react'

import { ScheduleOptions } from '../../types'

import LiliClouds from './themes/LiliClouds'

import classes from './ScheduleOutput.module.scss'

export interface ScheduleOutputProps {
  options: ScheduleOptions
}

const ScheduleOutput: FunctionComponent<
  React.PropsWithChildren<ScheduleOutputProps>
> = ({ options }) => {
  return (
    <div className={classes.ScheduleOutput}>
      <LiliClouds options={options} />
    </div>
  )
}

export default ScheduleOutput
