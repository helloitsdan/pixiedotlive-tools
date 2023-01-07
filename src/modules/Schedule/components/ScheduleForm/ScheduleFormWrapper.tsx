import { FunctionComponent, useMemo } from 'react'
import { Formik } from 'formik'
import { DateTime } from 'luxon'

import ScheduleForm from './ScheduleForm'
import { ScheduleOptions } from '../../types'

export const DEFAULT_SCHEDULE_VALUES = {
  week: DateTime.now().toFormat("kkkk'-W'WW"),
  days: new Array(7).fill({
    time: '',
    title: '',
    description: ''
  })
}

interface ScheduleFormWrapperProps {
  input?: ScheduleOptions
  onSubmit: (input: ScheduleOptions) => void
}

const ScheduleFormWrapper: FunctionComponent<ScheduleFormWrapperProps> = ({
  input,
  onSubmit
}) => {
  const initialValues = useMemo(
    () => ({
      ...DEFAULT_SCHEDULE_VALUES,
      ...input
    }),
    [input]
  )

  return (
    <Formik<ScheduleOptions>
      initialValues={initialValues}
      onSubmit={onSubmit}
      component={ScheduleForm}
    />
  )
}

export default ScheduleFormWrapper
