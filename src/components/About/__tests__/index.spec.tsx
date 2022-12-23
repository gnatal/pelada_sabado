import React from 'react';
import { render } from '@testing-library/react';
import About from '..';

test('It should have only 1 h1 being the background ', () => {
  const { container } = render(<About />);
  const divs = container.getElementsByTagName('h1');
  expect(divs.length).toBe(3);
});
