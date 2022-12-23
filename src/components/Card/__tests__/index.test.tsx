import React from 'react';
import { cleanup, render } from '@testing-library/react';
import Card from '..';
import mocks from '../mocks';

afterAll(cleanup);
test('It should print a card cat', () => {
  const { container } = render(<Card {...mocks.cardMock} />);
  expect(container.getElementsByTagName('img').length).toBe(1);
});

test('It should have no span', () => {
  const { container } = render(<Card {...mocks.cardMock} />);
  expect(container.getElementsByTagName('span').length).toBe(0);
});
