export type SettingDataType = {
    id: number,
    theme: string,
    mail: string | null,
    phone: string | null,
    facebook: string | null,
    instagram: string | null,
    linkedin: string | null,
    twitter: string | null,
    youtube: string | null,
    map_url: string | null,
    logo: {
        icon: string,
        short: string,
        textIcon: string,
        textIconVertical: string,
        iconWhite: string,
        shortWhite: string,
        textIconWhite: string,
        textIconVerticalWhite: string,
    },
}
export type SettingTranslateDataType = {
    id: number,
    setting_id: number,
    lang: string,
    title: string,
    description: string,
    address: string,
    copyright: string,
}
// menu
export type MenuDataType = {
    id: number,
    path: string,
}
export type MenuTranslateDataType = {
    id: number,
    menu_id: number,
    name: string,
    lang: string,
}
// banner
export type BannerDataType = {
    id: number,
    background: string,
    title: string,
    url: string,
    videoBG: string,
    videoURL: string,
}
export type BannerTranslateDataType = {
    id: number,
    banner_id: number,
    title: string,
    lang: string,
}
// report
export type ReportDataType = {
    id: number,
    icon: string,
    value: number,
}
export type ReportTranslateDataType = {
    id: number,
    report_id: number,
    lang: string,
    title: string,
}
// about
export type AboutDataType = {
    id: number,
    videoBG: string,
    videoURL: string,
}
export type AboutTranslateDataType = {
    id: number,
    about_id: number,
    lang: string,
    text: string,
}
export type AboutReportDataType = {
    id: number,
    icon: string,
    value: number,
}
export type AboutReportTranslateDataType = {
    id: number,
    report_id: number,
    title: string,
    lang: string,
}
// training
export type TrainingCategoryDataType = {
    id: number,
    image: string,
}
export type TrainingCategoryTranslateDataType = {
    id: number,
    category_id: number,
    lang: string,
    title: string,
}
export type TrainingDataType = {
    id: number,
    categoryID: number,
    status: boolean,
    isPopular: boolean,
    cardImage: string,
    innerImage: string,
    trainersID: number[],
}
export type TrainingTranslateDataType = {
    id: number,
    training_id: number,
    lang: string,
    title: string,
    generalInformation: string,
    content: string,
    payment: string,
}
// trainer
export type TrainerDataType = {
    id: number,
    image: string,
    facebook: string | null,
    instagram: string | null,
    linkedin: string | null,
    twitter: string | null,
}
export type TrainerTranslateDataType = {
    id: number,
    trainer_id: number,
    lang: string,
    name: string,
    position: string,
    text: string,
}
// event
export type EventDataType = {
    id: number,
    cover: string,
    logo: string,
}
export type EventTranslateDataType = {
    id: number,
    event_id: number,
    lang: string,
    title: string,
    date: string,
    location: string,
    text: string,
}
export type EventGalleryDataType = {
    id: number,
    event_id: number,
    img: string,
}
// news
export type NewsDataType = {
    id: number,
    image: string,
}
export type NewsTranslateDataType = {
    id: number,
    news_id: number,
    lang: string,
    title: string,
    date: string,
    location: string,
    text: string,
}
// gallery
export type GalleryDataType = {
    id: number,
    type: string,
    image: string,
    url: string,
}
// customer
export type CustomerDataType = {
    id: number,
    image: string,
    url: string,
}
// partner
export type PartnerDataType = {
    id: number,
    image: string,
    url: string,
}
// faq
export type FaqDataType = {
    id: number,
}
export type FaqTranslateDataType = {
    id: number,
    faq_id: number,
    lang: string,
    title: string,
    text: string,
}
// career
export type CareerDataType = {
    id: number,
}
export type CareerTranslateDataType = {
    id: number,
    career_id: number,
    title: string,
    location: string,
    date: string,
    text: string,
    lang: string,
}