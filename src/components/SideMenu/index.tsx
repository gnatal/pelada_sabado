import React from 'react';
import MenuItem from './MenuItem';
import links from './links';
import { useFirebaseAuth } from 'hooks/authHook';
import { logout } from 'firebase_support/auth';

function SideMenu({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: Function }) {

  const { user, isLoading } = useFirebaseAuth();

  function signout() {
    setIsOpen(false)
    logout()
  }

  return (
    <div
      className={`${isOpen ? 'block' : 'hidden'
        } sm:hidden bg-teal-500 h-screen w-screen`}
    >
      <MenuItem linkURL={links.home.linkURL} linkLabel={links.home.linkLabel} />
      <MenuItem
        linkURL={links.about.linkURL}
        linkLabel={links.about.linkLabel}
      />
      <MenuItem
        linkURL={links.posts.linkURL}
        linkLabel={links.posts.linkLabel}
      />
      {user ?

        <div className='w-screen pl-6 pb-2 pt-2 border'>
          <button
            onClick={signout}
            className='block font-bold text-md text-teal-100 hover:text-white'
          >
            logout
          </button>
        </div>
        : <MenuItem
          linkURL={links.login.linkURL}
          linkLabel={links.login.linkLabel}
        />
      }
    </div>
  );
}

export default SideMenu;
