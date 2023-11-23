// settings
export type SettingType = {
    id: number,
    theme: string,
    mail: string | null,
    phone: string | null,
    facebook: string | null,
    instagram: string | null,
    linkedin: string | null,
    twitter: string | null,
    youtube: string | null,
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
export type SettingTranslateType = {
    id: number,
    setting_id: number,
    lang: string,
    title: string,
    description: string,
    copyright: string,
}
// menu
export type MenuType = {
    id: number,
    path: string,
}
export type MenuTranslateType = {
    id: number,
    menu_id: number,
    name: string,
    lang: string,
}
// banner
export type BannerType = {
    id: number,
    background: string,
    title: string,
    url: string,
    videoBG: string,
    videoURL: string,
}
export type BannerTranslateType = {
    id: number,
    banner_id: number,
    title: string,
    lang: string,
}
// report
export type ReportType = {
    id: number,
    icon: string,
    value: number,
}
export type ReportTranslateType = {
    id: number,
    report_id: number,
    lang: string,
    title: string,
}
// about
export type AboutType = {
    id: number,
    videoBG: string,
    videoURL: string,
}
export type AboutTranslateType = {
    id: number,
    about_id: number,
    lang: string,
    text: string,
}
export type AboutReportType = {
    id: number,
    icon: string,
    value: number,
}
export type AboutReportTranslateType = {
    id: number,
    report_id: number,
    title: string,
    lang: string,
}
// training
export type TrainingCategoryType = {
    id: number,
    image: string,
}
export type TrainingCategoryTranslateType = {
    id: number,
    category_id: number,
    lang: string,
    title: string,
}
export type TrainingType = {
    id: number,
    categoryID: number,
    status: boolean,
    isPopular: boolean,
    cardImage: string,
    innerImage: string,
    trainersID: number[],
}
export type TrainingTranslateType = {
    id: number,
    training_id: number,
    lang: string,
    title: string,
    generalInformation: string,
    content: string,
    payment: string,
}
// trainer
export type TrainerType = {
    id: number,
    image: string,
    facebook: string | null,
    instagram: string | null,
    linkedin: string | null,
    twitter: string | null,
}
export type TrainerTranslateType = {
    id: number,
    trainer_id: number,
    lang: string,
    name: string,
    position: string,
    text: string,
}
// event
export type EventType = {
    id: number,
    cover: string,
    logo: string,
}
export type EventTranslateType = {
    id: number,
    event_id: number,
    lang: string,
    title: string,
    date: string,
    location: string,
    text: string,
}
export type EventGalleryType = {
    id: number,
    event_id: number,
    img: string,
}
// news
export type NewsType = {
    id: number,
    image: string,
}
export type NewsTranslateType = {
    id: number,
    news_id: number,
    lang: string,
    title: string,
    date: string,
    location: string,
    text: string,
}
// gallery
export type GalleryType = {
    id: number,
    type: string,
    image: string,
    url: string,
}
// customer
export type CustomerType = {
    id: number,
    image: string,
    url: string,
}
// partner
export type PartnerType = {
    id: number,
    image: string,
    url: string,
}
// faq
export type FaqType = {
    id: number,
}
export type FaqTranslateType = {
    id: number,
    faq_id: number,
    lang: string,
    title: string,
    text: string,
}
// career
export type CareerType = {
    id: number,
}
export type CareerTranslateType = {
    id: number,
    career_id: number,
    title: string,
    location: string,
    date: string,
    text: string,
    lang: string,
}
// breadcrumb
export type Breadcrumb = {
    id: number;
    name?: string;
    path: string;
};