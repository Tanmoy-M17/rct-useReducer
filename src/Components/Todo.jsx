import React, { useContext, useState } from 'react'
import { Functioncontext } from '../Context/Function'

// const reducer=()=>{

// }
const Todo = () => {
    const [Value,setValue] =useState("");
    const {dispatch}=useContext(Functioncontext);

    const addTodo=()=>{
        dispatch({
          type:"add",
          value:Value
        })
        setValue("")
    }
  return (
    <div>Todo

        <input type="text" placeholder='Enter Todo' value={Value} onChange={(e)=>{setValue(e.target.value)}}/>
        <button onClick={addTodo}>Add Todo</button>
    </div>
  )
}

export default Todo