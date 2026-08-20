'use client'

import { useCallback, useRef, useState } from 'react'

function legacyCopy(text: string): boolean {
  try {
    const ta = document.createElement('textarea')
    ta.value = text
    ta.setAttribute('readonly', '')
    ta.style.cssText = 'position:fixed;top:0;left:0;width:1px;height:1px;opacity:0;border:0;padding:0'
    document.body.appendChild(ta)
    ta.focus()
    ta.select()
    if (ta.setSelectionRange) ta.setSelectionRange(0, text.length)
    const ok = document.execCommand && document.execCommand('copy')
    document.body.removeChild(ta)
    return !!ok
  } catch {
    return false
  }
}

export interface CopyBtnStyle {
  bg: string
  fg: string
  bd: string
  label: string
}

/** Trạng thái copy dùng chung: flash "Đã copy" 1.8s, key '!...' khi thất bại. */
export function useCopy() {
  const [copied, setCopied] = useState('')
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const flash = useCallback((key: string) => {
    if (timer.current) clearTimeout(timer.current)
    setCopied(key)
    timer.current = setTimeout(() => setCopied(''), 1800)
  }, [])

  const copy = useCallback(
    (text: string, key: string) => {
      if (!text) return
      const ok = () => flash(key)
      const fail = () => {
        if (legacyCopy(text)) ok()
        else flash('!' + key)
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        let p: Promise<void> | undefined
        try {
          p = navigator.clipboard.writeText(text)
        } catch {
          fail()
          return
        }
        if (p && p.then) p.then(ok, fail)
        else ok()
      } else fail()
    },
    [flash]
  )

  const copyBtn = useCallback(
    (key: string, label: string): CopyBtnStyle => {
      if (copied === key) return { bg: '#4FB3A6', fg: '#fff', bd: '#4FB3A6', label: 'Đã copy' }
      if (copied === '!' + key) return { bg: '#FFF6F3', fg: '#B4441F', bd: '#F0B9A5', label: 'Chưa copy được' }
      return { bg: '#fff', fg: '#1E6B5E', bd: '#4FB3A6', label }
    },
    [copied]
  )

  return { copy, copyBtn }
}
