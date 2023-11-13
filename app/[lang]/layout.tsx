import { MenuTranslateType, MenuType, SettingTranslateType, SettingType } from '@/src/types';
import { Locale, i18n } from '../../i18n-config'
import { RootHead } from '@/src/partials';
import { fetchMenu, fetchMenuTranslate, fetchSetting, fetchSettingTranslate } from '@/src/utils';
import { RootLayout, StyledComponentsRegistry } from '@/src/layout';
import { getTranslate } from '@/get-translate';

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

// export const metadata = {
//   title: 'BMI',
//   description: 'Business Management Institute',
// }

export default async function Root({ children, params: { lang }, }: { children: React.ReactNode, params: { lang: Locale } }) {
  const [
    settingData,
    settingTranslateData,
    menuData,
    menuTranslateData]:
    [
      SettingType[] | undefined,
      SettingTranslateType[] | undefined,
      MenuType[] | undefined,
      MenuTranslateType[] | undefined] = await Promise.all([
        fetchSetting(),
        fetchSettingTranslate(),
        fetchMenu(),
        fetchMenuTranslate()]);

  const t = await getTranslate(lang)
  const footerDictionary: { [key: string]: string } = t.footer;

  if (settingData && settingTranslateData && menuData && menuTranslateData) {
    const requiredSettingTranslate: SettingTranslateType | undefined = settingTranslateData.find((data) => data.lang === lang && data.setting_id === settingData[0].id);
    const requiredMenuTranslate: MenuTranslateType[] | undefined = menuTranslateData.filter((data) => data.lang === lang)
    if (requiredSettingTranslate && requiredMenuTranslate) {
      return (
        <html lang={lang}>
          <head>
            <RootHead
              settingData={settingData[0]}
              requiredSettingTranslate={requiredSettingTranslate} />
          </head>
          <StyledComponentsRegistry>
            <RootLayout
              settingData={settingData[0]}
              menuData={menuData}
              requiredMenuTranslate={requiredMenuTranslate}
              activeLocale={lang}
              requiredSettingTranslate={requiredSettingTranslate}
              footerDictionary={footerDictionary}>
              {children}
            </RootLayout>
          </StyledComponentsRegistry>
        </html>
      )
    }
  }
}