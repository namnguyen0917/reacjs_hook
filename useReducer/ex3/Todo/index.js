
import {  useReducer, useRef } from "react";
import reducer, { initState} from "./reducer";
import { setJob, addJob, deleteJob } from "./action";
import logger from "./logger"


// useReducer nhận 3 đối số
// Nếu muốn truyền nhiều hơn 1 giá trị , return object 
//---------------------------------useState
//1. Init state : 0
//2. Actions : UP( state +1)/DOWN(state -1)


//----------------------------------useReducer
//1. Init state : 0
//2. Actions : UP( state +1)/DOWN(state -1)
//3. Reducer
//4. Dispatch

//----------------------------------end useReducerco 
//1. Init state
//2. Actions 
//3. Reducer
//4. Dispatch

function App() {

  const [state,dispatch] = useReducer(logger(reducer),initState)

  const {job, jobs} = state

  const inputRef = useRef()

  const handlerAddJob = () =>{
    dispatch(addJob(job))
    dispatch(setJob(''))
    inputRef.current.focus()
  }



  return (

    <div className="App" style={{padding:32}}> 
        <h1>todo</h1>
        <input
          ref={inputRef}
          value={job}
          placeholder="Enter todo...."
          onChange={e => {dispatch(setJob(e.target.value))}}
        />
        <button onClick={handlerAddJob}>Add</button>
        <ul>
            {jobs.map((job,index) => (
                <li key={index}> {job} <span onClick={() => dispatch(deleteJob(index))}>xxxx</span></li>
            ))}
        </ul>
    </div>
  )

}


export default App;
