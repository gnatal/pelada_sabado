import React from 'react';
import { render } from '@testing-library/react';

import Posts from '..';

describe('Testing the blogs page UI', () => {
  test('It should have a post header', () => {
    const { getByTestId } = render(<Posts />);
    const header = getByTestId('post-header');
    expect(header.innerHTML).toBe('Post');
  });
});
