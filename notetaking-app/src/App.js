import React, { useReducer } from "react";
import Forms from "./components/Forms";
import contextTodo from "./components/context/context";
import reducer from "./components/context/reducer";
import DisplayNotes from "./components/DisplayNotes";

function App(){

  const [todos, dispatch] = useReducer(reducer, [])
  console.log(useReducer(reducer, []))

  return(
    <contextTodo.Provider value ={{todos, dispatch}}>

    
    <>
    <h1 className="text-3xl font-bold text-center">Notes App</h1>
    <Forms />
    </>

    </contextTodo.Provider>
  );
}

export default App;