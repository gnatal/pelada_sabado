import PeladaInscricao from 'components/PeladaInscricao';
import PrivateRoute from 'components/PrivateRoute';
import React from 'react';

function PeladaInscricaoPage() {
  return (
    <PrivateRoute allowedRoles={['public', 'admin']}>
      <PeladaInscricao />
    </PrivateRoute>
  );
}

export default PeladaInscricaoPage;
