import PrivateRoute from 'components/PrivateRoute';
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
