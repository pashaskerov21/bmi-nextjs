import React from 'react'
import { getTranslate } from '../../../get-translate'
import { Locale } from '../../../i18n-config'
import LocaleSwitcher from '../components/locale-switcher'

const About = async ({params: { lang },}: {params: { lang: Locale }}) => {
    const t = await getTranslate(lang)

    return (
        <div>
            <LocaleSwitcher/>
            {t.about}
        </div>
    )
}

export default About
