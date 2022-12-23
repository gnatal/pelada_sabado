import { useEffect, useState } from 'react'
import { auth } from 'utils/firebaseConfig'
import { onAuthStateChanged } from 'firebase/auth'

export function useFirebaseAuth() {

  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('USER', user)
        setUser(user)
      } else {
        console.log('USER', user)
        setUser(null)
      }
      setIsLoading(false)
    })
  }, [])

  return { user, isLoading };
}
