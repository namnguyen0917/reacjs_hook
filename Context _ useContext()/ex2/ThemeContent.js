import { useState,createContext } from "react";
const ThemeContext = createContext()

function ThemeProvider({children}){

    const [theme,setTheme] = useState('dark')
    const hanlderAddTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark' )
    }

    const value =
        {
            hanlderAddTheme,
            theme
        }

    return(
            <ThemeContext.Provider value={value}>
            {children}
            </ThemeContext.Provider>
        )
    
}

export {ThemeContext , ThemeProvider}