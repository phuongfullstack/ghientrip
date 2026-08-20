'use client'

import { useState } from 'react'
import { combos } from '@/data'

const pill = (on: boolean) =>
  on ? { bg: '#2A2D5C', fg: '#fff', bd: '#2A2D5C' } : { bg: '#fff', fg: '#3A3E4C', bd: '#D9DCE6' }

export default function ComboTab() {
  const [idx, setIdx] = useState(0)
  const combo = combos[idx] || { desc: '', d1: '', d2: '', d3: '', inc: '', exc: '' }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <section style={{ background: '#fff', border: '1px solid #E6E8EF', borderRadius: '16px', padding: 'clamp(16px,4vw,24px)' }}>
        <h3 style={{ fontFamily: 'Outfit,sans-serif', fontSize: '17px', fontWeight: '600', color: '#2A2D5C', margin: '0 0 6px' }}>Lịch trình combo Phú Quốc</h3>
        <p style={{ fontSize: '14px', color: '#6B7080', margin: '0 0 16px' }}>Mỗi ngày chỉ chọn 01 chương trình full-day. Không ghép Hòn Thơm và tour tàu trong cùng một ngày.</p>
        <div style={{ display: 'flex', gap: '7px', flexWrap: 'wrap' }}>
          {combos.map((x, i) => {
            const p = pill(i === idx)
            const label = (x.desc || '').split('\n')[0].replace('COMBO ', '') || x.sheet
            return (
              <button key={i} onClick={() => setIdx(i)} style={{ border: `1px solid ${p.bd}`, background: p.bg, color: p.fg, borderRadius: '10px', padding: '11px 15px', fontFamily: 'Outfit,sans-serif', fontSize: '13px', fontWeight: '500', lineHeight: '1.45', cursor: 'pointer', textAlign: 'left' }}>{label}</button>
            )
          })}
        </div>
      </section>
      <section style={{ background: '#fff', border: '1px solid #E6E8EF', borderRadius: '16px', padding: 'clamp(16px,4vw,24px)' }}>
        <div style={{ fontFamily: 'Outfit,sans-serif', fontSize: '18px', fontWeight: '600', color: '#2A2D5C', lineHeight: '1.4', whiteSpace: 'pre-line', marginBottom: '18px' }}>{combo.desc}</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(260px,100%),1fr))', gap: '14px' }}>
          <div style={{ background: '#F7F8FB', borderRadius: '12px', padding: '18px', fontSize: '14px', lineHeight: '1.7', color: '#2C2F3A', whiteSpace: 'pre-line' }}>{combo.d1}</div>
          <div style={{ background: '#F7F8FB', borderRadius: '12px', padding: '18px', fontSize: '14px', lineHeight: '1.7', color: '#2C2F3A', whiteSpace: 'pre-line' }}>{combo.d2}</div>
          <div style={{ background: '#F7F8FB', borderRadius: '12px', padding: '18px', fontSize: '14px', lineHeight: '1.7', color: '#2C2F3A', whiteSpace: 'pre-line' }}>{combo.d3}</div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(260px,100%),1fr))', gap: '14px', marginTop: '14px' }}>
          <div style={{ background: '#EAF7F4', borderRadius: '12px', padding: '18px' }}>
            <div style={{ fontFamily: 'Outfit,sans-serif', fontSize: '14px', fontWeight: '600', color: '#1E6B5E', marginBottom: '9px' }}>Bao gồm</div>
            <div style={{ fontSize: '14px', lineHeight: '1.7', color: '#2C4F49', whiteSpace: 'pre-line' }}>{combo.inc}</div>
          </div>
          <div style={{ background: '#FFF6F3', borderRadius: '12px', padding: '18px' }}>
            <div style={{ fontFamily: 'Outfit,sans-serif', fontSize: '14px', fontWeight: '600', color: '#B4441F', marginBottom: '9px' }}>Không bao gồm</div>
            <div style={{ fontSize: '14px', lineHeight: '1.7', color: '#6D4234', whiteSpace: 'pre-line' }}>{combo.exc}</div>
          </div>
        </div>
      </section>
    </div>
  )
}
