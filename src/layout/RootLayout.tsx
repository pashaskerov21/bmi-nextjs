'use client'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from '../styles/theme/light'
import { darkTheme } from '../styles/theme/dark'
import { MenuTranslateType, MenuType, SettingType } from '../types'
import { GlobalStyles } from '../styles/global'
import { Header } from '../partials'

type RootLayoutProps = {
    children: React.ReactNode,
    settingData: SettingType;
    menuData: MenuType[],
    requiredMenuTranslate: MenuTranslateType[],
    currentLanguage: string,
}

const RootLayout: React.FC<RootLayoutProps> = ({ children, settingData, menuData, requiredMenuTranslate, currentLanguage }) => {
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
                    <Header menuData={menuData} requiredMenuTranslate={requiredMenuTranslate} settingData={settingData} theme={theme} toggleTheme={toggleTheme} currentLanguage={currentLanguage}/>
                    {loading && <div className='preloader'></div>}
                    <main>{children}</main>
                </body>
            </ThemeProvider>
        </React.Fragment>
    )
}

export default RootLayout
