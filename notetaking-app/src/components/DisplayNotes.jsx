import React, { useContext } from "react";
import contextTodo from "./context/context";
import { REMOVE_TODO } from "./context/action.types";

function DisplayNotes(){
    const {todos, dispatch} = useContext(contextTodo);
    return(
        <div className="flex grid grid-cols-3 gap-1 m-10">
            {
                todos.map((todo,index)=>{
                    return (
                        <div key={index} className="rounded text-stone-50 font-mono bg-violet-500 border-violet-700 border-2 border-dotted p-[20px]">
                            <h1>{todo}</h1>
                            <button className="bg-gray-200 p-1 m-1 font-mono text-black border rounded hover:bg-red-600 hover:text-white transition duration-450 ease-in-out" onClick={()=>{
                                return dispatch({
                                    type:REMOVE_TODO,
                                    payload: todo
                                })
                            }}>remove </button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default DisplayNotes;