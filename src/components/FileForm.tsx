import { FunctionComponent, useEffect } from 'react'
import { Field } from 'formik'
import Label from './Label'

interface FileFormProps {
  values: AvisynthOptions
  handleSubmit: (values: AvisynthOptions) => void
}

const FileForm: FunctionComponent<FileFormProps> = ({
  values,
  handleSubmit
}) => {
  useEffect(() => {
    handleSubmit(values)
  }, [handleSubmit, values])

  return (
    <div className="c-sidebar">
      <h1>avisynth</h1>

      <details>
        <summary>Environment Config</summary>

        <div className="c-sidebar__field">
          <Label text="FFMS2 location">
            <Field name="ffms2" />
          </Label>
        </div>

        <div className="c-sidebar__field">
          <Label text="Base path">
            <Field name="path" />
          </Label>
        </div>
      </details>

      <details open>
        <summary>File Input</summary>

        <div className="c-sidebar__field">
          <Label text="File">
            <Field name="file" />
          </Label>
        </div>

        <div className="c-sidebar__field">
          <Label text="Start">
            <Field name="start" />
          </Label>
        </div>

        <div className="c-sidebar__field">
          <Label text="End">
            <Field name="end" />
          </Label>
        </div>
      </details>
    </div>
  )
}

export default FileForm
