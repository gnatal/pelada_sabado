import React from 'react';

export default function ProfileCard() {
  return (
    <div className='w-full md:w-2/5 p-4 sm:p-6 lg:p-8 bg-white shadow-md'>
      <div data-testid='profile-image' className='w-4/5 p-8 mx-2 flex justify-center'>
        <img id='showImage' className='w-full items-center border' src='https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200' alt='' />
      </div>
    </div>
  );
}
