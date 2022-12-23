import React from 'react';
import renderer from 'react-test-renderer';
import NavHeader from '../Navheader';

test('It should write an span in the nav header', () => {
  const component = renderer.create(<NavHeader blogName='Natal ideias' />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
