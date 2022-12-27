import Checkout from 'components/Checkout';
import PrivateRoute from 'components/PrivateRoute';
import React from 'react';

function CreditPage() {
  return (
    <>
      <PrivateRoute allowedRoles={['admin', 'public']}>
        <Checkout />
      </PrivateRoute>
    </>
  );
}

export default CreditPage;
