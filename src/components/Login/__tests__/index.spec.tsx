import React from 'react';
import { findByTestId, fireEvent, render } from '@testing-library/react';
import Login from '..';

describe('Testing login header', () => {
  const singupUrl = '/signup';

  test('It should have a link to sign up page', () => {
    const { container } = render(<Login />);
    const link = container.getElementsByTagName('a')[0];
    expect(link.getAttribute('href')).toBe(singupUrl);
  });
});

describe('Testing login form', () => {
  test('It should fail due to email empty', async () => {
    const { container, getByTestId } = render(<Login />);
    const input1 = getByTestId('email');
    const input2 = getByTestId('password');
    const submit = getByTestId('submit');

    fireEvent.input(input1, {
      target: {
        value: '',
      },
    });

    fireEvent.input(input2, {
      target: {
        value: 'asdasdasd',
      },
    });

    fireEvent.click(submit);

    const emailError = await findByTestId(container, 'email-error');
    expect(emailError.innerHTML).toBe('Error: Emails must be xxxx@domain.xxxx');
  });

  test('It should fail due to password empty', async () => {
    const { container, getByTestId } = render(<Login />);
    const input1 = getByTestId('email');
    const input2 = getByTestId('password');
    const submit = getByTestId('submit');

    fireEvent.input(input1, {
      target: {
        value: 'someemail@gmail.com',
      },
    });

    fireEvent.input(input2, {
      target: {
        value: '',
      },
    });

    fireEvent.click(submit);
    const passwordError = await findByTestId(container, 'password-error');
    expect(passwordError.innerHTML).toBe('Error: Password is required');
  });

  test('It should fail due to password not big enough', async () => {
    const { container, getByTestId } = render(<Login />);
    const input1 = getByTestId('email');
    const input2 = getByTestId('password');
    const submit = getByTestId('submit');

    fireEvent.input(input1, {
      target: {
        value: 'someemail@gmail.com',
      },
    });

    fireEvent.input(input2, {
      target: {
        value: 'asd',
      },
    });

    fireEvent.click(submit);
    const passwordError = await findByTestId(container, 'password-error'); // this line here awaits the text to appear
    expect(passwordError.innerHTML).toBe(
      'Error: Password must be at least 8 char long',
    );
  });
});
