import React from 'react';
import { render } from '@testing-library/react';
import Banner from '..';

test('It should have only 1 div being the background ', () => {
  const { container } = render(<Banner> Um passito para tras</Banner>);
  const divs = container.getElementsByTagName('div');
  expect(divs.length).toBe(1);
});
