import React from 'react';
import renderer from 'react-test-renderer';
import NavBarWebLink from '..';
import mocks from '../mocks';

// describe('Testing the nav link in web devices (md or larger)', () => {

// });

test('It should render a link', () => {
  const component = renderer.create(
    <NavBarWebLink link={mocks.link1} placeholder={mocks.placeholder1} />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
