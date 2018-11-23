import { ADD_TODO } from './../constants/actionTypes';

export default (data) => {
    return {
        type: ADD_TODO,
        data: data
    }
}