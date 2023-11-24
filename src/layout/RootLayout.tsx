'use client'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from '../styles/theme/light'
import { darkTheme } from '../styles/theme/dark'
import { EventTranslateType, MenuTranslateType, MenuType, NewsTranslateType, SettingTranslateType, SettingType, TrainerTranslateType, TrainingCategoryTranslateType, TrainingTranslateType, TrainingType } from '../types'
import { GlobalStyles } from '../styles/global'
import { Footer, Header } from '../partials'
import { ScrollButton, SiteToolbar } from '../components'
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'


type RootLayoutProps = {
    children: React.ReactNode,
    settingData: SettingType;
    menuData: MenuType[],
    menuTranslateData: MenuTranslateType[],
    activeLocale: string,
    requiredSettingTranslate: SettingTranslateType,
    footerDictionary: { [key: string]: string },
    titleDictionary: { [key: string]: string },
    buttonDictionary: { [key: string]: string },
    errorDictionary: { [key: string]: string },
    formDictionary: {
        [key: string]: {
            [key: string]: string
        }
    },
    trainingCategoryTranslateData: TrainingCategoryTranslateType[],
    trainingData: TrainingType[],
    trainingTranslateData: TrainingTranslateType[],
    trainerTranslateData: TrainerTranslateType[],
    eventTranslateData: EventTranslateType[],
    newsTranslateData: NewsTranslateType[],
}

const RootLayout: React.FC<RootLayoutProps> = ({
    children,
    settingData,
    menuData,
    menuTranslateData,
    activeLocale,
    requiredSettingTranslate,
    footerDictionary,
    titleDictionary,
    buttonDictionary,
    formDictionary,
    errorDictionary,
    trainingCategoryTranslateData,
    trainingData,
    trainingTranslateData,
    trainerTranslateData,
    eventTranslateData,
    newsTranslateData }) => {
    const [theme, setTheme] = React.useState<string>(`${settingData.theme}`);
    const toggleTheme = React.useCallback(() => {
        if (theme === 'dark') {
            setTheme('light');
        } else {
            setTheme('dark')
        }
    }, [theme])

    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        setLoading(false);
    });

    React.useEffect(() => { Fancybox.bind("[data-fancybox]", {}) }, [])
    return (
        <React.Fragment>
            <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
                <GlobalStyles />
                <body>
                    <ScrollButton />
                    <SiteToolbar
                        activeLocale={activeLocale}
                        titleDictionary={titleDictionary}
                        buttonDictionary={buttonDictionary}
                        formDictionary={formDictionary}
                        trainingCategoryTranslateData={trainingCategoryTranslateData}
                        trainingData={trainingData}
                        trainingTranslateData={trainingTranslateData}
                    />
                    <Header
                        menuData={menuData}
                        menuTranslateData={menuTranslateData}
                        settingData={settingData}
                        theme={theme}
                        toggleTheme={toggleTheme}
                        activeLocale={activeLocale}
                        trainingCategoryTranslateData={trainingCategoryTranslateData}
                        trainingData={trainingData}
                        trainingTranslateData={trainingTranslateData}
                        trainerTranslateData={trainerTranslateData}
                        eventTranslateData={eventTranslateData}
                        newsTranslateData={newsTranslateData}
                        errorDictionary={errorDictionary}
                    />
                    {loading && <div className='preloader'></div>}
                    <main>{children}</main>
                    <Footer
                        activeLocale={activeLocale}
                        menuData={menuData}
                        menuTranslateData={menuTranslateData}
                        settingData={settingData}
                        requiredSettingTranslate={requiredSettingTranslate}
                        footerDictionary={footerDictionary} />
                </body>
            </ThemeProvider>
        </React.Fragment>
    )
}

export default RootLayout
