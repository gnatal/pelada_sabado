import React from 'react';
import { render } from '@testing-library/react';

import Sidebar from '..';

describe('Testing the blogs page UI', () => {
  test('It should have a post header', () => {
    const { getByTestId } = render(<Sidebar />);
    const linkToPost = getByTestId('link');
    expect(linkToPost.getAttribute('href')).toBe('!#');
  });
});
