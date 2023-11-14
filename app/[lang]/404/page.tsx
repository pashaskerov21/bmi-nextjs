import { getTranslate } from '@/get-translate';
import { Locale } from '@/i18n-config';
import { Page404Section } from '@/src/sections'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: '404'
}

const NotFoundPage = async ({ params: { lang }, }: { params: { lang: Locale } }) => {
    const t = await getTranslate(lang);
    const errorDictionary = t.error_404;
    const titleDictionary = t.title;
    return (
        <React.Fragment>
            <Page404Section errorDictionary={errorDictionary} titleDictionary={titleDictionary} />
        </React.Fragment>
    )
}

export default NotFoundPage
