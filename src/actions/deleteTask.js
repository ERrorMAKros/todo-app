import { DELETE_TASK } from './../constants/actionTypes';

export default (data) => {
    return {
        type: DELETE_TASK,
        timestamp: data
    }
}