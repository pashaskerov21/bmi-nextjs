'use client'
import React from 'react'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { LanguageProps, LocaleStateType, RootStateType } from '../types'



const Languages: React.FC<LanguageProps> = ({ activeLocale }) => {
    // const pathName = usePathname()
    // const redirectedPathName = (locale: string) => {
    //     if (!pathName) return '/'
    //     const segments = pathName.split('/')
    //     segments[1] = locale
    //     return segments.join('/')
    // }

    const localeStateData: LocaleStateType[] = useSelector((state: RootStateType) => state.localeState)
    return (
        <div className='languages'>
            {
                localeStateData.map((data) => (
                    <React.Fragment key={data.locale}>
                        <Link href={`/${data.locale}/${data.slug}`} locale={data.locale} className={activeLocale === data.locale ? 'active' : ''}>{data.locale}</Link>
                    </React.Fragment>
                ))
            }
            {/* {
                i18n.locales.map((locale) => (
                    <React.Fragment key={locale}>
                        <Link href={redirectedPathName(locale)} locale={locale} className={activeLocale === locale ? 'active' : ''}>{locale}</Link>
                    </React.Fragment>
                ))
            } */}
        </div>
    )
}

export default React.memo(Languages)
