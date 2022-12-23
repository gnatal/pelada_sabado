import React from 'react';
import { render } from '@testing-library/react';

import RecentPosts from '..';

describe('Testing the blogs page UI', () => {
  test('It should have a post header', () => {
    const { getByTestId } = render(<RecentPosts />);
    const linkToPost = getByTestId('title');
    expect(linkToPost.innerHTML).toBe('Build Your New Idea with Laravel Freamwork.');
  });
});
