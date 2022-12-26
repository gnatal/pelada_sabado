import PrivateRoute from 'components/PrivateRoute';
import Profile from 'components/Profile';
import React from 'react';

function CreditPage() {
  return (
    <>
      <PrivateRoute allowedRoles={['admin', 'public']}>
        <div>
          <p>
            My money
          </p>
        </div>
      </PrivateRoute>
    </>
  );
}

export default CreditPage;
