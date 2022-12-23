import { useFirebaseAuth } from 'hooks/authHook';
import { useRouter } from 'next/router';
import type { ReactElement } from 'react';

export default function PrivateRoute({ children }: { children: ReactElement }) {
  const { user, isLoading } = useFirebaseAuth();
  const router = useRouter();

  if (isLoading) {
    return (<div>
      <p>loading</p>
    </div>)
  }

  if (!user) {
    router.replace('/login')
    return (<></>)
  }

  return (
    <div>
      {children}
    </div>
  )
}