import React from 'react';
import MenuItem from './MenuItem';
import links from './links';

function SideMenu({ isOpen }: { isOpen: boolean }) {
  return (
    <div
      className={`${
        isOpen ? 'block' : 'hidden'
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
      <MenuItem
        linkURL={links.login.linkURL}
        linkLabel={links.login.linkLabel}
      />
    </div>
  );
}

export default SideMenu;
