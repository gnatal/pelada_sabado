import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import TextInput from '..';

const passwordInputs = {
  name: 'value1',
  type: 'text',
  placeholder: 'text',
};

describe('Testing input ', () => {
  test('It should render a input with type text', () => {
    const { container, getByTestId } = render(
      <TextInput
        label='value1'
        elementId='value1'
        register={() => {
          console.log('none');
        }}
        {...passwordInputs}
        errors={{ value1: 'nothing' }}
        roundBottom
        validation={{}}
        roundTop={false}
      />,
    );
    fireEvent.input(getByTestId('value1'), {
      target: {
        value: 'name',
      },
    });
    const input = container.getElementsByTagName('input')[0];
    expect(input.value).toBe('name');
  });
});
