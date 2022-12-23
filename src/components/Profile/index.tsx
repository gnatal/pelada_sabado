import React from 'react';
import PersonalInfo from './PersonalInfo';
import ProfileCard from './ProfileCard';

export default function Profile() {
  return (
    <div className='h-full'>
      <div className='border-b-2 block md:flex'>

        <ProfileCard />
        <PersonalInfo />
      </div>
    </div>
  );
}
