import { FunctionComponent } from 'react'

import classes from './ScheduleOutput.module.scss'

const Cover: FunctionComponent = () => (
  <svg
    className={classes.ScheduleOutput__Cover}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 1280 720"
  >
    <path
      fill-rule="evenodd"
      d="M481.725,720.500 L0,720 L0.000,0.000 L765.336,-0.246 L481.725,720.500 Z"
    />
  </svg>
)

export default Cover
