// setting
export const fetchSetting = async () => {
    const res = await fetch(`${process.env.BASE_URL}/api/settings`);
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}
export const fetchSettingTranslate = async () => {
    const res = await fetch(`${process.env.BASE_URL}/api/settings/translate`);
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}
// menu
export const fetchMenu = async () => {
    const res = await fetch(`${process.env.BASE_URL}/api/menu`);
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}
export const fetchMenuTranslate = async () => {
    const res = await fetch(`${process.env.BASE_URL}/api/menu/translate`);
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}
// banner
export const fetchBanner = async () => {
    const res = await fetch(`${process.env.BASE_URL}/api/banner`);
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}
export const fetchBannerTranslate = async () => {
    const res = await fetch(`${process.env.BASE_URL}/api/banner/translate`);
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}
// report 
export const fetchReport = async () => {
    const res = await fetch(`${process.env.BASE_URL}/api/report`);
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}
export const fetchReportTranslate = async () => {
    const res = await fetch(`${process.env.BASE_URL}/api/report/translate`);
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}
// about
export const fetchAbout = async () => {
    const res = await fetch(`${process.env.BASE_URL}/api/about`);
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}
export const fetchAboutTranslate = async () => {
    const res = await fetch(`${process.env.BASE_URL}/api/about/translate`);
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}
export const fetchAboutReport = async () => {
    const res = await fetch(`${process.env.BASE_URL}/api/about/report`);
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}
export const fetchAboutReportTranslate = async () => {
    const res = await fetch(`${process.env.BASE_URL}/api/about/report/translate`);
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}
// training
export const fetchTrainingCategory = async () => {
    const res = await fetch(`${process.env.BASE_URL}/api/trainings/category`);
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}
export const fetchTrainingCategoryTranslate = async () => {
    const res = await fetch(`${process.env.BASE_URL}/api/trainings/category/translate`);
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}
export const fetchTraining = async () => {
    const res = await fetch(`${process.env.BASE_URL}/api/trainings`);
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}
export const fetchTrainingTranslate = async () => {
    const res = await fetch(`${process.env.BASE_URL}/api/trainings/translate`);
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}
// trainer
export const fetchTrainer = async () => {
    const res = await fetch(`${process.env.BASE_URL}/api/trainers`);
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}
export const fetchTrainerTranslate = async () => {
    const res = await fetch(`${process.env.BASE_URL}/api/trainers/translate`);
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}
// event
export const fetchEvent = async () => {
    const res = await fetch(`${process.env.BASE_URL}/api/events`);
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}
export const fetchEventTranslate = async () => {
    const res = await fetch(`${process.env.BASE_URL}/api/events/translate`);
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}
export const fetchEventGallery = async () => {
    const res = await fetch(`${process.env.BASE_URL}/api/events/gallery`);
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}
// news 
export const fetchNews = async () => {
    const res = await fetch(`${process.env.BASE_URL}/api/news`);
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}
export const fetchNewsTranslate = async () => {
    const res = await fetch(`${process.env.BASE_URL}/api/news/translate`);
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}
// gallery
export const fetchGallery = async () => {
    const res = await fetch(`${process.env.BASE_URL}/api/gallery`);
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}
// customer
export const fetchCustomer = async () => {
    const res = await fetch(`${process.env.BASE_URL}/api/customers`);
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}
// partner
export const fetchPartner = async () => {
    const res = await fetch(`${process.env.BASE_URL}/api/partner`);
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}
// faq
export const fetchFaq = async () => {
    const res = await fetch(`${process.env.BASE_URL}/api/faq`);
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}
export const fetchFaqTranslate = async () => {
    const res = await fetch(`${process.env.BASE_URL}/api/faq/translate`);
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}
// career
export const fetchCareer = async () => {
    const res = await fetch(`${process.env.BASE_URL}/api/career`);
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}
export const fetchCareerTranslate = async () => {
    const res = await fetch(`${process.env.BASE_URL}/api/career/translate`);
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}
