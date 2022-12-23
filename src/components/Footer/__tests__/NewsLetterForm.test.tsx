import React from 'react';
import { cleanup, render } from '@testing-library/react';
import NewsLetterForm from '../NewsLetterForm';

afterAll(cleanup);

test('News letter form should contain only 1 input', () => {
  const { container } = render(<NewsLetterForm />);
  expect(container.getElementsByTagName('input').length).toBe(1);
});
