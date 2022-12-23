import React from 'react';
import { render } from '@testing-library/react';
import LoginHeader from '..';

describe('Testing login header', () => {
  const singupUrl = '/signup';

  test('It should have a link to sign up page', () => {
    const { container } = render(<LoginHeader />);
    const link = container.getElementsByTagName('a')[0];
    expect(link.getAttribute('href')).toBe(singupUrl);
  });
});
