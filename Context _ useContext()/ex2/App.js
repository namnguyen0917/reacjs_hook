import Content from "./Content";
import "./App.css"
import { ThemeContext } from "./ThemeContent";
import { useContext } from "react";
// Context
// CompA => CompB => CompC
// 1.Create content
// 2.Provider
// 3.Consumer



function App(){

  const context = useContext(ThemeContext)

  return (

      <div style={{padding:20}}>
        <button onClick={context.hanlderAddTheme}> toggle thêm</button>

        <Content />

      </div>

  )
}

export default App;