const reducer = (state, action) => {
    switch(action.type) {
        case(TODO_ADD):
            return({...state, title: action.payload});
        case(TODO_TOGGLE):
            return({...state, completed: action.payload});
        case(TODO_CLEAR):
            return({...state, initialState: ""});
    }
    return;
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