import React from 'react';

export default function ProfileCard() {
  return (
    <div className='w-full md:w-2/5 p-4 sm:p-6 lg:p-8 bg-white shadow-md'>
      <div data-testid='profile-image' className='w-4/5 p-8 mx-2 flex justify-center'>
        <img id='showImage' className='w-full items-center border' src='/images/avatar.jpg' alt='Avatar' />
      </div>
    </div>
  );
}
