import { useCallback, useState } from "react";
import Content from "./Content";
import Avatar from "./Avatar";
import Memo from "./Memo";
const orders = [100,200,700]

const gifts = ['ramdom 1','ramdom 2','ramdom 3','ramdom 4']

function App() {

//----------------------------------useReducer
//1. Init state : 0
//2. Actions : UP( state +1)/DOWN(state -1)
//3. Reducer
//4. Dispatch

//----------------------------------end useReducer

// ----------------------------------useState
// khi nào dùng ? khi dữ liệu thay đổi thì giao diện tự động thay đổi ( reder lại dữ liệu)
// Giá trị khởi tạo trong useState chỉ 1 lần có thể(1 chuổi hay 1 mảng or object , 1 số)

// lưu ý
// - Comment dc re-render sau khi 'setState'
// - Initial state chỉ dùng cho lần đầu

// --------------------------ex1
  // const [counter, setCounter] = useState(1) 

  // const handleUp = () =>{
  //   // setCounter(counter + 1)
  //   // setCounter(counter + 1)
  //   // setCounter(counter + 1)
  //   setCounter(prevState => prevState + 1)
  //   setCounter(prevState => prevState + 1)
  //   setCounter(prevState => prevState + 1)
  // }

// --------------------------ex2
  // const [counter, setCounter] = useState(() => {

  //   const total = orders.reduce((total,cur)=> total + cur )

  //   return total;

  // }) 

  // const handleUp = () =>{

  //   setCounter(prevState => prevState + 1)
  // }

  // return (
  //   <div className="App" style={{padding:20}}>
  //         <h1>
  //           {counter}
  //         </h1>
  //         <button onClick={handleUp}> UP +++ </button>
  //   </div>
  // );

  // --------------------------ex3

  // const [intro, setIntro] = useState({
  //   name:"nam ga",
  //   age:29
  // })

  // const handleUp = () =>{
  //   setCounter({
  //     ...counter,
  //     bio:"hello nam",
  //     address: "long xuyên"
  //   })
  // }

  // const handleUp = () =>{
  //   setIntro( pre => {
  //     return {
  //       ...pre,
  //       bio:"hello nam",
  //       address: "long xuyên"
  //     }
  //   })
  // }

  // return (
  //   <div className="App" style={{padding:20}}>
  //         <h1>
  //           {JSON.stringify(intro)}
  //         </h1>
  //         <button onClick={handleUp}> UP +++ </button>
  //   </div>
  // );

// ----------- Two-way binding

// ex1
// const [gift, setGift] = useState() 
// const handler = () => {
//     setGift(gifts[Math.floor(Math.random()*gifts.length)]);
// }

// return (
//   <div className="App" style={{padding:20}}>
//         <h1>
//           { gift || " lay thưởng random nè con trai " }
//         </h1>
//         <button onClick={handler}> Get +++ </button>
//   </div>
// );

// ex2

// const [name,setName] = useState('')
// return (
//   <div className="App" style={{padding:20}}>

//       <input
//           value={name}
//            onChange={e => setName(e.target.value)}
//       /> 

//     <button onClick={() => setName("Nguyen van BB")}>Change </button>
//   </div>
// );

// ex3
// const [name,setName] = useState('')
// const [email,setEmail] = useState('')

// const handler = () => {

//   //call API
//   console.log({
//     name,
//     email
//   })
  
//   return {
//     name,
//     email
//   }
// }

// return (
//   <div className="App" style={{padding:20}}>

//       <input
//           value={name}
//           onChange={e => setName(e.target.value)}
//           placeholder={"Nhap ten"}
//       /> 

//       <input
//           value={email}
//           onChange={e => setEmail(e.target.value)}
//           placeholder={"nhap email"}
//       /> 

//     <button onClick={handler}>Change </button>
//   </div>
// );

// ex4
// const courses = [
//   {
//     id:1,
//     name:'html,css'
//   },
//   {
//     id:2,
//     name:'php'
//   },
//   {
//     id:3,
//     name:'js'
//   },
//   {
//     id:4,
//     name:'java'
//   },
//   {
//     id:5,
//     name:'reac-js'
//   }
// ]

// --------------------radio
// const[checked,setChecked] = useState(1)
// const handleSubmit = () =>{
//   console.log({ id:checked})
//   return{ id:checked}
// }

// return (
//   <div className="App" style={{padding:20}}>

//     {courses.map(course => (
//       <div key={course.id}>
//         <input type={"radio"} 
//           checked={checked === course.id}  
//           onChange={()=> setChecked(course.id)}
//         />
//          {course.name}
//       </div>
//     ))}
    
//     <button onClick={handleSubmit}>Register </button>
//   </div>
// )

// --------------------End radio

// --------------------checkbox

  // const[checked,setChecked] = useState([])
  
  // console.log(checked)

  // const handleSubmit = () =>{
  //   console.log({ id:checked})
  //   return{ id:checked}
  // }

  // const handlerChecked = (id) =>{
  //   setChecked(pre => {
  //     const isChecked = checked.includes(id)
  //     if(isChecked){
  //       return checked.filter(item => item !== id)
  //     }else{
  //       return [...pre,id]
  //     }
  //   })
  // }

  // return (
  //   <div className="App" style={{padding:32}}>

  //     {courses.map(course => (
  //       <div key={course.id}>
  //         <input type={"checkbox"} 
  //           // checked={checked === checked.includes(course.id)}  
  //           onChange={()=> handlerChecked(course.id)}
  //         />
  //         {course.name}
  //       </div>
  //     ))}
      
  //     <button onClick={handleSubmit}>Register </button>
  //   </div>
  // )
// --------------------End checkbox
// ---------------------Todolist 
// toán tử nolist ?? trong trường hợp null or undifined thì lấy vế sau

// const [job,setJob] = useState('')
// const [jobs,setJobs] = useState(()=>{

//   const listJob =  JSON.parse(localStorage.getItem('jobs'))
//   return listJob ?? []
// })


// const handlerAdd = () =>{
//   setJobs(prev =>{
//     const newJobs = [...prev,job]
//     // save to local storage
//     const jsonJobs = JSON.stringify(newJobs)
//     localStorage.setItem('jobsaa',jsonJobs)

//     return newJobs
//   })
//   setJob('')
// }

  // const handleDelete = (index) =>{
  //   // const removeJobs =  JSON.parse(localStorage.getItem('jobs'))
  //   // const newArray = removeJobs.filter(item => item !== removeJobs[index])
  //   // localStorage.setItem('jobs',JSON.stringify(newArray))
  //   // console.log(removeJobs.filter(item => item !== removeJobs[index]))
  //   // console.log(index)

  //   // return setJobs(newArray)
  // }

// return (

//   <div className="App" style={{padding:32}}>

//     <input value={job} onChange={e => setJob(e.target.value)}/>
//     <button onClick={handlerAdd}>add nè 3 </button>
//     <ul>

//       {jobs.map((job,index) => (
//         <li key={index} onClick={()=>handleDelete(index)}>
//             {job}     
//         </li>
//       ))}

//     </ul>
//   </div>
// )


// ---------------------End Todolist 

// --------------------- Mounted & Unmounted?
// đặt tên file vs têm hàm giống nhau

  const [show,setShow] = useState(false)

  return (

    <div className="App" style={{padding:32}}> 
        <button onClick={()=>setShow(!show)}>Togole</button>
        <h1>Hello world</h1>
        {show && <Memo/>}
    </div>
  )
  
// -----------------End Mounted & Unmounted?


}




export default App;
