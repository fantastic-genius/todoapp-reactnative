import {
  getTasksStart,
  getTasksSuccess,
  getTasksFail,
  getTasksCleanup
} from './index';
import * as types from '../../action-types';

describe('GET TASK ACTIONS', () => {
  it('should return GET_TASKS_START', () => {
    expect(getTasksStart()).toEqual({
      type: types.GET_TASKS_START
    });
  });

  it('should return GET_TASKS_SUCCESS', () => {
    const payload = {
      "tasks": [
        {"id":"1", "name":"Task 1 ", "due_date":"9:00AM 12-1-2019", "status":"done"},
        {"id":"2", "name":"Task 2 ", "due_date":"11:00AM 12-1-2019", "status":"in-progress"},
        {"id":"3", "name":"Task 3 ", "due_date":"22:00AM 12-1-2019", "status":"pending"}
      ],
      "all_tasks_completed": false,
      "username":"User"
    }
    expect(getTasksSuccess(payload)).toEqual({
      type: types.GET_TASKS_SUCCESS,
      payload
    });
  });

  it('should return GET_TASKS_FAIL', () => {
    const payload = "Something went wrong"
    expect(getTasksFail(payload)).toEqual({
      type: types.GET_TASKS_FAIL,
      payload
    });
  });

  it('should return GET_TASKS_CLEANUP', () => {
    expect(getTasksCleanup()).toEqual({
      type: types.GET_TASKS_CLEANUP
    });
  });
});