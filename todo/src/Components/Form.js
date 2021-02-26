import React, {useReducer} from 'react';
import reducer from '../Reducer/reducer';
import actions from '../Reducer/Actions';



const Form = () => {
    const initialState = 
        {
            item: 'Fill out Happy Planner',
            completed: false,
            id: 1
        }

    const [state, dispatch] = useReducer(reducer, initialState);

    const handleChanges = (event) => {
        dispatch(actions.TODO_ADD(event.target.value));
    }
    

    return(
        <form>
            <label htmlFor='title'>Title</label>
            <input
                id='title'
                type='text'
                placeholder='Enter Title of Task'
                // onChange={handleChanges}
            />
        {state.map(todo => (
            <div>
                <p>Task: {todo.item}</p>
                <p>completed: {todo.completed}</p>
            </div>
            ))}
            <button onClick={handleChanges}>Add</button>
            
        </form>
    );
}

export default Form;