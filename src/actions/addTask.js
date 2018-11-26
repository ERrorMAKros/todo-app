import { ADD_TASK } from './../constants/actionTypes';

export default (data) => {
    return {
        type: ADD_TASK,
        data: data
    }
}