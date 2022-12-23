import React from 'react';

function NavHeader({ blogName }: { blogName: string }) {
  return (
    <div className='flex items-center flex-shrink-0 text-white mr-6'>
      <span className='font-semibold text-xl tracking-tight'>{blogName}</span>
    </div>
  );
}

export default NavHeader;
