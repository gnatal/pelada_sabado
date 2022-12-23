import React from 'react';
import { cleanup, render } from '@testing-library/react';
import Disclaimer from '../Disclaimer';

afterAll(cleanup);

test('Disclaimer should be a paragraph', () => {
  const { container } = render(<Disclaimer />);
  expect(container.getElementsByTagName('p').length).toBe(1);
});
