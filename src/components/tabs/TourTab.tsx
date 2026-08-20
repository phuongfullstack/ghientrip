'use client'

import { useState } from 'react'
import Lightbox, { type LightboxItem } from '../Lightbox'

const TOUR: (LightboxItem & { hero?: boolean; b: string; s: string })[] = [
  { src: '/assets/9817c281-d65d-4611-be90-c5f61c8f80ce.jpg', cap: 'Du thuyền Nautilus — Tàu du thuyền chính của hành trình 3 đảo', hero: true, b: 'Du thuyền Nautilus', s: 'Tàu du thuyền chính của hành trình 3 đảo' },
  { src: '/assets/9a031319-b993-4a7d-9e9b-cff36bd4faad.jpg', cap: 'Tour đảo — Ghé thăm và tắm biển tại các đảo', b: 'Tour đảo', s: 'Ghé thăm và tắm biển tại các đảo' },
  { src: '/assets/17697274-300b-4ae7-8e19-fd1eb4b40a74.jpg', cap: 'Hải trình hoàng hôn — Chuyến ngắm hoàng hôn trên biển', b: 'Hải trình hoàng hôn', s: 'Chuyến ngắm hoàng hôn trên biển' },
  { src: '/assets/1e63a518-f3cc-4681-b034-94632c2314f9.jpg', cap: 'Thể thao biển — Trải nghiệm thể thao dưới nước', b: 'Thể thao biển', s: 'Trải nghiệm thể thao dưới nước' },
  { src: '/assets/05d7d623-8e49-4ef2-99b7-ae4f388c9d4e.jpg', cap: 'Đi bộ dưới biển — Đi bộ trên đáy biển, ngắm san hô', b: 'Đi bộ dưới biển', s: 'Đi bộ trên đáy biển, ngắm san hô' },
  { src: '/assets/1a25a21d-0011-49fa-9c68-da0cf7771d35.jpg', cap: 'Tour check-in — Hành trình check-in các điểm đẹp', b: 'Tour check-in', s: 'Hành trình check-in các điểm đẹp' },
]

export default function TourTab() {
  const [lbIdx, setLbIdx] = useState(-1)

  return (
    <section style={{ background: '#fff', border: '1px solid #E6E8EF', borderRadius: '16px', padding: 'clamp(16px,4vw,24px)' }}>
      <h3 style={{ fontFamily: 'Outfit,sans-serif', fontSize: '17px', fontWeight: '600', color: '#2A2D5C', margin: '0 0 6px' }}>Tour du thuyền 3 đảo</h3>
      <p style={{ fontSize: '14px', color: '#6B7080', margin: '0 0 18px' }}>Tài liệu hình ảnh để gửi khách khi tư vấn tour.</p>
      <div className="tourgall">
        {TOUR.map((t, i) => (
          <figure key={t.src} className={t.hero ? 'tourfig tourfig--hero' : 'tourfig'} onClick={() => setLbIdx(i)}>
            <img src={t.src} alt={t.b} />
            <figcaption><b>{t.b}</b><span>{t.s}</span></figcaption>
          </figure>
        ))}
      </div>
      {lbIdx >= 0 ? <Lightbox items={TOUR} index={lbIdx} onIndex={setLbIdx} onClose={() => setLbIdx(-1)} /> : null}
    </section>
  )
}
