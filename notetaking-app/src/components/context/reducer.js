import { ADD_TODO, REMOVE_TODO } from "./action.types";

const Reducer = (state, action) => {

    switch(action.type){
        case ADD_TODO:
            console.log(state)
            return [...state, action.payload]
    }
}

export default Reducer;