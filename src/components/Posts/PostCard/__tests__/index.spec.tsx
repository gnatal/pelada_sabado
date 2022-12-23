import React from 'react';
import { render } from '@testing-library/react';

import PostCard from '..';

describe('Testing the blogs page UI', () => {
  test('It should have a post header', () => {
    const { getByTestId } = render(<PostCard date={new Date()} title='First post' content='lorem ipsum' author='Vanessa' mainTag='chatisse' link='1321' />);
    const linkToPost = getByTestId('title');
    expect(linkToPost.innerHTML).toBe('First post');
  });
});
