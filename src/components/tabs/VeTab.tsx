'use client'

import { ticketGroups } from '@/data'
import { useCopy } from '@/lib/clipboard'
import { money } from '@/lib/format'

export default function VeTab() {
  const { copy, copyBtn } = useCopy()

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {ticketGroups.map((g) => (
        <section key={g.title} style={{ background: '#fff', border: '1px solid #E6E8EF', borderRadius: '16px', padding: 'clamp(16px,4vw,24px)' }}>
          <h3 style={{ fontFamily: 'Outfit,sans-serif', fontSize: '17px', fontWeight: '600', color: '#2A2D5C', margin: '0 0 16px', lineHeight: '1.45' }}>{g.title}</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {(g.rows || []).map((r) => {
              const adultF = money(r.adult)
              const childF = money(r.child)
              const seniorF = money(r.senior)
              const copyKey = 'tk' + r.name.slice(0, 20)
              const copyText =
                r.name.replace(/\n/g, ' ') + '\nNgười lớn: ' + adultF + ' · Trẻ em: ' + childF + ' · Cao tuổi: ' + seniorF + (r.note ? '\nGhi chú: ' + r.note : '')
              const b = copyBtn(copyKey, '⧉ Copy')
              return (
                <div key={r.name} style={{ border: '1px solid #E6E8EF', borderRadius: '11px', padding: '14px 16px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap' }}>
                    <div style={{ flex: '1 1 240px', minWidth: '0' }}>
                      <div style={{ fontSize: '11px', color: '#6B7080', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '4px' }}>{r.group}</div>
                      <div style={{ fontSize: '14.5px', fontWeight: '500', color: '#2C2F3A', lineHeight: '1.5', whiteSpace: 'pre-line' }}>{r.name}</div>
                    </div>
                    <div style={{ display: 'flex', gap: '18px', flexWrap: 'wrap' }}>
                      <div>
                        <div style={{ fontSize: '11px', color: '#6B7080' }}>Người lớn</div>
                        <div style={{ fontFamily: 'Outfit,sans-serif', fontSize: '16px', fontWeight: '600', color: '#2A2D5C' }}>{adultF}</div>
                      </div>
                      <div>
                        <div style={{ fontSize: '11px', color: '#6B7080' }}>Trẻ em</div>
                        <div style={{ fontFamily: 'Outfit,sans-serif', fontSize: '16px', fontWeight: '600', color: '#2A2D5C' }}>{childF}</div>
                      </div>
                      <div>
                        <div style={{ fontSize: '11px', color: '#6B7080' }}>Cao tuổi</div>
                        <div style={{ fontFamily: 'Outfit,sans-serif', fontSize: '16px', fontWeight: '600', color: '#2A2D5C' }}>{seniorF}</div>
                      </div>
                    </div>
                    <button onClick={() => copy(copyText, copyKey)} style={{ border: `1px solid ${b.bd}`, background: b.bg, color: b.fg, borderRadius: '8px', padding: '6px 10px', fontFamily: 'Outfit,sans-serif', fontSize: '12px', fontWeight: '500', cursor: 'pointer', minHeight: '30px', whiteSpace: 'nowrap', alignSelf: 'center' }}>{b.label}</button>
                  </div>
                  {r.note ? (
                    <div style={{ marginTop: '10px', fontSize: '13px', color: '#1E6B5E', background: '#EAF7F4', borderRadius: '8px', padding: '9px 12px', lineHeight: '1.55' }}>{r.note}</div>
                  ) : null}
                </div>
              )
            })}
          </div>
          <div style={{ marginTop: '14px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {(g.notes || []).map((n, i) => (
              <div key={i} style={{ fontSize: '13px', color: '#6B7080', lineHeight: '1.55' }}>{n}</div>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
