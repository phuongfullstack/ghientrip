import type { Metadata, Viewport } from 'next'
import MicrosoftClarity from '@/components/MicrosoftClarity'
import './globals.css'

export const metadata: Metadata = {
  title: 'Handbook ELYDAY & SKKYE Travel — Cẩm nang training Sale & trực Fanpage',
  description: 'Tài liệu nội bộ: quy trình, script, bảng giá và cẩm nang training Sale Phú Quốc.',
  // Tài liệu nội bộ — không cho công cụ tìm kiếm đánh chỉ mục
  robots: { index: false, follow: false, nocache: true },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

// Chặn nhấp nháy theme: áp html.dark trước khi paint, đồng bộ key localStorage cũ.
const themePrepaint = `(function(){try{var v=localStorage.getItem('elyday-theme');var d=v==='dark'||(v!=='light'&&window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches);if(d)document.documentElement.classList.add('dark');}catch(e){}})();`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themePrepaint }} />
      </head>
      <body>
        <MicrosoftClarity />
        {children}
      </body>
    </html>
  )
}
