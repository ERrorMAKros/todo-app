
import {
    ADD_TASK,
    DELETE_TASK,
    EDIT_TASK,
    DRAG_TASK,
    DONE_TASK
} from './../constants/actionTypes';


const initialState = {
    todos: []
};
export const rootReducer = (state = initialState, action) => {

    if (action.type === ADD_TASK) {
        return {
            ...state,
            todos: state.todos.concat(action.data)
        }
    }
    if (action.type === DELETE_TASK) {
        return {
            ...state,
            todos: state.todos.filter(item => item.timestamp !== action.timestamp)  
        }
    }
    if (action.type === DRAG_TASK) {
        return {
            ...state,
            todos: action.data
        }
    }
    if (action.type === DONE_TASK) {
        return {
            ...state,
            todos: state.todos.map(item => {
                if (item.timestamp === action.timestamp && (action.done)) {
                    item.taskDone = true
                }
                return item;
            })
        }
    }
    if (action.type === EDIT_TASK) {
        return {
            ...state,
            todos: state.todos.map(item => {
                if (item.timestamp === action.timestamp) {
                    item.value = action.data
                }
                return item;
            })
            
        }
    }
    return state;
}

export default rootReducer;