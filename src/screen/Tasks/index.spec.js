import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux'
import Tasks from './index';
import configureStore from 'redux-mock-store';

const middlewares = []
const mockStore = configureStore(middlewares)
const initialState = {
  getTasks: {
    isLoading: false,
    isSuccessful: true,
    data: {
      "tasks": [
        {"id":"1", "name":"Task 1 ", "due_date":"9:00AM 12-1-2019", "status":"done"},
        {"id":"2", "name":"Task 2 ", "due_date":"11:00AM 12-1-2019", "status":"in-progress"},
        {"id":"3", "name":"Task 3 ", "due_date":"22:00AM 12-1-2019", "status":"pending"}
      ],
      "all_tasks_completed": false,
      "username":"User"
    },
    error: null
  },
};

const store = mockStore(initialState)

describe('<Tasks />', () => {
  it('Has three children', async () => {
    const component = renderer.create(
      <Provider store={store}>
        <Tasks />
      </Provider>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});

