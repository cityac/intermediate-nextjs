type EventsStatusColor =
  | 'warning'
  | 'success'
  | 'primary'
  | 'danger'
  | 'default'
  | 'secondary'
  | undefined

export const eventsStatusColors: Record<string, EventsStatusColor> = {
  default: 'default',
  draft: 'warning',
  live: 'success',
  started: 'primary',
  ended: 'default',
  canceled: 'danger',
}

export const rsvpsStatusColors: Record<string, EventsStatusColor> = {
  default: 'default',
  going: 'primary',
  maybe: 'warning',
  'not going': 'danger',
}
