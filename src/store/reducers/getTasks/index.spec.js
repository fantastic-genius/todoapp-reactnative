import getTasksReducer from './index';
import * as types from '../../action-types';
import { getTasks as initialState } from '../../initialState';

describe('get tasks reducer', () => {
  it('should return the initial state', () => {
    expect(getTasksReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle GET_TASKS_START', () => {
    expect(getTasksReducer(
      initialState, {
        type: types.GET_TASKS_START
      }
    )).toEqual({
      ...initialState,
      isLoading: true
    });
  });

  it('should handle GET_TASKS_SUCCESS', () => {
    const payload = {
      "tasks": [
        {"id":"1", "name":"Task 1 ", "due_date":"9:00AM 12-1-2019", "status":"done"},
        {"id":"2", "name":"Task 2 ", "due_date":"11:00AM 12-1-2019", "status":"in-progress"},
        {"id":"3", "name":"Task 3 ", "due_date":"22:00AM 12-1-2019", "status":"pending"}
      ],
      "all_tasks_completed": false,
      "username":"User"
    }
    expect(getTasksReducer(
      initialState, {
        type: types.GET_TASKS_SUCCESS,
        payload
      }
    )).toEqual({
      ...initialState,
      isLoading: false,
      isSuccessful: true,
      data: payload
    });
  });

  it('should handle GET_TASKS_FAIL', () => {
    const payload = "Something went wrong"
    expect(getTasksReducer(
      initialState, {
        type: types.GET_TASKS_FAIL,
        payload
      }
    )).toEqual({
      ...initialState,
      isLoading: false,
      error: payload
    });
  });

  it('should handle GET_TASKS_CLEANUP', () => {
    expect(getTasksReducer(
      initialState, {
        type: types.GET_TASKS_CLEANUP
      }
    )).toEqual({
      ...initialState,
      isLoading: false,
      isSuccessful: false,
      error: null
    });
  });
});