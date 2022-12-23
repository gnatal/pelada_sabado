import React from 'react';
import { render } from '@testing-library/react';
import PrivacyPolicy from '..';

describe('Testing login header', () => {
  const url = '!#';

  test('It should have a link to sign up page', () => {
    const { container } = render(<PrivacyPolicy />);
    const link = container.getElementsByTagName('a')[0];
    expect(link.getAttribute('href')).toBe(url);
  });
});
