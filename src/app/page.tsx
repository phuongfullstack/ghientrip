import { Suspense } from 'react'
import HandbookApp from '@/components/HandbookApp'

export default function Page() {
  return (
    <Suspense>
      <HandbookApp />
    </Suspense>
  )
}
