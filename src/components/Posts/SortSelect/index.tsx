import React from 'react';

export default function SortSelect() {
  return (
    <div>
      <select className='block bg-gray-300 text-gray-700 py-2 px-2 rounded-lg focus:outline-none md:py-3'>
        <option data-testid='latest'>Latest</option>
        <option>Last Week</option>
      </select>
    </div>
  );
}
