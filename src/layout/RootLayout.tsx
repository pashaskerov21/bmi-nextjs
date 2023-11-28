'use client'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from '../styles/theme/light'
import { darkTheme } from '../styles/theme/dark'
import { GlobalStyles } from '../styles/global'
import { Footer, Header } from '../partials'
import { ScrollButton, SiteToolbar } from '../components'
import { RootLayoutType } from '../types'
import { Fancybox } from "@fancyapps/ui";
import { Provider } from 'react-redux'
import store from '../redux/store'
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

const RootLayout: React.FC<RootLayoutType> = ({
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
    trainingCategoryData,
    trainingCategoryTranslateData,
    trainingData,
    trainingTranslateData,
    trainerData,
    trainerTranslateData,
    eventData,
    eventTranslateData,
    newsData,
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
            <Provider store={store}>
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
                            trainingCategoryData={trainingCategoryData}
                            trainingCategoryTranslateData={trainingCategoryTranslateData}
                            trainingData={trainingData}
                            trainingTranslateData={trainingTranslateData}
                            trainerData={trainerData}
                            trainerTranslateData={trainerTranslateData}
                            eventData={eventData}
                            eventTranslateData={eventTranslateData}
                            newsData={newsData}
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
            </Provider>
        </React.Fragment>
    )
}

export default RootLayout
