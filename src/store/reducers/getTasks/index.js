import * as types from '../../action-types';
import {getTasks as initialState } from '../../initialState';

const getTasks = (state=initialState, action) => {
  switch (action.type) {
    case types.GET_TASKS_START:
      return {
        ...state,
        isLoading: true
      };
    case types.GET_TASKS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccessful: true,
        data: action.payload
      };
    case types.GET_TASKS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case types.GET_TASKS_CLEANUP:
      return {
        ...state,
        isLoading: false,
        isSuccessful: false,
        error: null
      };
    default:
      return state;
  }
}

export default getTasks;
