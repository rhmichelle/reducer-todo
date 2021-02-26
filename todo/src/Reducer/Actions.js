import { TODO_ADD, TODO_TOGGLE, TODO_CLEAR } from "../Reducer/reducer";

const addAction = (title) => {
    return({type: TODO_ADD, payload: title});
}

const toggleAction = (title) => {
    return({type: TODO_TOGGLE, payload: title});
}

const clearAction = () => {
    return({type: TODO_CLEAR});
}

export default {
        addAction, 
        toggleAction, 
        clearAction
    };

//Add new Todo
//Toggle Todo to show completed
//Clear Todos