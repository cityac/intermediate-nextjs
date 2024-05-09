<<<<<<< HEAD
import { eventsStatusColors, rsvpsStatusColors } from '@/utils/common'
=======
>>>>>>> b6704f7 (init)
import { getRsvpsForDashboard } from '@/utils/rsvps'
import { getCurrentUser } from '@/utils/users'
import { Chip } from '@nextui-org/react'
import Link from 'next/link'

<<<<<<< HEAD
const RSVPSlot = async () => {
=======
const statusColors = {
  draft: 'warning',
  live: 'success',
  started: 'primary',
  ended: 'disabled',
  canceled: 'danger',
}

const RsvpsSlot = async () => {
>>>>>>> b6704f7 (init)
  const user = await getCurrentUser()
  const data = await getRsvpsForDashboard(user.id)

  return (
    <div className="w-full h-full p-4 flex justify-center">
      <div className="w-full">
        <h2 className="text-center text-xl">{`RSVPs`}</h2>
        <div className="rounded-md border border-default-100 my-8">
          {data.map(({ rsvps, events, attendees }) => (
            <div
<<<<<<< HEAD
              key={rsvps?.id}
=======
              key={rsvps.id}
>>>>>>> b6704f7 (init)
              className="border-b border-default-100 p-2 flex gap-2"
            >
              <span>{attendees.name}</span>
              <span>
<<<<<<< HEAD
                <Chip
                  size="sm"
                  color={rsvpsStatusColors[rsvps?.status ?? 'default']}
                >
=======
                <Chip size="sm" color={statusColors[rsvps?.status]}>
>>>>>>> b6704f7 (init)
                  {rsvps?.status}
                </Chip>
              </span>
              <span>
<<<<<<< HEAD
                <Link href={`/dashboard/events/${events?.id}`}>
=======
                <Link href={`/dashboard/events/${events.id}`}>
>>>>>>> b6704f7 (init)
                  <Chip size="sm" variant="faded">
                    {events?.name}
                  </Chip>
                </Link>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

<<<<<<< HEAD
export default RSVPSlot
=======
export default RsvpsSlot
>>>>>>> b6704f7 (init)
