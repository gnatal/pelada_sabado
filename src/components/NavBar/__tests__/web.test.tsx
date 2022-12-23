import React from 'react';
import renderer from 'react-test-renderer';
import NavBarWeb from '../web';

test('It should write an span in the nav header', () => {
  const component = renderer.create(<NavBarWeb />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
