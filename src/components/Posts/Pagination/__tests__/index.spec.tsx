import React from 'react';
import { render } from '@testing-library/react';

import Pagination from '..';

describe('Testing the blogs page UI', () => {
  test('It should have a post header', () => {
    const { getByTestId } = render(<Pagination />);
    const linkToNext = getByTestId('next');
    expect(linkToNext.innerHTML).toBe('Next');
  });
});
