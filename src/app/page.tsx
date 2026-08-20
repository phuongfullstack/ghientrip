import { Suspense } from 'react'
import HandbookApp from '@/components/HandbookApp'

export default function Page() {
  return (
    <Suspense
      fallback={
        <div style={{ minHeight: '100vh', background: '#F5F6FA', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Be Vietnam Pro',system-ui,sans-serif", color: '#6B7080', fontSize: '14px' }}>
          Đang mở cẩm nang…
        </div>
      }
    >
      <HandbookApp />
    </Suspense>
  )
}
