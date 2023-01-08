import ListaPelada from 'components/ListaPelada';
import PrivateRoute from 'components/PrivateRoute';
import React from 'react';

function ListaPeladaPage() {
  return (
    <PrivateRoute allowedRoles={['admin', 'public']}>
      <ListaPelada />
    </PrivateRoute>
  );
}

export default ListaPeladaPage;
