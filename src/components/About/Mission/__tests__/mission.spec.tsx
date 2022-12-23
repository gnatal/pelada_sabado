import React from 'react';
import { render } from '@testing-library/react';
import Mission from '..';

test('It should have only 1 h1 being the background ', () => {
  const { container } = render(<Mission />);
  const divs = container.getElementsByTagName('p');
  expect(divs.length).toBe(1);
});
