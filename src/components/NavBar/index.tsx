import React, { useState } from 'react';
import SideMenu from '../SideMenu';
import NavBarMobile from './mobile';
import NavHeader from './Navheader';
import NavBarWeb from './web';

function NavBar({ blogName }: { blogName: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className='flex items-center justify-between flex-wrap bg-teal-500 p-6'>
        <NavHeader blogName={blogName} />
        <NavBarWeb />
        <NavBarMobile isOpen={isOpen} setIsOpen={setIsOpen} />
      </nav>
      <SideMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
export default NavBar;
