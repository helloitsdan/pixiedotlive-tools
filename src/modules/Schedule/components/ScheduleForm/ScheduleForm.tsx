import { FunctionComponent, useMemo, useState } from 'react'
import { Form, Field, FormikProps } from 'formik'
import { DateTime } from 'luxon'
import classnames from 'classnames'

import Label from '../../../../components/Label'

import { ScheduleOptions } from '../../types'

import classes from './ScheduleForm.module.scss'

interface ScheduleFormProps {
  onDownloadSchedule: () => void
}

const ScheduleForm: FunctionComponent<
  FormikProps<ScheduleOptions> & ScheduleFormProps
> = ({ onDownloadSchedule, values }) => {
  const [currentDay, setCurrentDay] = useState(0)
  const days = useMemo(
    () =>
      Array.from(new Array(7), (_, idx) =>
        DateTime.fromISO(values.week).plus({ days: idx })
      ),
    [values.week]
  )

  return (
    <div className={classes['c-schedule-form__header']}>
      <Form>
        <div className={classes['c-schedule-form__week']}>
          <h1>schedule</h1>

          <label htmlFor="week">for the week of</label>
          <Field as="input" type="date" step="7" id="week" name="week" />

          <button type="button" onClick={onDownloadSchedule}>
            Download
          </button>
        </div>

        <div className={classes['c-schedule-form__days']}>
          {days.map((day, idx) => (
            <button
              type="button"
              key={idx}
              onClick={() => setCurrentDay(idx)}
              className={classnames(classes['c-schedule-form__day'], {
                [classes['c-schedule-form__day--active']]: currentDay === idx
              })}
            >
              {day.toFormat('d LLL')}
            </button>
          ))}
        </div>

        <div className={classes['c-schedule-form__fields']}>
          <div className={classes['c-schedule-form__field']}>
            <Label text="Time">
              <Field name={`days.${currentDay}.time`} type="time" />
            </Label>
          </div>

          <div className={classes['c-schedule-form__field']}>
            <Label text="Title">
              <Field name={`days.${currentDay}.title`} />
            </Label>
          </div>

          <div className={classes['c-schedule-form__field']}>
            <Label text="Description">
              <Field name={`days.${currentDay}.description`} />
            </Label>
          </div>

          <button className={classes['c-schedule-form__submit']} type="submit">
            Update
          </button>
        </div>
      </Form>
    </div>
  )
}

export default ScheduleForm
