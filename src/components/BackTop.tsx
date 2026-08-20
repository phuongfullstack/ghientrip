'use client'

import { useEffect, useState } from 'react'

export default function BackTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow((window.scrollY || document.documentElement.scrollTop || 0) > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      className={`backtop${show ? ' show' : ''}`}
      aria-label="Lên đầu trang"
      title="Lên đầu trang"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      ↑
    </button>
  )
}
