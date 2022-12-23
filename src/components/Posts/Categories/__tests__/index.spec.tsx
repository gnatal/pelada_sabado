import React from 'react';
import { render } from '@testing-library/react';

import Categories from '..';

describe('Testing the blogs page UI', () => {
  test('It should have a post header', () => {
    const { getByTestId } = render(<Categories />);
    const listUl = getByTestId('list-controller');
    expect(listUl.childNodes.length).toBe(6);
  });
});
