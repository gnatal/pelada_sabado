import React, { useEffect, useState } from 'react';

interface ITextInput {
  elementId: string;
  label: string;
  // eslint-disable-next-line react/require-default-props
  roundTop?: boolean;
  // eslint-disable-next-line react/require-default-props
  roundBottom?: boolean;
  register: any;
  errors: any;
  name: string;
}

// Remeber to find out a solution to deal with this bunch of classes
export default function TextInput({
  elementId,
  label,
  register,
  name,
  roundBottom = false,
  roundTop = false,
  errors,
  ...rest
}: ITextInput) {
  const [rounds, setRounds] = useState('');
  useEffect(() => {
    let addedClasses = '';
    if (roundTop) {
      addedClasses = `${addedClasses} rounded-t-md`;
    }
    if (roundBottom) {
      addedClasses = `${addedClasses} rounded-b-md`;
    }
    setRounds(addedClasses);
  }, []);
  return (
    <div>
      <label htmlFor={elementId} className='sr-only'>
        {label}
      </label>
      <input
        {...register(name)}
        id={elementId}
        data-testid={elementId}
        className={`appearance-none rounded-none relative ${rounds} block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
        {...rest}
      />
      {errors[name] && (
        <span
          data-testid={`${elementId}-error`}
          className='text-red-500 text-sm italic'
        >
          {`Error: ${errors[name].message}`}
        </span>
      )}
    </div>
  );
}
