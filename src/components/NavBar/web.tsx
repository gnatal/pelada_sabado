import { logout } from 'firebase_support/auth';
import { useFirebaseAuth } from 'hooks/authHook';
import React from 'react';
import NavBarWebLink from '../NavBarWebLink';
import links from '../SideMenu/links';

function NavBarWeb() {

  const { user, isLoading } = useFirebaseAuth();

  function logoutUser() {
    logout()
  }

  return (
    <div className='w-full hidden flex-grow sm:flex sm:items-center sm:w-auto sm:block'>
      <div className='text-sm sm:flex-grow'>
        <NavBarWebLink
          link={links.home.linkURL}
          placeholder={links.home.linkLabel}
        />
        <NavBarWebLink
          link={links.about.linkURL}
          placeholder={links.about.linkLabel}
        />
        <NavBarWebLink
          link={links.posts.linkURL}
          placeholder={links.posts.linkLabel}
        />
      </div>
      <div>
        {user ? <button className='inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 md:mt-0' onClick={logout}>logout  </button> : <a
          href={links.login.linkURL}
          className='inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 md:mt-0'
        >
          {links.login.linkLabel}
        </a>}
      </div>
    </div>
  );
}

export default NavBarWeb;
