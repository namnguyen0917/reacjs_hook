import { useContext } from "react";
import { ThemeContext } from "./ThemeContent";

function Paragrap(){

    const context = useContext(ThemeContext)

    return(
    <div className={context.theme}>
         <h1>hello my namga</h1>   
    </div>)
}

export default Paragrap;