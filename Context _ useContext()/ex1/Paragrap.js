import { useContext } from "react";
import { ThemeContext } from "./App";

function Paragrap(){

    const theme = useContext(ThemeContext)

    return(
    <div className={theme}>
         <h1>hello my namga</h1>   
    </div>)
}

export default Paragrap;