import React from 'react';
import { cleanup, render } from '@testing-library/react';
import Footer from '..';

afterAll(cleanup);

test('Footer should container only one footer tag', () => {
  const { container } = render(<Footer />);
  expect(container.getElementsByTagName('footer').length).toBe(1);
});
