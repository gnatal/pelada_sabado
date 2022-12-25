import PrivateRoute from 'components/PrivateRoute';
import React from 'react';

function PeladaPage() {
  return (
    <PrivateRoute allowedRoles={['public', 'admin']}>
      <div>
        <p> Uma mulata macumbeira</p>
      </div>

    </PrivateRoute>
  );
}

export default PeladaPage;
