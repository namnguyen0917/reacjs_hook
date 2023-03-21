import { useEffect, useLayoutEffect, useState , useRef} from "react"


function Avatar(){

    // const [image,setAvatar] = useState()
    // useEffect(()=>{
    //     return () =>{
    //         image && URL.revokeObjectURL(image.preview)
    //     }
    // },[image])

    // const handlerPrevAvatar = (e) => {
    //     const file = e.target.files[0]

    //     file.preview = URL.createObjectURL(file)
    //     setAvatar(file)
    // }

// useLayoutEffect hook là một hook hoạt động tương tự như useEffect hook. Điểm khác nhau giữa 2 hooks này là thứ tự thực hiện các công việc mình đã liệt kê dưới đây:

// #useEffect
// 1. Cập nhật lại state
// 2. Cập nhật DOM (mutated)
// 3. Render lại UI
// 4. Gọi cleanup nếu deps thay đổi
// 5. Gọi useEffect callback

// #useLayoutEffect
// 1. Cập nhật lại state
// 2. Cập nhật DOM (mutated)
// 3. Gọi cleanup nếu deps thay đổi (sync)
// 4. Gọi useLayoutEffect callback (sync)
// 5. Render lại UI

// const [count,setCount] = useState(1)

// useLayoutEffect(()=>{
//     if( count > 3)
//     setCount(0)
// },[count])

// const handlerCount = () =>{
//     setCount(count +1)
// }

//     return(
//         <div>
//             <input
//                 type="file"
//                 onChange={handlerPrevAvatar}
//             />

//             { image && (
//                 <img src={image.preview}  width="20%"/>
//             )}

//             <hr/>
//         <div>{count}</div>
//         <button onClick={handlerCount}> tăng + 1 </button>
//         </div>
//     )
//  ------------------end #useLayoutEffect



// useRef Mỗi hàm dược gọi tạo ra phạm vi mới không liên quan gì phạm gì trướt đó
// Giá trị khởi tạo luôn trả về là 1 Object

    const [count,setCount] =  useState(60)

    let timerId = useRef()
    // let prevCount = useRef()
    let Refh1 = useRef()


    useEffect(()=>{
        console.log(Refh1.current)
        console.log(Refh1.current.innerText)
        console.log(Refh1.current.textContent)
    })

    const handlerStart = () => {
        timerId.current = setInterval(()=> {
            setCount(prev => prev -1)
            
        },1000)

        console.log('start -> ', timerId.current)
    }

    // useEffect(()=>{ 
    //     prevCount.current = count
    // },[count])

    const handlerStop = () => {
         
        clearInterval(timerId.current)
        console.log('stop -> ', timerId.current)
    }

    // console.log(count,prevCount.current)

    return(
        <div>
            
        <h1 ref={Refh1}>{count} -{count}</h1>
        <button onClick={handlerStart}> Start </button>
        <button onClick={handlerStop}> Stop </button>
        </div>
    )

}


    


export default Avatar;


