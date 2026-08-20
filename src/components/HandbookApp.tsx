'use client'

import { useCallback, useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { ALL_QUIZ, CHECKLIST } from '@/data/quiz'
import BackTop from './BackTop'
import Sidebar from './Sidebar'
import HomeTab from './tabs/HomeTab'
import TrainingTab from './tabs/TrainingTab'
import ProcessTab from './tabs/ProcessTab'
import LeadTab from './tabs/LeadTab'
import BookingTab from './tabs/BookingTab'
import CareTab from './tabs/CareTab'
import ScriptTab from './tabs/ScriptTab'
import GiaTab from './tabs/GiaTab'
import CamnangTab from './tabs/CamnangTab'
import KpiTab from './tabs/KpiTab'

const LS = 'elyday-training-v1'
const THEME_KEY = 'elyday-theme'

const NAV_MAP = ['home', 'lotrinh', 'quytrinh', 'lead', 'booking', 'care', 'script', 'gia', 'camnang', 'kpi']

const TABS: { id: string; label: string; hint: string; sepBefore?: boolean }[] = [
  { id: 'home', label: '🏠 Tổng quan', hint: 'Phím 1 — Tổng quan' },
  { id: 'lotrinh', label: '🧭 Lộ trình 7 ngày', hint: 'Phím 2 — Lộ trình 7 ngày' },
  { id: 'quytrinh', label: '🔄 Quy trình', hint: 'Phím 3 — Quy trình', sepBefore: true },
  { id: 'lead', label: '📌 Trạng thái lead', hint: 'Phím 4 — Trạng thái lead' },
  { id: 'booking', label: '💳 Chốt booking', hint: 'Phím 5 — Chốt booking' },
  { id: 'care', label: '💬 Chăm sóc', hint: 'Phím 6 — Chăm sóc' },
  { id: 'script', label: '📝 Script', hint: 'Phím 7 — Script', sepBefore: true },
  { id: 'gia', label: '💰 Bảng giá', hint: 'Phím 8 — Bảng giá' },
  { id: 'camnang', label: '📖 Cẩm nang', hint: 'Phím 9 — Cẩm nang' },
  { id: 'kpi', label: '✅ Checklist', hint: 'Phím 0 — Checklist' },
]

export default function HandbookApp() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const tab = searchParams.get('tab') || 'home'
  const sub = searchParams.get('sub') || 've'

  const [dark, setDark] = useState(false)
  const [day, setDay] = useState(1)
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [done, setDone] = useState<Record<number, boolean>>({})

  // Khôi phục quiz/checklist từ localStorage (giữ nguyên key của site cũ)
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(LS) || '{}')
      if (saved && (saved.done || saved.answers)) {
        setDone(saved.done || {})
        setAnswers(saved.answers || {})
      }
    } catch {}
    setDark(document.documentElement.classList.contains('dark'))
  }, [])

  const persist = useCallback((nextDone: Record<number, boolean>, nextAnswers: Record<string, number>) => {
    try {
      localStorage.setItem(LS, JSON.stringify({ done: nextDone, answers: nextAnswers }))
    } catch {}
  }, [])

  const setTab = useCallback(
    (name: string, extra?: { sub?: string }) => {
      const params = new URLSearchParams()
      params.set('tab', name)
      if (name === 'gia') params.set('sub', extra?.sub ?? sub)
      router.replace(`?${params.toString()}`, { scroll: false })
      // Đổi tab là đổi trang — đưa người dùng về đầu nội dung
      if (name !== tab) window.scrollTo({ top: 0 })
    },
    [router, sub, tab]
  )

  const toggleTheme = useCallback(() => {
    setDark((prev) => {
      const next = !prev
      document.documentElement.classList.toggle('dark', next)
      try {
        localStorage.setItem(THEME_KEY, next ? 'dark' : 'light')
      } catch {}
      return next
    })
  }, [])

  // Phím tắt: "/" tìm script, 1–9 và 0 chuyển tab
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const el = document.activeElement
      const tag = el ? el.tagName : ''
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return
      if (e.key === '/') {
        e.preventDefault()
        setTab('script')
        setTimeout(() => {
          const input = document.getElementById('script-search') as HTMLInputElement | null
          if (input) input.focus()
        }, 60)
      }
      if (/^[0-9]$/.test(e.key)) {
        const idx = e.key === '0' ? 9 : +e.key - 1
        if (NAV_MAP[idx]) {
          e.preventDefault()
          setTab(NAV_MAP[idx])
        }
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [setTab])

  const onAnswer = useCallback(
    (qid: string, idx: number) => {
      setAnswers((prev) => {
        const next = { ...prev, [qid]: idx }
        persist(done, next)
        return next
      })
    },
    [done, persist]
  )

  const onToggleCheck = useCallback(
    (i: number) => {
      setDone((prev) => {
        const next = { ...prev, [i]: !prev[i] }
        persist(next, answers)
        return next
      })
    },
    [answers, persist]
  )

  const onResetChecklist = useCallback(() => {
    setDone({})
    persist({}, answers)
  }, [answers, persist])

  const doneCount = CHECKLIST.filter((_, i) => done[i]).length
  const checkPercent = Math.round((doneCount / CHECKLIST.length) * 100) + '%'
  const allCorrect = ALL_QUIZ.filter((q) => answers[q.id] === q.a).length

  const quickScripts = useCallback(() => {
    setTab('script')
    setTimeout(() => {
      const input = document.getElementById('script-search') as HTMLInputElement | null
      if (input) input.focus()
    }, 60)
  }, [setTab])
  const quickGiaVe = useCallback(() => setTab('gia', { sub: 've' }), [setTab])
  const quickCalc = useCallback(() => setTab('gia', { sub: 'calc' }), [setTab])

  return (
    <div style={{ minHeight: '100vh', background: '#F5F6FA' }}>
      <header style={{ background: '#2A2D5C', color: '#fff', padding: '0 clamp(14px,4vw,40px)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px', padding: '18px 0', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{ width: '38px', height: '38px', borderRadius: '11px', background: '#4FB3A6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Outfit,sans-serif', fontWeight: '700', fontSize: '17px', color: '#12324A' }}>E</div>
            <div>
              <div style={{ fontFamily: 'Outfit,sans-serif', fontWeight: '600', fontSize: '17px', letterSpacing: '-0.01em' }}>ELYDAY &amp; SKKYE Travel</div>
              <div style={{ fontSize: '12px', color: '#A9AECB', marginTop: '2px' }}>Cẩm nang training Sale &amp; trực Fanpage</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '12px', color: '#A9AECB' }}>
            <span style={{ padding: '6px 12px', border: '1px solid #454976', borderRadius: '999px', whiteSpace: 'nowrap' }}>Tài liệu nội bộ</span>
            <span style={{ padding: '6px 12px', border: '1px solid #454976', borderRadius: '999px', whiteSpace: 'nowrap' }}>Phú Quốc</span>
            <button type="button" onClick={toggleTheme} title={dark ? 'Chuyển sang chế độ sáng' : 'Chuyển sang chế độ tối'} aria-label="Đổi giao diện sáng/tối" aria-pressed={dark} style={{ marginLeft: '4px', width: '40px', height: '40px', borderRadius: '50%', border: '1.5px solid #454976', background: 'rgba(255,255,255,.1)', cursor: 'pointer', fontSize: '19px', lineHeight: '1', flex: '0 0 auto', color: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,.25)' }}>{dark ? '☀️' : '🌙'}</button>
          </div>
        </div>

        <div className="navwrap">
          <nav className="navtabs" aria-label="Chuyên mục">
            {TABS.map((t) => {
              const on = tab === t.id
              return (
                <span key={t.id} style={{ display: 'contents' }}>
                  {t.sepBefore ? <span className="navsep" aria-hidden="true"></span> : null}
                  <button
                    className="navbtn"
                    title={t.hint}
                    onClick={() => setTab(t.id)}
                    style={{ background: on ? '#F5F6FA' : 'transparent', color: on ? '#2A2D5C' : '#C5C9E0', border: '0', borderRadius: '10px 10px 0 0', padding: '11px 11px', fontFamily: 'Outfit,sans-serif', fontSize: '14px', fontWeight: '500', cursor: 'pointer', whiteSpace: 'nowrap', flex: '0 0 auto' }}
                  >
                    {t.label}
                  </button>
                </span>
              )
            })}
          </nav>
        </div>
      </header>

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: 'clamp(18px,3vw,28px) clamp(14px,4vw,40px) 64px', display: 'flex', gap: 'clamp(16px,2vw,24px)', flexWrap: 'wrap', alignItems: 'flex-start' }}>
        <main style={{ flex: '1 1 620px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {tab === 'home' ? <HomeTab onQuickScripts={quickScripts} onQuickGiaVe={quickGiaVe} onQuickCalc={quickCalc} /> : null}
          {tab === 'lotrinh' ? <TrainingTab day={day} onDay={setDay} answers={answers} onAnswer={onAnswer} /> : null}
          {tab === 'quytrinh' ? <ProcessTab /> : null}
          {tab === 'lead' ? <LeadTab /> : null}
          {tab === 'booking' ? <BookingTab /> : null}
          {tab === 'care' ? <CareTab /> : null}
          {tab === 'script' ? <ScriptTab /> : null}
          {tab === 'gia' ? <GiaTab sub={sub} onSub={(s) => setTab('gia', { sub: s })} /> : null}
          {tab === 'camnang' ? <CamnangTab /> : null}
          {tab === 'kpi' ? <KpiTab done={done} onToggle={onToggleCheck} onReset={onResetChecklist} /> : null}
        </main>

        <Sidebar checkPercent={checkPercent} quizTotalLabel={`${allCorrect}/${ALL_QUIZ.length} câu quiz đã trả lời đúng`} onGoLotrinh={() => setTab('lotrinh')} />
      </div>

      <BackTop />
    </div>
  )
}
