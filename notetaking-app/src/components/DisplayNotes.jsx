import React, { useContext } from "react";
import contextTodo from "./context/context";
import { REMOVE_TODO } from "./context/action.types";

function DisplayNotes(){
    const {todos, dispatch} = useContext(contextTodo);
    return(
        <div className="grid grid-cols-3 gap-1 m-10">
            {
                todos.map((todo,index)=>{
                    return (
                        <div key={index} className="rounded text-stone-50 bg-violet-300 border-violet-700 border-2 border-dotted p-[20px]">
                            <h1>{todo}</h1>
                            <button onClick={()=>{
                                return dispatch({
                                    type:REMOVE_TODO,
                                    payload: todo
                                })
                            }}>x</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default DisplayNotes;