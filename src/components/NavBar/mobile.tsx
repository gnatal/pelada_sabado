import React from 'react';

function NavBarMobile({
  setIsOpen,
  isOpen,
}: {
  setIsOpen: (arg: boolean) => void;
  isOpen: boolean;
}) {
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='block sm:hidden'>
      <button
        type='button'
        onClick={toggleOpen}
        className='flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white'
      >
        <svg
          className='fill-current h-3 w-3'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
        </svg>
      </button>
    </div>
  );
}

export default NavBarMobile;
