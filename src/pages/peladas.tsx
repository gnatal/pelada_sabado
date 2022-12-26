import Peladas from 'components/Peladas';
import PrivateRoute from 'components/PrivateRoute';
import React from 'react';

function PeladaPage() {
  return (
    <PrivateRoute allowedRoles={['public', 'admin']}>
      <Peladas />
    </PrivateRoute>
  );
}

export default PeladaPage;
