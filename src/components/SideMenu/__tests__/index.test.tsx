import React from 'react';
import renderer from 'react-test-renderer';
import { cleanup, render } from '@testing-library/react';
import SideMenu from '..';

afterEach(cleanup);
test('It should show open  menu', () => {
  const component = renderer.create(<SideMenu isOpen />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('It should show close the menu', () => {
  const component = renderer.create(<SideMenu isOpen={false} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('It should open and close menu', () => {
  const { container } = render(<SideMenu isOpen={false} />);
  expect(container.getElementsByClassName('hidden')).toBeTruthy();
});

test('It should open and close menu', () => {
  const { container } = render(<SideMenu isOpen />);
  expect(container.getElementsByClassName('block')).toBeTruthy();
});
