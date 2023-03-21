
import {  useEffect, useMemo, useReducer, useRef, useState } from "react";

// useReducer nhận 3 đối số

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
const initState = {
  job:'',
  jobs:[] 
}

//2. Actions 
const SET_JOB = 'set_job'
const ADD_JOB = 'add_job'
const DELETE_JOB = 'delete_job'

const setJob = (payload) => {

    return {type:SET_JOB,payload}
}

const addJob = (payload) => {

  return {type:ADD_JOB,payload}
}

const deleteJob = (payload) => {

  return {type:DELETE_JOB,payload}
}


//3. Reducer
const reducer = (state,action) => {

  console.log(' action:',action)
  console.log('Prev state:',state)
 
  let newState

  switch(action.type){
    case SET_JOB:
      newState = {
        ...state,
        job:action.payload
      }
      break
    case ADD_JOB:
      newState ={
        ...state,
        jobs:[...state.jobs,action.payload]
      }
      break
    case DELETE_JOB:
      const newJobs = [...state.jobs]
      newJobs.splice(action.payload,1)

      newState = {
        ...state,
        jobs:newJobs
      }
      break
    default:
       throw new  Error('Invalid action')
  }

  console.log('new state:',newState)
  return newState
}

//4. Dispatch

function App() {

  const [state,dispatch] = useReducer(reducer,initState)

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
