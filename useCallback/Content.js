import { memo } from "react";

function Content ({onIncrease}){

    console.log('re-reder content')

    return (
        
        <>
            <h1>Hello anh em chào buổi sáng </h1>
            <hr/> 
            <button onClick={onIncrease}> dếm 1</button>  
        </>
        
    )
}

export default memo(Content);