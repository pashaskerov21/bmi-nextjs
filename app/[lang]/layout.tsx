import { MenuTranslateType, MenuType, SettingTranslateType, SettingType } from '@/src/types';
import { i18n } from '../../i18n-config'
import { RootHead } from '@/src/partials';
import { fetchMenu, fetchMenuTranslate, fetchSetting, fetchSettingTranslate } from '@/src/utils';
import { RootLayout, StyledComponentsRegistry } from '@/src/layout';

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export const metadata = {
  title: 'BMI',
  description: 'Business Management Institute',
}

export default async function Root({ children, params, }: { children: React.ReactNode, params: { lang: string } }) {
  <html lang={params.lang}>
    <body>
      {children}
    </body>
  </html>
}


// export default async function Root({ children, params, }: { children: React.ReactNode, params: { lang: string } }) {
//   const [settingData, settingTranslateData, menuData, menuTranslateData]:
//     [SettingType[] | undefined, SettingTranslateType[] | undefined, MenuType[] | undefined, MenuTranslateType[] | undefined] = await Promise.all([
//       fetchSetting(), fetchSettingTranslate(), fetchMenu(), fetchMenuTranslate()])
//   if (settingData && settingTranslateData && menuData && menuTranslateData) {
//     const requiredSettingTranslate: SettingTranslateType | undefined = settingTranslateData.find((data) => data.lang === params.lang && data.setting_id === settingData[0].id);
//     const requiredMenuTranslate: MenuTranslateType[] | undefined = menuTranslateData.filter((data) => data.lang === params.lang)
//     if (requiredSettingTranslate && requiredMenuTranslate) {
//       return (
//         <html lang={params.lang}>
//           <head>
//             <RootHead settingData={settingData[0]} requiredSettingTranslate={requiredSettingTranslate} />
//           </head>
//           <StyledComponentsRegistry>
//             <RootLayout settingData={settingData[0]} menuData={menuData} requiredMenuTranslate={requiredMenuTranslate} currentLanguage={params.lang}>
//               {children}
//             </RootLayout>
//           </StyledComponentsRegistry>
//         </html>
//       )
//     }
//   }
// }