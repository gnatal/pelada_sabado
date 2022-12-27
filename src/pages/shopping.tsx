import PrivateRoute from 'components/PrivateRoute';
import Profile from 'components/Profile';
import Shopping from 'components/Shopping';
import React from 'react';

function CreditPage() {
  return (
    <>
      <PrivateRoute allowedRoles={['admin', 'public']}>
        <Shopping />
      </PrivateRoute>
    </>
  );
}

export default CreditPage;
