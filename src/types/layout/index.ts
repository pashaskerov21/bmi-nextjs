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
    MenuDataType,
    MenuTranslateDataType,
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
    TrainingDataType, TrainingTranslateDataType
} from "../data"

export type RootLayoutType = {
    children: React.ReactNode,
    settingData: SettingDataType;
    menuData: MenuDataType[],
    menuTranslateData: MenuTranslateDataType[],
    activeLocale: string,
    requiredSettingTranslate: SettingTranslateDataType,
    footerDictionary: { [key: string]: string },
    titleDictionary: { [key: string]: string },
    buttonDictionary: { [key: string]: string },
    errorDictionary: { [key: string]: string },
    formDictionary: {
        [key: string]: {
            [key: string]: string
        }
    },
    trainingCategoryData: TrainingCategoryDataType[],
    trainingCategoryTranslateData: TrainingCategoryTranslateDataType[],
    trainingData: TrainingDataType[],
    trainingTranslateData: TrainingTranslateDataType[],
    trainerData: TrainerDataType[],
    trainerTranslateData: TrainerTranslateDataType[],
    eventData: EventDataType[],
    eventTranslateData: EventTranslateDataType[],
    newsData: NewsDataType[],
    newsTranslateData: NewsTranslateDataType[],
}

export type HomeLayoutType = {
    activeLocale: string,
    titleDictionary: { [key: string]: string },
    buttonDictionary: { [key: string]: string },
    formDictionary: {
        [key: string]: {
            [key: string]: string
        }
    },
    bannerData: BannerDataType[],
    bannerTranslateData: BannerTranslateDataType[],
    reportData: ReportDataType[],
    reportTranslateData: ReportTranslateDataType[],
    aboutData: AboutDataType,
    aboutTranslateData: AboutTranslateDataType[],
    aboutReportData: AboutReportDataType[],
    aboutReportTranslateData: AboutReportTranslateDataType[],
    trainingCategoryData: TrainingCategoryDataType[],
    trainingCategoryTranslateData: TrainingCategoryTranslateDataType[],
    trainingData: TrainingDataType[],
    trainingTranslateData: TrainingTranslateDataType[],
    trainerData: TrainerDataType[],
    trainerTranslateData: TrainerTranslateDataType[],
    eventData: EventDataType[],
    eventTranslateData: EventTranslateDataType[],
    newsData: NewsDataType[],
    newsTranslateData: NewsTranslateDataType[],
    galleryData: GalleryDataType[],
    customerData: CustomerDataType[],
    partnerData: PartnerDataType[],
}

export type AboutLayoutType = {
    activeLocale: string,
    titleDictionary: { [key: string]: string },
    buttonDictionary: { [key: string]: string },
    aboutData: AboutDataType,
    aboutTranslateData: AboutTranslateDataType[],
    aboutReportData: AboutReportDataType[],
    aboutReportTranslateData: AboutReportTranslateDataType[],
    reportData: ReportDataType[],
    reportTranslateData: ReportTranslateDataType[],
    galleryData: GalleryDataType[],
    customerData: CustomerDataType[],
    partnerData: PartnerDataType[],
}

export type CareerPageLayoutType = {
    activeLocale: string,
    titleDictionary: { [key: string]: string },
    buttonDictionary: { [key: string]: string },
    careerData: CareerDataType[],
    careerTranslateData: CareerTranslateDataType[],
}
export type VacancyPageLayoutType = {
    activeLocale: string,
    titleDictionary: { [key: string]: string },
    buttonDictionary: { [key: string]: string },
    formDictionary: {
        [key: string]: {
            [key: string]: string
        }
    },
    activeData: CareerDataType,
    activeTranslateData: CareerTranslateDataType,
    allTranslateData: CareerTranslateDataType[],
}
export type ContactPageLayoutType = {
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
export type EventPageLayoutType = {
    activeLocale: string,
    eventData: EventDataType[],
    eventTranslateData: EventTranslateDataType[],
    titleDictionary: { [key: string]: string },
}
export type EventInnerPageLayoutType = {
    activeLocale: string,
    activeData: EventDataType,
    activeTranslateData: EventTranslateDataType,
    allTranslateData: EventTranslateDataType[],
    filteredGalleryData: EventGalleryDataType[],
    otherEventData: EventDataType[],
    otherEventTranslateData: EventTranslateDataType[],
    titleDictionary: { [key: string]: string },
    buttonDictionary: { [key: string]: string },
}
export type FaqPageLayoutType = {
    activeLocale: string,
    titleDictionary: { [key: string]: string },
    faqData: FaqDataType[],
    faqTranslateData: FaqTranslateDataType[],
}
export type NewsPageLayoutType = {
    activeLocale: string,
    newsData: NewsDataType[],
    newsTranslateData: NewsTranslateDataType[],
    titleDictionary: { [key: string]: string },
    buttonDictionary: { [key: string]: string },
}
export type NewsInnerPageLayoutType = {
    activeLocale: string,
    activeData: NewsDataType,
    activeTranslateData: NewsTranslateDataType,
    allTranslateData: NewsTranslateDataType[],
    otherNewsData: NewsDataType[],
    otherNewsTranslateData: NewsTranslateDataType[],
    titleDictionary: { [key: string]: string },
    buttonDictionary: { [key: string]: string },
}
export type SearchPageLayoutType = {
    activeLocale: string,
    titleDictionary: { [key: string]: string },
    buttonDictionary: { [key: string]: string },
}
export type TrainerPageLayoutType = {
    activeLocale: string,
    trainerData: TrainerDataType[],
    trainerTranslateData: TrainerTranslateDataType[],
    titleDictionary: { [key: string]: string },
}
export type TrainerInnerPageLayoutType = {
    activeLocale: string,
    activeData: TrainerDataType,
    activeTranslateData: TrainerTranslateDataType,
    allTranslateData: TrainerTranslateDataType[],
    titleDictionary: { [key: string]: string },
}
export type TrainingPageLayoutType = {
    activeLocale: string,
    trainingCategoryData: TrainingCategoryDataType[],
    trainingCategoryTranslateData: TrainingCategoryTranslateDataType[],
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
export type CategoryPageLayoutType = {
    activeLocale: string,
    activeData: TrainingCategoryDataType,
    activeTranslateData: TrainingCategoryTranslateDataType,
    allTranslateData: TrainingCategoryTranslateDataType[],
    trainingCategoryTranslateData: TrainingCategoryTranslateDataType[],
    trainingData: TrainingDataType[],
    trainingTranslateData: TrainingTranslateDataType[],
    titleDictionary: { [key: string]: string },
    buttonDictionary: { [key: string]: string },
}
export type TrainingInnerPageLayoutType = {
    activeLocale: string,
    activeCategoryTranslateData: TrainingCategoryTranslateDataType,
    activeTrainingData: TrainingDataType,
    activeTrainingTranslateData: TrainingTranslateDataType,
    allCategoryTranslateData: TrainingCategoryTranslateDataType[],
    allTrainingTranslateData: TrainingTranslateDataType[],
    trainerData: TrainerDataType[],
    trainerTranslateData: TrainerTranslateDataType[],
    trainingCategoryTranslateData: TrainingCategoryTranslateDataType[],
    otherTrainingData: TrainingDataType[],
    trainingTranslateData: TrainingTranslateDataType[],
    titleDictionary: { [key: string]: string },
    buttonDictionary: { [key: string]: string },
    formDictionary: {
        [key: string]: {
            [key: string]: string
        }
    },
}