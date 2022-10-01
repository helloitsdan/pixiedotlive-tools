export interface ScheduleDay {
  time: string
  title: string
  description: string
}

export interface ScheduleOptions {
  theme: string
  days: ScheduleDay[]
}
