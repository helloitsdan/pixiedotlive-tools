import { FunctionComponent } from 'react'

import classes from './Label.module.scss'

interface LabelProps {
  text: string
}

const Label: FunctionComponent<React.PropsWithChildren<LabelProps>> = ({
  text,
  children
}) => (
  <label className={classes['c-label']}>
    <span className={classes['c-label__text']}>{text}</span>
    {children}
  </label>
)

export default Label
