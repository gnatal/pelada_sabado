import React from 'react';
import { render } from '@testing-library/react';

import SortSelect from '..';

describe('Testing the blogs page UI', () => {
  test('It should have a post header', () => {
    const { getByTestId } = render(<SortSelect />);
    const dropdownOption = getByTestId('latest');
    expect(dropdownOption.innerHTML).toBe('Latest');
  });
});
