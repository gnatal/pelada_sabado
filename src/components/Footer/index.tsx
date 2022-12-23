import React from 'react';
import GithubIcon from '../SocialMidiaIcons/Github';
import InstagramIcon from '../SocialMidiaIcons/Instagram';
import LinkiedInIcon from '../SocialMidiaIcons/LinkedIn';
import TwitterIcon from '../SocialMidiaIcons/Twitter';
import FacebookIcon from '../SocialMidiaIcons/Facebook';
import GoogleIcon from '../SocialMidiaIcons/GoogleIcon';
import NewsLetterForm from './NewsLetterForm';
import Copyright from './CopyRight';
import Disclaimer from './Disclaimer';
import links from '../SideMenu/links';

export default function Footer() {
  return (
    <footer className='text-center bg-teal-500 text-white'>
      <div className='container px-6 pt-6'>
        <div className='flex justify-center mb-6'>
          <FacebookIcon />
          <TwitterIcon />
          <GoogleIcon />
          <InstagramIcon />
          <LinkiedInIcon />
          <GithubIcon />
        </div>
        <NewsLetterForm />
        <Disclaimer />

        <div className='grid sm:grid-cols-4'>
          <a className='font-bold' href={links.home.linkURL}>
            {links.home.linkLabel}
          </a>
          <a className='font-bold' href={links.about.linkURL}>
            {links.about.linkLabel}
          </a>
          <a className='font-bold' href={links.posts.linkURL}>
            {links.posts.linkLabel}
          </a>
          <a className='font-bold' href={links.login.linkURL}>
            {links.login.linkLabel}
          </a>
        </div>
      </div>
      <Copyright />
    </footer>
  );
}
