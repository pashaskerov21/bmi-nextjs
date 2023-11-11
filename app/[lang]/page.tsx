import Image from 'next/image'
import { getTranslate } from '../../get-translate'
import { Locale } from '../../i18n-config'
import Counter from './components/counter'
import LocaleSwitcher from './components/locale-switcher'

export default async function IndexPage({params: { lang },}: {params: { lang: Locale }}) {
  const t = await getTranslate(lang)

  return (
    <div>
      <LocaleSwitcher />
      <p>Current locale: {lang}</p>
      <p>{t.title}</p>
    </div>
  )
}
