import {
    EventDataType,
    EventTranslateDataType,
    MenuDataType,
    MenuTranslateDataType,
    NewsDataType,
    NewsTranslateDataType,
    SettingDataType,
    SettingTranslateDataType,
    TrainerDataType,
    TrainerTranslateDataType,
    TrainingCategoryDataType,
    TrainingCategoryTranslateDataType,
    TrainingDataType,
    TrainingTranslateDataType
} from "../data";

export type HeaderProps = {
    settingData: SettingDataType;
    menuData: MenuDataType[],
    menuTranslateData: MenuTranslateDataType[],
    theme: string,
    toggleTheme: () => void,
    activeLocale: string,
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
    errorDictionary: { [key: string]: string },
}
export type MenuProps = {
    settingData: SettingDataType;
    menuData: MenuDataType[],
    menuTranslateData: MenuTranslateDataType[],
    theme: string,
    menuShow: boolean,
    setMenuShow: React.Dispatch<React.SetStateAction<boolean>>,
    toggleMenu: () => void,
    toggleTheme: () => void,
    fixed: boolean,
    activeLocale: string,
}
export type SearchProps = {
    searchShow: boolean,
    toggleSearch: () => void,
    activeLocale: string,
    menuData: MenuDataType[],
    menuTranslateData: MenuTranslateDataType[],
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
    errorDictionary: { [key: string]: string },
}
export type FooterProps = {
    activeLocale: string,
    settingData: SettingDataType;
    menuData: MenuDataType[],
    menuTranslateData: MenuTranslateDataType[],
    requiredSettingTranslate: SettingTranslateDataType,
    footerDictionary: { [key: string]: string },
}
