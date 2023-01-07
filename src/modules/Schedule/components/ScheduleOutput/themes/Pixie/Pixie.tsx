import { DateTime } from 'luxon'
import { FunctionComponent } from 'react'
import { ScheduleDay } from '../../../../types'

import Cover from './Cover'
import { ScheduleOutputProps } from '../../ScheduleOutput'

import getDayWithOrdinal from '../../utils/getDayWithOrdinal'

import classes from '../../ScheduleOutput.module.scss'

const PixieScheduleItem: FunctionComponent<{ item: ScheduleDay }> = ({
  item
}) => {
  const stream = DateTime.fromISO(item.time)

  if (!stream.isValid) {
    return null
  }

  return (
    <div>
      {getDayWithOrdinal(stream.day)}
      {stream.weekdayShort}
      {stream.toFormat('ha').toLowerCase()}
      {item.title}
      {item.description}
    </div>
  )
}

const Pixie: FunctionComponent<ScheduleOutputProps> = ({ options }) => (
  <div>
    <Cover />

    <div className={classes.ScheduleOutput__Layer}>
      <div className={classes.ScheduleOutput__Schedule}>
        {options.days.map(
          (item, idx) => item && <PixieScheduleItem key={idx} item={item} />
        )}
      </div>
    </div>
  </div>
)

export default Pixie
