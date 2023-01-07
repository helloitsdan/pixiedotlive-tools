import { useParams } from 'react-router-dom'
import { FunctionComponent } from 'react'

import { ScheduleOptions } from '../../types'

import PixieTheme from './themes/Pixie'

import classes from './ScheduleOutput.module.scss'

export interface ScheduleOutputProps {
  options: ScheduleOptions
}

const ScheduleOutput: FunctionComponent<
  React.PropsWithChildren<ScheduleOutputProps>
> = ({ options }) => {
  const { theme } = useParams()

  console.log(`Current theme: ${theme}`)

  return (
    <div className={classes.ScheduleOutput}>
      <PixieTheme options={options} />
    </div>
  )
}

export default ScheduleOutput
