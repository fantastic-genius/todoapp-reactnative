import store from './index';

describe('Store', () => {
  it('Test Store', () => {
    expect(store).toMatchSnapshot();
  });
});