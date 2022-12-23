import React from 'react';
import { cleanup, render } from '@testing-library/react';
import CopyRight from '../CopyRight';

afterAll(cleanup);

test('Test of copy right points to the cp link', () => {
  const { container } = render(<CopyRight />);
  expect(container.getElementsByTagName('a').length).toBe(1);
});
