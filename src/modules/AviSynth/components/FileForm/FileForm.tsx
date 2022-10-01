import { FunctionComponent } from 'react'
import { Form, Field, FormikProps } from 'formik'

import Label from '../../../../components/Label'

const FileForm: FunctionComponent<FormikProps<AvisynthOptions>> = () => (
  <Form>
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

    <button type="submit">Save</button>
  </Form>
)

export default FileForm
