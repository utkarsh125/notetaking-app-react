import React, { useContext } from "react";
import contextTodo from "./context";

function DisplayNotes(){
    const {todos, dispatch} = useContext(contextTodo)
    return(
        <div key = {index}>
            <h1>{todo}</h1>
        </div>
    )
}