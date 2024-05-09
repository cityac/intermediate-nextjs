import 'server-only'
<<<<<<< HEAD

import { db } from '@/db/db'
import { attendees, events, rsvps } from '@/db/schema'
import { eq, sql, and, asc, count, ne, not } from 'drizzle-orm'
import { delay } from './delay'
import { memoize } from 'nextjs-better-unstable-cache'

export const getEventsForDashboard = memoize(
  async (userId: string) => {
    await delay()

    const data = await db.query.events.findMany({
      where: eq(events.createdById, userId),
      columns: {
        id: true,
        name: true,
        startOn: true,
        status: true,
      },
      with: {
        rsvps: true,
      },
      limit: 5,
      orderBy: [asc(events.startOn)],
    })

    return data ?? []
  },
  {
    persist: true,
    revalidateTags: () => ['dashboard:events'],
    suppressWarnings: true,
    log: ['datacache', 'verbose'],
    logid: 'dashboard:events',
  },
)
=======
import { db } from '@/db/db'
import { and, asc, count, desc, eq, ne, not } from 'drizzle-orm'
import { events, rsvps } from '@/db/schema'
import { delay } from './delay'

export const getEventsForDashboard = async (userId: string) => {
  await delay()

  const data = await db.query.events.findMany({
    where: eq(events.createdById, userId),
    columns: {
      id: true,
      name: true,
      startOn: true,
      status: true,
    },
    with: {
      rsvps: true,
    },
    limit: 5,
    orderBy: [asc(events.startOn)],
  })

  return data ?? []
}
>>>>>>> b6704f7 (init)
