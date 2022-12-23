import React from 'react';
import renderer from 'react-test-renderer';
import MenuItem from '../MenuItem';

test('It should show a link', () => {
  const component = renderer.create(<MenuItem linkLabel='home' linkURL='/' />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
