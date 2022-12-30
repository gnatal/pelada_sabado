import { useRouter } from 'next/router';
import React from 'react';

function NavHeader({ blogName }: { blogName: string }) {

  const router = useRouter();

  function goToHome() {
    router.replace('/')
  }

  return (
    <div onClick={goToHome} className='flex items-center flex-shrink-0 text-white mr-6 cursor-pointer'>
      <span className='font-bold text-xl tracking-tight'>{blogName}</span>
    </div>
  );
}

export default NavHeader;
