'use client'

import { useCallback, useEffect } from 'react'
import { slugify } from '@/lib/format'

export interface LightboxItem {
  src: string
  cap: string
}

interface LightboxProps {
  items: LightboxItem[]
  index: number
  onIndex: (i: number) => void
  onClose: () => void
}

/** Lightbox dùng chung cho gallery tour và ảnh bảng giá phòng (thay thế 2 cơ chế zoom cũ). */
export default function Lightbox({ items, index, onIndex, onClose }: LightboxProps) {
  const prev = useCallback(() => onIndex((index - 1 + items.length) % items.length), [index, items.length, onIndex])
  const next = useCallback(() => onIndex((index + 1) % items.length), [index, items.length, onIndex])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowLeft') prev()
      else if (e.key === 'ArrowRight') next()
    }
    document.addEventListener('keydown', onKey)
    // Khoá scroll nền khi lightbox mở
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [next, onClose, prev])

  const item = items[index]
  if (!item) return null

  return (
    <div className="tlightbox show" role="dialog" aria-modal="true" aria-label={item.cap} onClick={onClose}>
      <img src={item.src} alt={item.cap} onClick={(e) => e.stopPropagation()} />
      <div className="tlb-cap">{item.cap}</div>
      <a
        className="dl-btn dl-btn--bar"
        href={item.src}
        download={`${slugify(item.cap)}.jpg`}
        onClick={(e) => e.stopPropagation()}
      >
        ⬇ Tải ảnh
      </a>
      <button className="tlb-close" aria-label="Đóng" onClick={onClose}>×</button>
      <button className="tlb-prev" aria-label="Ảnh trước" onClick={(e) => { e.stopPropagation(); prev() }}>‹</button>
      <button className="tlb-next" aria-label="Ảnh sau" onClick={(e) => { e.stopPropagation(); next() }}>›</button>
    </div>
  )
}
