import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import { i18n } from './i18n-config'

import { match as matchLocale } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

function getLocale(request: NextRequest): string | undefined {
  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders: Record<string, string> = {}
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

  // @ts-ignore locales are readonly
  const locales: string[] = i18n.locales

  // Use negotiator and intl-localematcher to get best locale
  let languages = new Negotiator({ headers: negotiatorHeaders }).languages(
    locales
  )

  const locale = matchLocale(languages, locales, i18n.defaultLocale)

  return locale
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // `/_next/` and `/api/` are ignored by the watcher, but we need to ignore files in `public` manually.
  // If you have one
  if (
    [
      '/logo/icon.svg',
      '/logo/short.svg',
      '/logo/text-icon.svg',
      '/logo/vertical.svg',
      '/logo/white/icon.svg',
      '/logo/white/short.svg',
      '/logo/white/text-icon.svg',
      '/logo/white/vertical.svg',

      '/about/icon-1.webp',
      '/about/icon-2.webp',
      '/about/icon-3.webp',
      '/about/video-bg.webp',
      
      '/banner/bg/img-1.webp',
      '/banner/bg/img-2.webp',
      '/banner/video/img-1.webp',

      '/customers/img-1.webp',
      '/customers/img-2.webp',
      '/customers/img-3.webp',
      '/customers/img-4.webp',
      '/customers/img-5.webp',
      '/customers/img-6.webp',

      '/events/cover/img-1.webp',
      '/events/cover/img-2.webp',
      '/events/cover/img-3.webp',
      '/events/cover/img-4.webp',
      '/events/cover/img-5.webp',
      '/events/cover/img-6.webp',
      '/events/logo/img-1.webp',
      '/events/logo/img-2.webp',

      '/gallery/photo/img-1.webp',
      '/gallery/photo/img-2.webp',
      '/gallery/photo/img-3.webp',
      '/gallery/photo/img-4.webp',
      '/gallery/photo/img-5.webp',
      '/gallery/video/img-1.webp',
      '/gallery/video/img-2.webp',
      '/gallery/video/img-3.webp',
      '/gallery/video/img-4.webp',
      '/gallery/video/img-5.webp',
      '/gallery/video/img-6.webp',

      '/icon/apply.png',
      '/icon/course.png',
      '/icon/share.png',
      '/icon/online-icon.png',
      '/icon/offline-icon.png',

      '/news/img-1.webp',
      '/news/img-2.webp',
      '/news/img-3.webp',
      '/news/img-4.webp',
      '/news/img-5.webp',
      '/news/img-6.webp',

      '/partners/img-1.webp',
      '/partners/img-2.webp',
      '/partners/img-3.webp',
      '/partners/img-4.webp',
      '/partners/img-5.webp',
      '/partners/img-6.webp',
      '/partners/img-7.webp',
      '/partners/img-8.webp',

      '/report/img-1.png',
      '/report/img-2.png',
      '/report/img-3.png',
      '/report/img-4.png',
      '/report/img-5.png',

      '/social/facebook.svg',
      '/social/instagram.svg',
      '/social/linkedin.svg',
      '/social/twitter.svg',
      '/social/youtube.svg',
      '/social/white/facebook.svg',
      '/social/white/instagram.svg',
      '/social/white/linkedin.svg',
      '/social/white/twitter.svg',
      '/social/white/youtube.svg',

      '/trainer/img-1.webp',
      '/trainer/img-2.webp',
      '/trainer/img-3.webp',
      '/trainer/img-4.webp',

      '/training/category/img-1.webp',
      '/training/category/img-2.webp',
      '/training/category/img-3.webp',
      '/training/category/img-4.webp',
      '/training/category/img-5.webp',
      '/training/category/img-6.webp',
      '/training/category/img-7.webp',
      '/training/category/img-8.webp',
      '/training/category/img-9.webp',
      '/training/inner/img-1.webp',
      

    ].includes(pathname)
  )
    return

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request)

    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
        request.url
      )
    )
  }
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|public).*)'],
}
