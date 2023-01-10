import { useParams } from 'react-router-dom'
import { forwardRef } from 'react'

import { ScheduleOptions } from '../../types'

import PixieTheme from './themes/Pixie'

import classes from './ScheduleOutput.module.scss'

export interface ScheduleOutputProps {
  options: ScheduleOptions
}

const ScheduleOutput = forwardRef<HTMLDivElement, ScheduleOutputProps>(
  ({ options }, ref) => {
    const { theme } = useParams()

    console.log(`Current theme: ${theme}`)

    return (
      <div className={classes.ScheduleOutputWrapper}>
        <div ref={ref} className={classes.ScheduleOutput}>
          <PixieTheme options={options} />
        </div>
      </div>
    )
  }
)

export default ScheduleOutput
