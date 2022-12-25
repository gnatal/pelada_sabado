import CreatePelada from 'components/CreatePelada';
import PrivateRoute from 'components/PrivateRoute';
import React from 'react';

function CreatePeladaPage() {
  return (
    <PrivateRoute allowedRoles={['admin']}>
      <CreatePelada />
    </PrivateRoute>
  );
}

export default CreatePeladaPage;
