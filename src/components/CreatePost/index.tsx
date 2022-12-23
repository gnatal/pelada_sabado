import React from 'react';

export default function CreatePost() {
  return (
    <div className='w-screen h-screen'>
      <div className='my-12 mx-auto h-4/5 w-4/5 grid grid-cols-1 grid-rows-2 '>
        <div>
          <div>
            <label htmlFor='image'>image</label>
            <input type='file' id='image' name='image' />
          </div>
          <div>
            <input type='text' name='title' />
          </div>
        </div>
        <p>
          some shite
        </p>
      </div>

    </div>
  );
}
