import React from 'react';
import { cleanup, render } from '@testing-library/react';
import FirstSection from '../FirstSection';

describe('Testing the first section', () => {
  afterAll(cleanup);
  test('It should render a blog section', () => {
    const { container } = render(<FirstSection />);
    expect(container.getElementsByTagName('section').length).toBe(1);
  });
});
