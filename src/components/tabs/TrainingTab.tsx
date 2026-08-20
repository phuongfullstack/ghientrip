'use client'

import { DAYS, QUIZ } from '@/data/quiz'

interface TrainingTabProps {
  day: number
  onDay: (d: number) => void
  answers: Record<string, number>
  onAnswer: (qid: string, idx: number) => void
}

const pill = (on: boolean) =>
  on ? { bg: '#2A2D5C', fg: '#fff', bd: '#2A2D5C' } : { bg: '#fff', fg: '#3A3E4C', bd: '#D9DCE6' }

export default function TrainingTab({ day: dayNo, onDay, answers, onAnswer }: TrainingTabProps) {
  const day = DAYS.find((d) => d.n === dayNo) || DAYS[0]
  const qs = QUIZ[dayNo] || []
  const dayCorrect = qs.filter((q) => answers[q.id] === q.a).length

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <section style={{ background: '#fff', border: '1px solid #E6E8EF', borderRadius: '16px', padding: 'clamp(18px,4.5vw,26px)' }}>
        <h2 style={{ fontFamily: 'Outfit,sans-serif', fontSize: '22px', fontWeight: '600', color: '#2A2D5C', margin: '0 0 4px' }}>Lộ trình training nhân viên mới</h2>
        <p style={{ fontSize: '14px', color: '#6B7080', margin: '0 0 20px' }}>Chọn một ngày để xem nội dung và làm bài kiểm tra cuối ngày.</p>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {DAYS.map((d) => {
            const p = pill(d.n === dayNo)
            return (
              <button key={d.n} onClick={() => onDay(d.n)} style={{ border: `1px solid ${p.bd}`, background: p.bg, color: p.fg, borderRadius: '10px', padding: '11px 16px', fontFamily: 'Outfit,sans-serif', fontSize: '14px', fontWeight: '500', cursor: 'pointer', minHeight: '44px', whiteSpace: 'nowrap' }}>Ngày {d.n}</button>
            )
          })}
        </div>
      </section>

      <section style={{ background: '#fff', border: '1px solid #E6E8EF', borderRadius: '16px', padding: 'clamp(18px,4.5vw,26px)' }}>
        <div style={{ fontSize: '12px', fontWeight: '600', letterSpacing: '0.06em', textTransform: 'uppercase', color: '#4FB3A6' }}>Ngày {day.n}</div>
        <h3 style={{ fontFamily: 'Outfit,sans-serif', fontSize: '22px', fontWeight: '600', color: '#2A2D5C', margin: '8px 0 18px' }}>{day.title}</h3>
        <ul style={{ margin: '0', paddingLeft: '22px', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14.5px', lineHeight: '1.6', color: '#3A3E4C' }}>
          {day.topics.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </section>

      <section style={{ background: '#fff', border: '1px solid #E6E8EF', borderRadius: '16px', padding: 'clamp(18px,4.5vw,26px)' }}>
        <h3 style={{ fontFamily: 'Outfit,sans-serif', fontSize: '19px', fontWeight: '600', color: '#2A2D5C', margin: '0 0 4px' }}>Kiểm tra cuối ngày {day.n}</h3>
        <p style={{ fontSize: '14px', color: '#6B7080', margin: '0 0 20px' }}>{dayCorrect}/{qs.length} câu đúng ở ngày này. Chọn đáp án để xem giải thích.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
          {qs.map((q) => {
            const chosen = answers[q.id]
            const answered = chosen !== undefined
            const note = answered ? (chosen === q.a ? 'Đúng. ' + q.note : 'Chưa đúng. ' + q.note) : ''
            const noteColor = answered ? (chosen === q.a ? '#1E6B5E' : '#B4441F') : '#6B7080'
            return (
              <div key={q.id} style={{ borderTop: '1px solid #EEF0F5', paddingTop: '18px' }}>
                <div style={{ fontSize: '15px', fontWeight: '600', color: '#2A2D5C', lineHeight: '1.5', marginBottom: '12px' }}>{q.text}</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {q.opts.map((label, i) => {
                    let bg = '#fff', bd = '#D9DCE6', fg = '#3A3E4C'
                    if (answered) {
                      if (i === q.a) { bg = '#EAF7F4'; bd = '#4FB3A6'; fg = '#1E6B5E' }
                      else if (i === chosen) { bg = '#FFF6F3'; bd = '#F0B9A5'; fg = '#B4441F' }
                      else { fg = '#9AA0B4' }
                    }
                    return (
                      <button key={i} onClick={() => onAnswer(q.id, i)} style={{ textAlign: 'left', border: `1px solid ${bd}`, background: bg, color: fg, borderRadius: '10px', padding: '12px 14px', fontFamily: "'Be Vietnam Pro',sans-serif", fontSize: '14px', lineHeight: '1.5', cursor: 'pointer', minHeight: '44px' }}>{label}</button>
                    )
                  })}
                </div>
                <div style={{ fontSize: '13.5px', color: noteColor, marginTop: '10px', lineHeight: '1.55' }}>{note}</div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
