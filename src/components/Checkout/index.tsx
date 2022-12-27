import { useRouter } from 'next/router'
import { useEffect } from 'react';

export default function Checkout() {
  const router = useRouter();

  useEffect(() => {
    console.log('QUERY PARAMS', router.query)
  }, [])

  return (
    <div>
      <p>Mulata macumbeira</p>
    </div>
  )
}