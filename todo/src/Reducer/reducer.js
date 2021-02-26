export const TODO_ADD = "TODO_ADD";
export const TODO_TOGGLE = "TODO_TOGGLE";
export const TODO_CLEAR = "TODO_CLEAR";


const reducer = (state, action) => {
    switch(action.type) {
        case(TODO_ADD):
            return({...state, title: action.payload});
        case(TODO_TOGGLE):
            return({...state, completed: action.payload});
        case(TODO_CLEAR):
            return({...state, initialState: ""});
    }
    return reducer;
}


const initialState = [
    {
        item: 'Fill out Happy Planner',
        completed: false,
        id: 1
    },
    {
        item: 'Go to bed early',
        completed: false,
        id: 2    
    },
    {
        item: 'Bake Cookies',
        completed: false,
        id: 3
    },
    {
        item: 'Start Social Media',
        completed: false,
        id: 4
    }
]



export default { reducer, initialState }

//Add new Todo
//Toggle Todo to show completed
//Clear Todos