import {
    BannerDataType,
    BannerTranslateDataType,
    EventDataType,
    EventTranslateDataType,
    GalleryDataType,
    MenuDataType,
    MenuTranslateDataType,
    NewsDataType,
    NewsTranslateDataType,
    ReportDataType,
    ReportTranslateDataType,
    SettingDataType,
    TrainerDataType,
    TrainerTranslateDataType,
    TrainingCategoryDataType,
    TrainingCategoryTranslateDataType,
    TrainingDataType,
    TrainingTranslateDataType
} from "../data";

// breadcrumb
export type Breadcrumb = {
    id: number;
    name?: string;
    path: string;
};
export type BannerSlideProps = {
    activeLocale: string,
    buttonDictionary: { [key: string]: string }
    slideData: BannerDataType,
    bannerTranslateData: BannerTranslateDataType[],
}
export type EventCardProps = {
    activeLocale: string,
    eventData: EventDataType,
    eventTranslateData: EventTranslateDataType[],
    buttonDictionary?: { [key: string]: string },
}
export type PhotoGalleryProps = {
    photos: GalleryDataType[],
}
export type VideoGalleryProps = {
    videos: GalleryDataType[],
}
export type NewsCardProps = {
    activeLocale: string,
    newsData: NewsDataType,
    newsTranslateData: NewsTranslateDataType[],
    buttonDictionary: { [key: string]: string },
}
export type CounterProps = {
    value: number,
}
export type ReportItemProps = {
    activeLocale: string,
    reportData: ReportDataType,
    reportTranslateData: ReportTranslateDataType[],
}
export type ApplyCanvasProps = {
    activeLocale: string,
    showApplyCanvas: boolean,
    toggleApplyCanvas: () => void,
    titleDictionary: { [key: string]: string },
    buttonDictionary: { [key: string]: string },
    formDictionary: {
        [key: string]: {
            [key: string]: string
        }
    },
    trainingData: TrainingDataType[],
    trainingTranslateData: TrainingTranslateDataType[],
}
export type SiteToolbarProps = {
    activeLocale: string,
    titleDictionary: { [key: string]: string },
    buttonDictionary: { [key: string]: string },
    formDictionary: {
        [key: string]: {
            [key: string]: string
        }
    },
    trainingCategoryTranslateData: TrainingCategoryTranslateDataType[],
    trainingData: TrainingDataType[],
    trainingTranslateData: TrainingTranslateDataType[],
}
export type TrainingCanvasProps = {
    activeLocale: string,
    showTrainingCanvas: boolean,
    toggleTrainingCanvas: () => void,
    titleDictionary: { [key: string]: string },
    trainingCategoryTranslateData: TrainingCategoryTranslateDataType[],
    trainingData: TrainingDataType[],
    trainingTranslateData: TrainingTranslateDataType[],
}
export type TrainerCardProps = {
    activeLocale: string,
    trainerData: TrainerDataType,
    trainerTranslateData: TrainerTranslateDataType[],
}
export type CategoryCardContentProps = {
    activeLocale: string,
    categoryData: TrainingCategoryDataType,
    categoryTranslateData: TrainingCategoryTranslateDataType[],
    buttonDictionary: { [key: string]: string },
}
export type PopularTrainingCardProps = {
    toggleTrainingCanvas: () => void,
    activeLocale: string,
    trainingCategoryTranslateData: TrainingCategoryTranslateDataType[],
    trainingData: TrainingDataType,
    trainingTranslateData: TrainingTranslateDataType[],
}
export type TrainingAccordionProps = {
    activeLocale: string,
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
export type TrainingCardProps = {
    cardType: string,
    title: string,
    image: string,
    slug?: string,
    buttonDictionary: { [key: string]: string },
}
export type TrainingCardContentCardProps = {
    activeLocale: string,
    categoryTranslateData: TrainingCategoryTranslateDataType[],
    trainingData: TrainingDataType,
    trainingTranslateData: TrainingTranslateDataType[],
    buttonDictionary: { [key: string]: string },
}
export type TrainingModalProps = {
    activeLocale: string,
    category: TrainingCategoryDataType,
    categoryTranslateData: TrainingCategoryTranslateDataType[],
    trainingData: TrainingDataType[],
    trainingTranslateData: TrainingTranslateDataType[],
    buttonDictionary: { [key: string]: string },
    showTrainingModal: boolean,
    toggleTrainingModal: () => void,
}
export type TrainingModelContentContentProps = {
    category_id: number,
    training_id: number,
    activeLocale: string,
    categoryTranslateData: TrainingCategoryTranslateDataType[],
    trainingTranslateData: TrainingTranslateDataType[],
    buttonDictionary: { [key: string]: string },
}
export type LanguageProps = {
    activeLocale: string,
}
export type MenuLinkProps = {
    activeLocale: string,
    menuData: MenuDataType,
    menuTranslateData: MenuTranslateDataType[],
}
export type PageTitleProps = {
    activeLocale: string,
    title?: string;
    breadcrumbs: Breadcrumb[];
    titleDictionary: { [key: string]: string },
};
export type SectionTitleProps = {
    title: string,
}
export type SocialMediaProps = {
    settingData: SettingDataType,
}