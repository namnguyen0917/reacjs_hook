
import { useRef } from "react";
import "./App.css"
// import { useContext } from "react"
// import { StoreContext  } from './store'
import { useStore ,actions } from "./store";
// Context
// CompA => CompB => CompC
// 1.Create content
// 2.Provider
// 3.Consumer



function App(){

  // const [state,dispatch] = useContext(StoreContext)
  const [state,dispatch] = useStore()

  const { todos, todoInput } = state

  const inputRef = useRef()

  const handleAdd = () => {
      dispatch(actions.addTodo(todoInput))
      dispatch(actions.setTodoInput(''))
      inputRef.current.focus()
  }
  console.log(state)

  return (

      <div style={{padding:20}}>

          <h1>Hello anh em F8</h1>
          <input 
            ref={inputRef}
            value={todoInput}
            placeholder="Enter todo..."
            onChange={e => {
              dispatch(actions.setTodoInput(e.target.value))
            }}            
          />
          <button onClick={handleAdd}>add</button>

          <hr/>
          {todos.map((todo,index) => {
            return (<li key={index}>{todo} <span onClick={() => {dispatch(actions.deleteTodo(index))}} >XXX --{index}</span> </li>)
          })}
      </div>

  )
}

export default App;