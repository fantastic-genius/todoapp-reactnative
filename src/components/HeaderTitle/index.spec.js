import React from 'react';
import renderer from 'react-test-renderer';

import HeaderTitle from './index';

describe('<HeaderTitle />', () => {
  it('Has one child', () => {
    const component = renderer.create(<HeaderTitle />).toJSON();
    expect(component.children.length).toBe(1);
  });

  it('renders correctly', async () => {
    const component = renderer.create(<HeaderTitle />).toJSON();
    expect(component).toMatchSnapshot();
  });
});

