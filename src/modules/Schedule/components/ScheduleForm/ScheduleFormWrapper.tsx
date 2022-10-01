import { FunctionComponent, useMemo } from 'react'
import { Formik } from 'formik'

import ScheduleForm from './ScheduleForm'
import { ScheduleOptions } from '../../types'

const DEFAULT_VALUES = {
  theme: 'lili',
  days: []
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
      ...DEFAULT_VALUES,
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
