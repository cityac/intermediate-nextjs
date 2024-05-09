import 'server-only'
import { COOKIE_NAME } from './constants'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { getUserFromToken } from './authTools'
<<<<<<< HEAD
<<<<<<< HEAD
import { cache } from 'react'

export const getCurrentUser = cache(async () => {
=======

export const getCurrentUser = async () => {
>>>>>>> b6704f7 (init)
=======
import { cache } from 'react'

export const getCurrentUser = cache(async () => {
>>>>>>> 20439d3 (start)
  const token = cookies().get(COOKIE_NAME)
  if (!token) redirect('/signin')

  const user = await getUserFromToken(token)
<<<<<<< HEAD

  if (!user) redirect('/signing')

  return user
})
=======
  if (!user) redirect('/signin')

  return user
<<<<<<< HEAD
}
>>>>>>> b6704f7 (init)
=======
})
>>>>>>> 20439d3 (start)
