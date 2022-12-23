import React from 'react';
import { render } from '@testing-library/react';
import SignupHeader from '..';

describe('Testing login header', () => {
  const imgSrc = 'https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg';

  test('It should have the logo on sign up page', () => {
    const { container } = render(<SignupHeader />);
    const link = container.getElementsByTagName('img')[0];
    expect(link.getAttribute('src')).toBe(imgSrc);
  });
});
