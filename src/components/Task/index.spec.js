import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux'
import Task from './index';

describe('<Task />', () => {
  const task = {
    id: '1',
    name: 'Task 1',
    due_date: '9:00AM 12-1-2019', 
    status: 'done'
  }
  it('Has four children', async () => {
    const component = renderer.create(<Task task={task} />).toJSON();
    expect(component.children.length).toBe(4);
  });
  
  it('renders correctly', async () => {
    const component = renderer.create(<Task task={task} />).toJSON();
    expect(component).toMatchSnapshot();
  });

});

