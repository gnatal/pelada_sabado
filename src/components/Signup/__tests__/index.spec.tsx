import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import Signup from '..';

describe('Sign up page', () => {
  const method = 'submit';

  test('It should have a link to sign up page', () => {
    const { container } = render(<Signup />);
    const link = container.getElementsByTagName('button')[0];
    expect(link.getAttribute('type')).toBe(method);
  });
});

describe('Testing signup form', () => {
  test('It should fail in the confirm password empty', async () => {
    const { getByTestId } = render(<Signup />);
    const email = getByTestId('email');
    const password = getByTestId('password');
    const confirmPassword = getByTestId('confirm_password');
    const submit = getByTestId('submit');

    fireEvent.input(email, {
      target: {
        value: 'gui@gmail.com',
      },
    });

    fireEvent.input(password, {
      target: {
        value: 'masterpassword',
      },
    });

    fireEvent.input(confirmPassword, {
      target: {
        value: '',
      },
    });

    fireEvent.click(submit);

    await waitFor(() => {
      expect(getByTestId('confirm_password-error')).toBeInTheDocument();
    });
  });

  test('It should fail in the confirm password not matching', async () => {
    const { getByTestId } = render(<Signup />);
    const email = getByTestId('email');
    const password = getByTestId('password');
    const confirmPassword = getByTestId('confirm_password');
    const submit = getByTestId('submit');

    fireEvent.input(email, {
      target: {
        value: 'gui@gmail.com',
      },
    });

    fireEvent.input(password, {
      target: {
        value: 'masterpassword',
      },
    });

    fireEvent.input(confirmPassword, {
      target: {
        value: 'Masterpassword ',
      },
    });

    fireEvent.click(submit);

    await waitFor(() => {
      expect(getByTestId('confirm_password-error')).toBeInTheDocument();
    });
  });
});
