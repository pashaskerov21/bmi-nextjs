import { EventTranslateDataType, EventDataType, MenuTranslateDataType, MenuDataType, NewsTranslateDataType, NewsDataType, SettingTranslateDataType, SettingDataType, TrainerTranslateDataType, TrainerDataType, TrainingCategoryTranslateDataType, TrainingCategoryDataType, TrainingTranslateDataType, TrainingDataType } from '@/src/types';
import { Locale, i18n } from '../../i18n-config'
import { fetchEvent, fetchEventTranslate, fetchMenu, fetchMenuTranslate, fetchNews, fetchNewsTranslate, fetchSetting, fetchSettingTranslate, fetchTrainer, fetchTrainerTranslate, fetchTraining, fetchTrainingCategory, fetchTrainingCategoryTranslate, fetchTrainingTranslate } from '@/src/utils';
import { RootLayout, StyledComponentsRegistry } from '@/src/layout';
import { getTranslate } from '@/get-translate';
import { Metadata } from 'next';

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}


export async function generateMetadata({ params: { lang }, }: { params: { lang: Locale } }): Promise<Metadata> {
  const [settingData, settingTranslateData,]: [
    SettingDataType[] | undefined, SettingTranslateDataType[] | undefined,] = await Promise.all([
      fetchSetting(), fetchSettingTranslate(),]);
  if (settingData && settingTranslateData) {
    const requiredSettingTranslate: SettingTranslateDataType | undefined = settingTranslateData.find((data) => data.lang === lang && data.setting_id === settingData[0].id);
    if (requiredSettingTranslate) {
      return {
        title: requiredSettingTranslate.title,
        description: requiredSettingTranslate.description,
        icons: {
          icon: settingData[0].logo.iconWhite
        }
      }
    } else {
      return {
        title: "BMI"
      }
    }
  } else {
    return {
      title: "BMI",
    }
  }

}



export default async function Root({ children, params: { lang }, }: { children: React.ReactNode, params: { lang: Locale } }) {
  const [
    settingData,
    settingTranslateData,
    menuData,
    menuTranslateData,
    trainingCategoryData,
    trainingCategoryTranslateData,
    trainingData,
    trainingTranslateData,
    trainerData,
    trainerTranslateData,
    eventData,
    eventTranslateData,
    newsData,
    newsTranslateData]:
    [
      SettingDataType[] | undefined,
      SettingTranslateDataType[] | undefined,
      MenuDataType[] | undefined,
      MenuTranslateDataType[] | undefined,
      TrainingCategoryDataType[] | undefined,
      TrainingCategoryTranslateDataType[] | undefined,
      TrainingDataType[] | undefined,
      TrainingTranslateDataType[] | undefined,
      TrainerDataType[] | undefined,
      TrainerTranslateDataType[] | undefined,
      EventDataType[] | undefined,
      EventTranslateDataType[] | undefined,
      NewsDataType[] | undefined,
      NewsTranslateDataType[] | undefined] = await Promise.all([
        fetchSetting(),
        fetchSettingTranslate(),
        fetchMenu(),
        fetchMenuTranslate(),
        fetchTrainingCategory(),
        fetchTrainingCategoryTranslate(),
        fetchTraining(),
        fetchTrainingTranslate(),
        fetchTrainer(),
        fetchTrainerTranslate(),
        fetchEvent(),
        fetchEventTranslate(),
        fetchNews(),
        fetchNewsTranslate()]);

  const t = await getTranslate(lang)
  const footerDictionary: { [key: string]: string } = t.footer;
  const titleDictionary = t.title;
  const buttonDictionary = t.button;
  const formDictionary = t.form;
  const errorDictionary = t.error;

  if (
    settingData
    && settingTranslateData
    && menuData
    && menuTranslateData
    && trainingCategoryData
    && trainingCategoryTranslateData
    && trainingData
    && trainingTranslateData
    && trainerData
    && trainerTranslateData
    && eventData
    && eventTranslateData
    && newsData
    && newsTranslateData
  ) {
    const requiredSettingTranslate: SettingTranslateDataType | undefined = settingTranslateData.find((data) => data.lang === lang && data.setting_id === settingData[0].id);
    if (requiredSettingTranslate) {
      return (
        <html lang={lang}>
          <head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous' />
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css" />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.css" />
            <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          </head>
          <StyledComponentsRegistry>
            <RootLayout
              settingData={settingData[0]}
              menuData={menuData}
              menuTranslateData={menuTranslateData}
              activeLocale={lang}
              requiredSettingTranslate={requiredSettingTranslate}
              footerDictionary={footerDictionary}
              titleDictionary={titleDictionary}
              buttonDictionary={buttonDictionary}
              formDictionary={formDictionary}
              trainingCategoryData={trainingCategoryData}
              trainingCategoryTranslateData={trainingCategoryTranslateData}
              trainingData={trainingData}
              trainingTranslateData={trainingTranslateData}
              trainerData={trainerData}
              trainerTranslateData={trainerTranslateData}
              eventData={eventData}
              eventTranslateData={eventTranslateData}
              newsData={newsData}
              newsTranslateData={newsTranslateData}
              errorDictionary={errorDictionary}
            >
              {children}
            </RootLayout>
          </StyledComponentsRegistry>
        </html>
      )
    }
  }
}