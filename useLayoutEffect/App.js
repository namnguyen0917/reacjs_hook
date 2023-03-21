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