import { FunctionComponent } from 'react'

interface LabelProps {
  text: string
}

const Label: FunctionComponent<React.PropsWithChildren<LabelProps>> = ({ text, children }) => (
  <label className="c-label">
    <span className="c-label__text">{text}</span>
    {children}
  </label>
)

export default Label
