export interface ScheduleDay {
  time: string
  title: string
  description: string
}

export interface ScheduleOptions {
  week: string
  days: ScheduleDay[]
}
