import { useState,createContext } from "react";
import Content from "./Content";
import "./App.css"
// Context
// CompA => CompB => CompC
// 1.Create content
// 2.Provider
// 3.Consumer

export const ThemeContext = createContext()

console.log(ThemeContext)

function App(){

const [theme,setTheme] = useState('dark')
const hanlderAddTheme = () => {
  setTheme(theme === 'dark' ? 'light' : 'dark' )
}
  return (
    <ThemeContext.Provider value={theme}>
      <div style={{padding:20}}>
        <button onClick={hanlderAddTheme}> toggle thêm</button>

        <Content />

      </div>
    </ThemeContext.Provider>
  )
}

export default App;