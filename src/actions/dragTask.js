import { DRAG_TASK } from './../constants/actionTypes';

export default (data) => {
    return {
        type: DRAG_TASK,
        data: data
    }
}