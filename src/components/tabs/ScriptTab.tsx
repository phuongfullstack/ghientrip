'use client'

import { useMemo, useState } from 'react'
import { cats, scripts } from '@/data'
import { useCopy } from '@/lib/clipboard'

const pill = (on: boolean) =>
  on ? { bg: '#2A2D5C', fg: '#fff', bd: '#2A2D5C' } : { bg: '#fff', fg: '#3A3E4C', bd: '#D9DCE6' }

export default function ScriptTab() {
  const [query, setQuery] = useState('')
  const [cat, setCat] = useState('Tất cả')
  const { copy, copyBtn } = useCopy()

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return scripts.filter((s) => {
      if (cat !== 'Tất cả' && s.cat !== cat) return false
      if (!q) return true
      return (s.sit + ' ' + s.when + ' ' + s.msg + ' ' + s.code).toLowerCase().includes(q)
    })
  }, [cat, query])

  const shown = filtered.slice(0, 60)
  const countLabel =
    filtered.length === 0
      ? 'Không có mẫu nào khớp. Thử từ khóa khác.'
      : filtered.length > 60
        ? `Hiển thị 60 trong ${filtered.length} mẫu — thu hẹp bằng ô tìm kiếm.`
        : `${filtered.length} mẫu`

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <section style={{ background: '#fff', border: '1px solid #E6E8EF', borderRadius: '16px', padding: 'clamp(18px,4.5vw,26px)' }}>
        <h2 style={{ fontFamily: 'Outfit,sans-serif', fontSize: '22px', fontWeight: '600', color: '#2A2D5C', margin: '0 0 4px' }}>Thư viện script</h2>
        <p style={{ fontSize: '14px', color: '#6B7080', margin: '0 0 18px' }}>152 mẫu theo từng hạng mục. Chọn tình huống, sửa phần trong ngoặc vuông, kiểm tra giá và tình trạng dịch vụ, rồi gửi.</p>
        <div id="internal-warn" style={{ marginTop: '8px', padding: '9px 12px', background: '#FFF6F3', border: '1px solid #F6D9CF', borderRadius: '10px', fontSize: '12px', color: '#B4441F', lineHeight: '1.5' }}>⚠ Nhóm <b>BÀN GIAO NỘI BỘ</b> và các form kèm &quot;giá book/rate&quot; chỉ dùng nội bộ — tuyệt đối không copy gửi cho khách.</div>
        <input id="script-search" value={query} onInput={(e) => setQuery((e.target as HTMLInputElement).value)} placeholder="Tìm theo tình huống, nội dung hoặc mã mẫu…" style={{ marginTop: '14px', width: '100%', border: '1px solid #D9DCE6', borderRadius: '10px', padding: '13px 15px', fontFamily: "'Be Vietnam Pro',sans-serif", fontSize: '15px', color: '#2C2F3A', outline: 'none', minHeight: '44px' }} />
        <div style={{ display: 'flex', gap: '7px', flexWrap: 'wrap', marginTop: '16px' }}>
          {['Tất cả', ...cats].map((c) => {
            const p = pill(cat === c)
            return (
              <button key={c} onClick={() => setCat(c)} style={{ border: `1px solid ${p.bd}`, background: p.bg, color: p.fg, borderRadius: '999px', padding: '9px 15px', fontFamily: 'Outfit,sans-serif', fontSize: '13px', fontWeight: '500', cursor: 'pointer', minHeight: '40px', whiteSpace: 'nowrap' }}>{c}</button>
            )
          })}
        </div>
      </section>

      <div style={{ fontSize: '13px', color: '#6B7080', padding: '0 4px' }}>{countLabel}</div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        {shown.map((s) => {
          const b = copyBtn(s.code, 'Copy')
          return (
            <section key={s.code} style={{ background: '#fff', border: '1px solid #E6E8EF', borderRadius: '14px', padding: 'clamp(18px,4vw,24px)' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '14px', flexWrap: 'wrap' }}>
                <div style={{ flex: '1 1 260px', minWidth: '0' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '9px', flexWrap: 'wrap', marginBottom: '7px' }}>
                    <span style={{ fontFamily: 'Outfit,sans-serif', fontSize: '11.5px', fontWeight: '600', color: '#4FB3A6', letterSpacing: '0.04em' }}>{s.code}</span>
                    <span style={{ fontSize: '11px', color: '#6B7080', background: '#F2F3F8', borderRadius: '999px', padding: '3px 9px' }}>{s.cat}</span>
                  </div>
                  <div style={{ fontFamily: 'Outfit,sans-serif', fontSize: '16px', fontWeight: '600', color: '#2A2D5C', lineHeight: '1.4' }}>{s.sit}</div>
                  <div style={{ fontSize: '13px', color: '#6B7080', marginTop: '3px' }}>Dùng khi: {s.when}</div>
                </div>
                <button onClick={() => copy(s.msg, s.code)} style={{ border: `1px solid ${b.bd}`, background: b.bg, color: b.fg, borderRadius: '9px', padding: '9px 15px', fontFamily: 'Outfit,sans-serif', fontSize: '13px', fontWeight: '500', cursor: 'pointer', minHeight: '40px', whiteSpace: 'nowrap' }}>{b.label}</button>
              </div>
              <div style={{ marginTop: '14px', background: '#F7F8FB', borderRadius: '11px', padding: '16px 18px', fontSize: '14.5px', lineHeight: '1.7', color: '#2C2F3A', whiteSpace: 'pre-wrap' }}>{s.msg}</div>
            </section>
          )
        })}
      </div>
    </div>
  )
}
