import { useFirebaseAuth } from 'hooks/authHook';
import { useRouter } from 'next/router';
import type { ReactElement } from 'react';

export default function PrivateRoute({ children, allowedRoles = ['public'] }: { children: ReactElement, allowedRoles?: string[] }) {
  const { user, isLoading } = useFirebaseAuth();
  const router = useRouter();

  if (isLoading) {
    return (<div>
      <p>loading</p>
    </div>)
  }

  if (allowedRoles.filter((role) => role === user?.role).length === 0) {
    router.replace('/login')
    return (<></>)

  }

  return (
    <>
      {children}
    </>
  )
}