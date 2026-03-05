import { NextResponse } from 'next/server'

const MAIN_DOMAIN = 'gropera.com'

export function middleware(request) {
  const hostname = request.headers.get('host') || ''
  const url = request.nextUrl.clone()

  // Local dev or main domain — show agency dashboard
  const isMainDomain =
    hostname === MAIN_DOMAIN ||
    hostname === `reportes.${MAIN_DOMAIN}` ||
    hostname.startsWith('localhost') ||
    hostname.includes('vercel.app')

  if (isMainDomain) {
    return NextResponse.next()
  }

  // Extract client subdomain: kordata.gropera.com → kordata
  const subdomain = hostname.replace(`.${MAIN_DOMAIN}`, '')

  if (subdomain && subdomain !== hostname) {
    const path = url.pathname
    url.pathname = `/${subdomain}${path === '/' ? '' : path}`
    return NextResponse.rewrite(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next|api|favicon.ico).*)'],
}
