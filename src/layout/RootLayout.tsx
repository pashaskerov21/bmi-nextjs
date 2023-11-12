'use client'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from '../styles/theme/light'
import { darkTheme } from '../styles/theme/dark'
import { MenuTranslateType, MenuType, SettingTranslateType, SettingType } from '../types'
import { GlobalStyles } from '../styles/global'
import { Footer, Header } from '../partials'
import { ScrollButton } from '../components'

type RootLayoutProps = {
    children: React.ReactNode,
    settingData: SettingType;
    menuData: MenuType[],
    requiredMenuTranslate: MenuTranslateType[],
    activeLocale: string,
    requiredSettingTranslate: SettingTranslateType,
    footerDictionary: {[key: string]: string},
}

const RootLayout: React.FC<RootLayoutProps> = ({ children, settingData, menuData, requiredMenuTranslate, activeLocale, requiredSettingTranslate, footerDictionary }) => {
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
    })
    return (
        <React.Fragment>
            <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
            <GlobalStyles />
                <body>
                    <ScrollButton/>
                    <Header menuData={menuData} requiredMenuTranslate={requiredMenuTranslate} settingData={settingData} theme={theme} toggleTheme={toggleTheme} activeLocale={activeLocale}/>
                    {loading && <div className='preloader'></div>}
                    <main>{children}</main>
                    <Footer menuData={menuData} requiredMenuTranslate={requiredMenuTranslate} settingData={settingData} requiredSettingTranslate={requiredSettingTranslate} footerDictionary={footerDictionary}/>
                </body>
            </ThemeProvider>
        </React.Fragment>
    )
}

export default RootLayout
