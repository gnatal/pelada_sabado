import React from 'react';

interface ICheckbox {
  label: string;
  elementId: string;
}

export default function Checkbox({ label, elementId }: ICheckbox) {
  return (
    <div className='flex items-center'>
      <label
        htmlFor={elementId}
        className='ml-2 mr-2 block text-sm text-gray-900'
      >
        {label}
      </label>
      <input
        id={elementId}
        name='remember-me'
        type='checkbox'
        className='h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded'
      />
    </div>
  );
}
