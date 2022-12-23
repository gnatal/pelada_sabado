import PrivateRoute from 'components/PrivateRoute';
import Profile from 'components/Profile';
import React from 'react';

function ProfilePage() {
  return <PrivateRoute> <Profile /></PrivateRoute>;
}

export default ProfilePage;
