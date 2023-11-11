import { SettingTranslateType, SettingType } from '@/src/types';
import React from 'react'

type RootHeadProps = {
    settingData: SettingType;
    requiredSettingTranslate: SettingTranslateType,
}

const RootHead: React.FC<RootHeadProps> = ({ settingData, requiredSettingTranslate }) => {
    return (
        <>
            <title>{requiredSettingTranslate.title}</title>
            <meta name='description' content={requiredSettingTranslate.description} />
            <link rel="icon" href={settingData.logo.icon} />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous' />
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css" />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.css" />
            <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        </>
    )
}

export default RootHead
