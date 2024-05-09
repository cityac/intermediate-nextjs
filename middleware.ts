import { NextResponse } from 'next/server'
<<<<<<< HEAD
import type { NextRequest } from 'next/server'
import { COOKIE_NAME } from './utils/constants'

export function middleware(request: NextRequest) {
  debugger
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
=======
import { NextRequest } from 'next/server'
import { COOKIE_NAME } from './utils/constants'

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    console.log('dashboard')
>>>>>>> 5d11fc0 (start)
    if (!request.cookies.has(COOKIE_NAME)) {
      return NextResponse.redirect(new URL('/signin', request.url))
    }
  }

<<<<<<< HEAD
  if (request.nextUrl.pathname === '/')
    return NextResponse.redirect(new URL('/dashboard', request.url))
=======
  if (request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }
>>>>>>> 5d11fc0 (start)
}

export const config = {
  matcher: ['/dashboard/:path*', '/'],
}
