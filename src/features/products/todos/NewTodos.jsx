import React from 'react'
import { useAddTodoMutation } from '../../../services/todos'

function NewTodos() {
    var [addTodofn]=useAddTodoMutation();
  return (
    <div>
        <h1>NewTodos</h1>
        <input type="text" id="d1"/>
        <button onClick={()=>{addTodofn({title:document.getElementById("d1").value})}}>add todo</button>

    </div>
  )
}

export default NewTodos