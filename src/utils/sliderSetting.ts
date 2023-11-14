export const bannerSettings = {
    className: 'banner-slider',
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease"
}

export const trainingCategorySettings = {
    className: 'trainings-slider pagination-secondary',
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    dots: true,
    rows: 2,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease",
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                initialSlide: 4,
                rows: 2,
                dots: true,
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                initialSlide: 3,
                rows: 2,
                dots: true,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
                rows: 2,
                dots: true,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
                rows: 1,
                dots: true,

            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                rows: 1,
                dots: false,
            }
        }
    ]
}

export const trainingModalSliderSettings = {
    className: 'training-modal pagination-secondary',
    infinite: true,
    speed: 500,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease",
}