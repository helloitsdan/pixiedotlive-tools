import { DateTime } from 'luxon'
import { FunctionComponent } from 'react'
import { ScheduleDay } from '../../../../types'

import Cover from '../../Cover'
import { ScheduleOutputProps } from '../../ScheduleOutput'

import getDayWithOrdinal from '../../utils/getDayWithOrdinal'

import classes from '../../ScheduleOutput.module.scss'

import bg from './lili-clouds-bg.png'
import dani from './lili-clouds-dani.png'

const LiliCloudsItem: FunctionComponent<{ item: ScheduleDay }> = ({ item }) => {
  const stream = DateTime.fromISO(item.time)

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

const LiliClouds: FunctionComponent<ScheduleOutputProps> = ({ options }) => (
  <div>
    <div className={classes.ScheduleOutput__Background} />

    <div className={classes.ScheduleOutput__Layer}>
      <img src={bg} alt="" />
    </div>

    <Cover />

    <div className={classes.ScheduleOutput__Layer}>
      <div className={classes.ScheduleOutput__Schedule}>
        {options.days.map((item) => (
          <LiliCloudsItem item={item} />
        ))}
      </div>
    </div>

    <div className={classes.ScheduleOutput__Layer}>
      <img src={dani} alt="" />
    </div>
  </div>
)

export default LiliClouds
