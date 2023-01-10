import { FunctionComponent, createRef, useCallback } from 'react'
import { Helmet } from 'react-helmet'
import * as htmlToImage from 'html-to-image'
import FileSaver from 'file-saver'
import { DateTime } from 'luxon'

import useLocalStorage from '../../effects/useLocalStorage'

import ScheduleForm from './components/ScheduleForm'
import { DEFAULT_SCHEDULE_VALUES } from './components/ScheduleForm/ScheduleFormWrapper'
import ScheduleOutput from './components/ScheduleOutput'

import { ScheduleOptions } from './types'

const Schedule: FunctionComponent = () => {
  const [input, setInput] = useLocalStorage<ScheduleOptions>(
    'schedule.input',
    DEFAULT_SCHEDULE_VALUES
  )

  const scheduleElRef = createRef<HTMLDivElement>()
  const onDownloadSchedule = useCallback(async () => {
    if (!scheduleElRef.current) {
      return
    }

    const week = DateTime.fromISO(input.week)
    const blob = await htmlToImage.toPng(scheduleElRef.current)

    FileSaver.saveAs(blob, week.toFormat("yyLL' - Week 'WW'.png'"))
  }, [input, scheduleElRef])

  return (
    <>
      <Helmet title="Schedule creator" />

      <ScheduleForm
        input={input}
        onSubmit={setInput}
        onDownloadSchedule={onDownloadSchedule}
      />

      <ScheduleOutput ref={scheduleElRef} options={input} />
    </>
  )
}

export default Schedule
