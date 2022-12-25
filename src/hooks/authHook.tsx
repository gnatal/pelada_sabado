import { useEffect, useState } from 'react'
import { auth } from 'utils/firebaseConfig'
import { onAuthStateChanged } from 'firebase/auth'
import { IUser } from 'firebase_support/models/User';
import { getUserByUUID } from 'firebase_support/controller/UserController';

export function useFirebaseAuth() {

  const [user, setUser] = useState<IUser | null>(null);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    onAuthStateChanged(auth, async (user: any) => {
      if (user) {
        const fullUser = await getUserByUUID(user?.uid)
        setUser(fullUser)
      } else {
        setUser(null)
      }
      setIsLoading(false)
    })
  }, [])

  return { user, isLoading };
}
