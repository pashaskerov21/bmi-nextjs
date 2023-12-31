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
import { useDarkMode } from 'usehooks-ts'

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
        React.useEffect(() => { Fancybox.bind("[data-fancybox]", {}) }, []);
        const themes = ['dark','light']
        const defaultThemeValue = themes.includes(settingData.theme) && settingData.theme === themes[0] ? true : false;
        const { isDarkMode, toggle } = useDarkMode(defaultThemeValue);
        const activeTheme = isDarkMode ? darkTheme : lightTheme;
        const activeThemeValue = isDarkMode ? themes[0] : themes[1]; 
    
        const [loading, setLoading] = React.useState(true);
        React.useEffect(() => {
            setLoading(false);
        }, []);
    
        const [mounted, setMounted] = React.useState(false);
        React.useEffect(() => {
            setMounted(true)
        },[])
        if(!mounted){
            return null;
        }
    return (
        <React.Fragment>
            <Provider store={store}>
                <ThemeProvider theme={activeTheme}>
                    <GlobalStyles />
                    <body>
                        {loading && <div className='preloader'></div>}
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
                            theme={activeThemeValue}
                            toggleTheme={toggle}
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
