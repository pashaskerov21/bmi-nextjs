import { MenuTranslateType, MenuType, SettingTranslateType, SettingType } from '@/src/types';
import { i18n } from '../../i18n-config'
import { RootHead } from '@/src/partials';
import { fetchMenu, fetchMenuTranslate, fetchSetting, fetchSettingTranslate } from '@/src/utils';

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

// export const metadata = {
//   title: 'BMI',
//   description: 'Business Management Institute',
// }

export default async function Root({ children, params, }: { children: React.ReactNode, params: { lang: string } }) {
  const [settingData, settingTranslateData, menuData, menuTranslateData]:
    [SettingType[] | undefined, SettingTranslateType[] | undefined, MenuType[] | undefined, MenuTranslateType[] | undefined] = await Promise.all([
      fetchSetting(), fetchSettingTranslate(), fetchMenu(), fetchMenuTranslate()])
  if (settingData && settingTranslateData && menuData && menuTranslateData) {
    const requiredSettingTranslate: SettingTranslateType | undefined = settingTranslateData.find((data) => data.lang === params.lang && data.setting_id === settingData[0].id);
    if (requiredSettingTranslate) {
      return (
        <html lang={params.lang}>
          <head>
            <RootHead settingData={settingData[0]} requiredSettingTranslate={requiredSettingTranslate} />
          </head>
          <body>{children}</body>
        </html>
      )
    }
  }
}


