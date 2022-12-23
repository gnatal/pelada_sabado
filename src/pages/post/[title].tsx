import React from 'react';
import { useRouter } from 'next/router';

function SinglePostPage() {
  const router = useRouter();
  const { title } = router.query;

  return (
    <div>
      <p>
        {title}
      </p>
    </div>
  );
}

export default SinglePostPage;
