import { FunctionComponent } from 'react'
import { Form, Field, FormikProps, FieldArray } from 'formik'
import { DateTime } from 'luxon'

import Label from '../../../../components/Label'

import { ScheduleDay, ScheduleOptions } from '../../types'

interface ScheduleDayFieldProps {
  item: ScheduleDay
  index: number
  onRemove: () => void
}

const ScheduleDayField: FunctionComponent<ScheduleDayFieldProps> = ({
  item,
  index,
  onRemove
}) => {
  const day = DateTime.fromISO(item.time)

  return (
    <details>
      <summary>
        <span className="o-flex">
          <button onClick={onRemove}>x</button>
          &nbsp;
          <span>
            {item.time
              ? `${day.weekdayShort} ${day.day} ${day.monthShort}`
              : 'New day'}
          </span>
        </span>
      </summary>

      <div className="c-sidebar__field">
        <Label text="Time">
          <Field name={`days.${index}.time`} type="datetime-local" />
        </Label>
      </div>

      <div className="c-sidebar__field">
        <Label text="Title">
          <Field name={`days.${index}.title`} />
        </Label>
      </div>

      <div className="c-sidebar__field">
        <Label text="Description">
          <Field name={`days.${index}.description`} />
        </Label>
      </div>
    </details>
  )
}

const ScheduleForm: FunctionComponent<FormikProps<ScheduleOptions>> = ({
  values,
  handleSubmit
}) => (
  <Form>
    <div className="c-sidebar__field">
      <Label text="Theme">
        <Field as="select" name="theme">
          <option value="lili-clouds">Clouds Heart (@lili_lyrical)</option>
          <option value="raco-heart">Heart Hands (@racochan99)</option>
          <option value="k420ub-gao">Gao (@k420ub)</option>
        </Field>
      </Label>
    </div>

    <FieldArray
      name="days"
      render={(arrayHelpers) => (
        <>
          {values.days.map((item, index) => (
            <ScheduleDayField
              item={item}
              index={index}
              onRemove={() => arrayHelpers.remove(index)}
            />
          ))}

          <span className="o-flex">
            <button type="button" onClick={() => arrayHelpers.push('')}>
              Add day
            </button>

            <button type="submit">Save</button>
          </span>
        </>
      )}
    />
  </Form>
)

export default ScheduleForm
