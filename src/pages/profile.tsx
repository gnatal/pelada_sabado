import PrivateRoute from 'components/PrivateRoute';
import Profile from 'components/Profile';
import React from 'react';

function ProfilePage() {
  return (
    <>
      <PrivateRoute allowedRoles={['admin', 'public']}>
        <Profile />
      </PrivateRoute>
    </>
  );
}

export default ProfilePage;
