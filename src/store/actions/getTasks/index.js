import * as types from '../../action-types';
import Axios from 'axios';

export const getTasksStart = () => ({
  type: types.GET_TASKS_START
});

export const getTasksSuccess = payload => ({
  type: types.GET_TASKS_SUCCESS,
  payload
});

export const getTasksFail = payload => ({
  type: types.GET_TASKS_FAIL,
  payload
});

export const getTasksCleanup = () => ({
  type: types.GET_TASKS_CLEANUP
});

export const getTasks = () => async dispatch => {
  try {
    dispatch(getTasksStart());
    const { data } = await Axios({
      method: 'GET',
      url: 'http://www.mocky.io/v2/5dfb8eab2f000056c4ffa05c',
      json: true
    })
    dispatch(getTasksSuccess(data))
  } catch (err) {
    dispatch(getTasksFail(err))
  }
}
