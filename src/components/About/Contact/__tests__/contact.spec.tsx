import React from 'react';
import { render } from '@testing-library/react';
import Contact from '..';

test('It should have only 1 h1 being the background ', () => {
  const { container } = render(<Contact />);
  const divs = container.getElementsByTagName('ul');
  expect(divs.length).toBe(1);
});
