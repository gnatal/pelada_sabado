import { getUserByUUID } from 'firebase_support/auth';
import React from 'react';
import PersonalInfo from './PersonalInfo';
import ProfileCard from './ProfileCard';

export default function Profile() {

  function searchUser() {
    getUserByUUID('rV0giwiNYyUNdswKtE5mriIxnoT2')
  }

  return (
    <div className='h-full'>
      <div className='border-b-2 block md:flex' onClick={searchUser}>

        <ProfileCard />
        <PersonalInfo />
      </div>
    </div>
  );
}
