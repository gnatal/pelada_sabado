import React from 'react';
import { cleanup, render } from '@testing-library/react';
import SecondSection from '../SecondSection';

describe('Testing the first section', () => {
  afterAll(cleanup);
  test('It should render a the cards section', () => {
    const { container } = render(<SecondSection />);
    expect(
      container.getElementsByClassName(
        'grid grid-cols-1 sm:grid-cols-3 bg-gray-100',
      ).length,
    ).toBe(1);
  });
});
