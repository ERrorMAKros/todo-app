import { DONE_TASK } from './../constants/actionTypes';

export default (data) => {
    return {
        type: DONE_TASK,
        done: data.done,
        timestamp: data.timestamp
    }
}