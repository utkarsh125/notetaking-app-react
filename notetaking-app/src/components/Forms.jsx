import React, {useContext, useState} from "react";
import contextTodo from "./context/context";
import { ADD_TODO } from "./context/action.types";
import DisplayNotes from "./DisplayNotes";

function Forms() {

  const {todos, dispatch} = useContext(contextTodo);
  const [todoString, setTodoString] = useState('')

  const handleClick = (e) =>{// e---> event
    e.preventDefault();

    if(todoString == ''){
      return alert('Please Enter Todo to Add')
    }

    dispatch ({
      type: ADD_TODO,
      payload: todoString
    })

    setTodoString('')
    console.log(todos)
  }

  

  return (
    <>
    <form action="" className="text-center m-4" onSubmit={handleClick}>
      <div>
        <input type="text" placeholder="Enter Notes" className="border-4 p-2 rounded"
        onChange={(e)=>setTodoString(e.target.value)}
        value={todoString}
        />
        <button className="bg-orange-200 p-2 rounded ml-2">Add</button>
      </div>
    </form>
    <DisplayNotes />
    </>
  );
}

export default Forms;
