'use client'
import { i18n } from '@/i18n-config'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

type LanguagesProps = {
    currentLanguage: string,
}

const Languages:React.FC<LanguagesProps> = ({currentLanguage}) => {
    const pathName = usePathname()
    const redirectedPathName = (locale: string) => {
        if (!pathName) return '/'
        const segments = pathName.split('/')
        segments[1] = locale
        return segments.join('/')
    }
    return (
        <div className='languages'>
            {
                i18n.locales.map((locale) => (
                    <Link href={redirectedPathName(locale)} locale={locale} className={currentLanguage === locale ? 'active' : ''}>{locale}</Link>
                ))
            }
        </div>
    )
}

export default React.memo(Languages)
