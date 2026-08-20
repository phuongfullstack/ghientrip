'use client'

import CalcTab from './CalcTab'
import ComboTab from './ComboTab'
import PhongTab from './PhongTab'
import TourTab from './TourTab'
import VeTab from './VeTab'

export type GiaSub = 've' | 'combo' | 'phong' | 'tour' | 'calc'

interface GiaTabProps {
  sub: string
  onSub: (s: GiaSub) => void
}

const SUBS: { id: GiaSub; label: string }[] = [
  { id: 've', label: 'Giá vé' },
  { id: 'combo', label: 'Combo' },
  { id: 'phong', label: 'Bảng giá phòng' },
  { id: 'tour', label: 'Tour du thuyền' },
  { id: 'calc', label: 'Tính báo giá' },
]

export default function GiaTab({ sub, onSub }: GiaTabProps) {
  const cur = (SUBS.some((s) => s.id === sub) ? sub : 've') as GiaSub

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
      <section style={{ background: '#fff', border: '1px solid #E6E8EF', borderRadius: '16px', padding: 'clamp(14px,3vw,18px)' }}>
        <h2 style={{ fontFamily: 'Outfit,sans-serif', fontSize: '22px', fontWeight: '600', color: '#2A2D5C', margin: '0 0 4px' }}>Bảng giá &amp; sản phẩm</h2>
        <p style={{ fontSize: '14px', color: '#6B7080', margin: '0 0 18px' }}>Giá niêm yết để tham khảo khi tư vấn. Luôn kiểm tra lại bảng giá mới nhất và tình trạng chỗ trước khi báo khách.</p>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {SUBS.map((s) => {
            const on = cur === s.id
            const bg = on ? '#2A2D5C' : '#fff'
            const fg = on ? '#fff' : '#3A3E4C'
            const bd = on ? '#2A2D5C' : '#D9DCE6'
            return (
              <button key={s.id} onClick={() => onSub(s.id)} style={{ border: `1px solid ${bd}`, background: bg, color: fg, borderRadius: '10px', padding: '11px 16px', fontFamily: 'Outfit,sans-serif', fontSize: '14px', fontWeight: '500', cursor: 'pointer', minHeight: '44px', whiteSpace: 'nowrap' }}>{s.label}</button>
            )
          })}
        </div>
      </section>

      {cur === 've' ? <VeTab /> : null}
      {cur === 'combo' ? <ComboTab /> : null}
      {cur === 'phong' ? <PhongTab /> : null}
      {cur === 'tour' ? <TourTab /> : null}
      {cur === 'calc' ? <CalcTab /> : null}
    </div>
  )
}
