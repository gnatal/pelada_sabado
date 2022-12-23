import React from 'react';
import { fireEvent, render, findByTestId } from '@testing-library/react';

import ForgotPassword from '..';

describe('Testing the forgot password page', () => {
  test('1 + 1 = 2', () => {
    expect(1 + 1).toBe(2);
  });

  test('Testing forgot password', async () => {
    const { container, getByTestId } = render(<ForgotPassword />);
    const email = getByTestId('email');
    const button = getByTestId('submit');
    fireEvent.input(email, {
      target: {
        value: 'asdasd@1',
      },
    });
    fireEvent.click(button);
    const emailError = await findByTestId(container, 'email-error'); // this line here awaits the text to appear
    expect(emailError.innerHTML).toBe(
      'Error: Emails must be xxxx@domain.xxxx',
    );
  });
});
