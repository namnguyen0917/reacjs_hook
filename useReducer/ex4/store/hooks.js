import { useContext } from "react";
import Context from "./Context";


export const useStore = () => {

    // con đả được cấp 2 giá trị từ file Provider.js
    // const [state,dispatch] = useContext(Context)
    // return  [state,dispatch]

    return useContext(Context)
}