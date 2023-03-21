
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
//1. Init state : 0
const initState = 0

//2. Actions 
const UP_ACTION = 'up'
const DOWN_ACTION = 'down'

//3. Reducer
const reducer = (state,action) =>{
  console.log('có chạy hàm này k?')
  switch(action) {
      case UP_ACTION:
        return state + 1
      case DOWN_ACTION:
        return state -1
      default:
        throw new Error('Invalid action')
  }
}

function App() {
  const [count,dispatch] = useReducer(reducer,initState)

  return (

    <div className="App" style={{padding:32}}> 
        <h1> {count} </h1>
      <hr/>
      <button 
        onClick={()=> dispatch(UP_ACTION)}
      >UP</button>
      <button 
        onClick={()=> dispatch(DOWN_ACTION)}
      >DOWN</button>
    </div>
  )

}


export default App;
