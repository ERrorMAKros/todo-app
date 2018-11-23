import { EDIT_TASK } from './../constants/actionTypes';

export default (data) => {
    return {
        type: EDIT_TASK,
        data: data.value,
        timestamp: data.timestamp
    }
}