import {
    AboutDataType,
    AboutReportDataType,
    AboutReportTranslateDataType,
    AboutTranslateDataType,
    BannerDataType,
    BannerTranslateDataType,
    CareerDataType,
    CareerTranslateDataType,
    CustomerDataType,
    EventDataType,
    EventGalleryDataType,
    EventTranslateDataType,
    FaqDataType,
    FaqTranslateDataType,
    GalleryDataType,
    NewsDataType,
    NewsTranslateDataType,
    PartnerDataType,
    ReportDataType,
    ReportTranslateDataType,
    SettingDataType,
    SettingTranslateDataType,
    TrainerDataType,
    TrainerTranslateDataType,
    TrainingCategoryDataType,
    TrainingCategoryTranslateDataType,
    TrainingDataType,
    TrainingTranslateDataType
} from "../data"

export type Section404Props = {
    errorDictionary: { [key: string]: string },
    titleDictionary: { [key: string]: string }
}
export type AboutSectionProps = {
    activeLocale: string,
    aboutData: AboutDataType,
    aboutTranslateData: AboutTranslateDataType[],
    aboutReportData: AboutReportDataType[],
    aboutReportTranslateData: AboutReportTranslateDataType[],
    titleDictionary: { [key: string]: string },
    buttonDictionary: { [key: string]: string },
}
export type ApplySectionProps = {
    activeLocale: string
    trainingData: TrainingDataType[],
    trainingTranslateData: TrainingTranslateDataType[],
    titleDictionary: { [key: string]: string },
    buttonDictionary: { [key: string]: string },
    formDictionary: {
        [key: string]: {
            [key: string]: string
        }
    },
}
export type BannerSectionProps = {
    activeLocale: string,
    bannerData: BannerDataType[],
    bannerTranslateData: BannerTranslateDataType[],
    buttonDictionary: { [key: string]: string }
}
export type CareerSectionProps = {
    activeLocale: string,
    titleDictionary: { [key: string]: string },
    buttonDictionary: { [key: string]: string },
    careerData: CareerDataType[],
    careerTranslateData: CareerTranslateDataType[],
}
export type VacanySectionProps = {
    activeLocale: string,
    titleDictionary: { [key: string]: string },
    buttonDictionary: { [key: string]: string },
    formDictionary: {
        [key: string]: {
            [key: string]: string
        }
    },
    careerData: CareerDataType,
    careerTranslateData: CareerTranslateDataType,
}
export type ContactSectionProps = {
    activeLocale: string,
    titleDictionary: { [key: string]: string },
    buttonDictionary: { [key: string]: string },
    formDictionary: {
        [key: string]: {
            [key: string]: string
        }
    },
    settingData: SettingDataType,
    settingTranslateData: SettingTranslateDataType,
}
export type CustomerSectionProps = {
    titleDictionary: { [key: string]: string },
    customerData: CustomerDataType[],
}
export type EventSectionProps = {
    activeLocale: string,
    eventData: EventDataType[],
    eventTranslateData: EventTranslateDataType[],
    titleDictionary: { [key: string]: string },
    buttonDictionary?: { [key: string]: string },
}
export type EventInnerSectionProps = {
    activeLocale: string,
    eventData: EventDataType,
    eventTranslateData: EventTranslateDataType,
    filteredGalleryData: EventGalleryDataType[],
    titleDictionary: { [key: string]: string },
}
export type FaqSectionProps = {
    activeLocale: string,
    titleDictionary: { [key: string]: string },
    faqData: FaqDataType[],
    faqTranslateData: FaqTranslateDataType[],
}
export type GallerySectionProps = {
    titleDictionary: { [key: string]: string },
    buttonDictionary: { [key: string]: string },
    galleryData: GalleryDataType[],
}
export type NewsSectionProps = {
    activeLocale: string,
    newsData: NewsDataType[],
    newsTranslateData: NewsTranslateDataType[],
    titleDictionary: { [key: string]: string },
    buttonDictionary: { [key: string]: string },
}
export type NewsInnerSectionProps = {
    activeLocale: string,
    newsData: NewsDataType,
    newsTranslateData: NewsTranslateDataType,
    titleDictionary: { [key: string]: string },
}
export type PartnerSectionProps = {
    titleDictionary: { [key: string]: string },
    partnerData: PartnerDataType[],
}
export type ReportSectionProps = {
    activeLocale: string,
    reportData: ReportDataType[],
    reportTranslateData: ReportTranslateDataType[],
}
export type SearchSectionProps = {
    activeLocale: string,
    titleDictionary: { [key: string]: string },
    buttonDictionary: { [key: string]: string },
}
export type TrainerSectionProps = {
    activeLocale: string,
    trainerData: TrainerDataType[],
    trainerTranslateData: TrainerTranslateDataType[],
    titleDictionary: { [key: string]: string },
}
export type TrainerInnerSectionProps = {
    activeLocale: string,
    trainerData: TrainerDataType,
    translateData: TrainerTranslateDataType,
    titleDictionary: { [key: string]: string },
}
export type CategoryInnerSectionProps = {
    activeLocale: string,
    categoryData: TrainingCategoryDataType,
    activecategoryTranslateData: TrainingCategoryTranslateDataType,
    trainingCategoryTranslateData: TrainingCategoryTranslateDataType[],
    trainingData: TrainingDataType[],
    trainingTranslateData: TrainingTranslateDataType[],
    titleDictionary: { [key: string]: string },
    buttonDictionary: { [key: string]: string },
}
export type OtherTrainingSectionProps = {
    activeLocale: string,
    trainingCategoryTranslateData: TrainingCategoryTranslateDataType[],
    trainingData: TrainingDataType[],
    trainingTranslateData: TrainingTranslateDataType[],
    titleDictionary: { [key: string]: string },
    buttonDictionary: { [key: string]: string },
}
export type TrainingHomeSectionProps = {
    activeLocale: string,
    trainingCategoryData: TrainingCategoryDataType[],
    trainingCategoryTranslateData: TrainingCategoryTranslateDataType[],
    trainingData: TrainingDataType[],
    trainingTranslateData: TrainingTranslateDataType[],
    titleDictionary: { [key: string]: string },
    buttonDictionary: { [key: string]: string },
}
export type TrainingInnerSectionProps = {
    activeLocale: string,
    activeCategoryTranslateData: TrainingCategoryTranslateDataType,
    trainingData: TrainingDataType,
    trainingTranslateData: TrainingTranslateDataType,
    trainerData: TrainerDataType[],
    trainerTranslateData: TrainerTranslateDataType[],
    titleDictionary: { [key: string]: string },
    buttonDictionary: { [key: string]: string },
    formDictionary: {
        [key: string]: {
            [key: string]: string
        }
    },
}
export type TrainingPageSectionProps = {
    activeLocale: string,
    trainingCategoryData: TrainingCategoryDataType[],
    trainingCategoryTranslateData: TrainingCategoryTranslateDataType[],
    titleDictionary: { [key: string]: string },
    buttonDictionary: { [key: string]: string },
}