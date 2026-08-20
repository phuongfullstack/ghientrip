import { describe, expect, it } from 'vitest'
import { flatTickets, combos } from '@/data'
import { ROOMS } from '@/data/rooms'
import { computeQuoteCart, ticketRates, type CalcState } from '@/lib/quote'

const base: CalcState = {
  ticket: -1,
  adult: '2',
  child: '0',
  senior: '0',
  room: '',
  other: '',
  nightsWd: '2',
  nightsWe: '0',
  comboPick: '0',
  comboPrice: '',
  leName: '',
  lines: [],
  nextId: 1,
}

describe('ticketRates', () => {
  it('fallback trẻ em/cao tuổi về giá người lớn khi không có giá riêng', () => {
    const r = ticketRates({ group: 'X', name: 'Vé thử', adult: 850000, child: null, senior: 850000 })
    expect(r.adult).toBe(850000)
    expect(r.child).toBe(850000)
    expect(r.hasChildRate).toBe(false)
  })

  it('nhận đúng giá trẻ em riêng khi có', () => {
    const r = ticketRates({ group: 'X', name: 'Cáp treo', adult: 850000, child: 700000, senior: 850000 })
    expect(r.child).toBe(700000)
    expect(r.hasChildRate).toBe(true)
  })
})

describe('computeQuoteCart', () => {
  it('giỏ rỗng: tổng 0, chưa sẵn sàng chia đầu người', () => {
    const q = computeQuoteCart(base, flatTickets, combos)
    expect(q.total).toBe(0)
    expect(q.dep).toBe(0)
    expect(q.ppReady).toBe(false)
    expect(q.lineOut).toHaveLength(0)
  })

  it('vé lẻ: 2 NL + 1 TE cáp treo Hòn Thơm (850k/700k)', () => {
    const idx = flatTickets.findIndex((r) => r.name.includes('CÁP TREO 2 CHIỀU'))
    const q = computeQuoteCart(
      { ...base, adult: '2', child: '1', lines: [{ kind: 'ticket', id: 1, ticket: idx, adult: '2', child: '1', senior: '0' }] },
      flatTickets,
      combos
    )
    expect(q.ticketTotal).toBe(2 * 850000 + 1 * 700000)
    expect(q.total).toBe(q.ticketTotal)
    expect(q.adultPP).toBe(q.roomPP + 850000)
    expect(q.overlap).toBe(false)
  })

  it('phòng: 1x Studio City 2 đêm thường + 1 đêm cuối tuần', () => {
    const studio = ROOMS.findIndex((r) => r.name === 'Studio City View')
    const q = computeQuoteCart(
      { ...base, lines: [{ kind: 'room', id: 1, roomId: studio, qty: '1', nightsWd: '2', nightsWe: '1' }] },
      flatTickets,
      combos
    )
    expect(q.roomCart).toBe(2 * 940000 + 1 * 1130000)
    expect(q.total).toBe(2 * 940000 + 1130000)
  })

  it('cọc 30% làm tròn đến 1.000đ', () => {
    // 850.000 * 3 = 2.550.000 -> cọc 765.000 (đã chẵn nghìn)
    const idx = flatTickets.findIndex((r) => r.name.includes('CÁP TREO 2 CHIỀU'))
    const q = computeQuoteCart(
      { ...base, adult: '3', lines: [{ kind: 'ticket', id: 1, ticket: idx, adult: '3', child: '0', senior: '0' }] },
      flatTickets,
      combos
    )
    expect(q.total).toBe(2550000)
    expect(q.dep).toBe(Math.round((2550000 * 0.3) / 1000) * 1000)
    expect(q.remain).toBe(2550000 - q.dep)
  })

  it('combo + vé -> cảnh báo cộng trùng (overlap)', () => {
    const idx = flatTickets.findIndex((r) => r.name.includes('CÁP TREO 2 CHIỀU'))
    const q = computeQuoteCart(
      {
        ...base,
        lines: [
          { kind: 'combo', id: 1, comboIdx: 0, amount: '3500000', qty: '1', pax: '2' },
          { kind: 'ticket', id: 2, ticket: idx, adult: '2', child: '0', senior: '0' },
        ],
      },
      flatTickets,
      combos
    )
    expect(q.comboAmt).toBe(3500000)
    expect(q.ticketTotal).toBe(1700000)
    expect(q.total).toBe(5200000)
    expect(q.overlap).toBe(true)
  })

  it('dịch vụ lẻ nhân theo số lượng; input "1.500.000" vẫn ra 1500000', () => {
    const q = computeQuoteCart(
      { ...base, lines: [{ kind: 'le', id: 1, name: 'Xe đưa đón', amount: '1500000', qty: '2' }] },
      flatTickets,
      combos
    )
    expect(q.otherAmt).toBe(3000000)
  })

  it('chia đầu người: 4 khách, shared 4.000.000 -> 1.000.000/khách + vé theo đối tượng', () => {
    const q = computeQuoteCart(
      {
        ...base,
        adult: '2',
        child: '2',
        lines: [
          { kind: 'room', id: 1, roomId: 4, qty: '1', nightsWd: '2', nightsWe: '0' }, // 2BR City 2.360.000 x2
          { kind: 'le', id: 2, name: 'Xe', amount: '1000000', qty: '1' },
        ],
      },
      flatTickets,
      combos
    )
    expect(q.sharedAmt).toBe(2 * 2360000 + 1000000)
    expect(q.nGuests).toBe(4)
    expect(q.roomPP).toBe(Math.round(q.sharedAmt / 4))
    expect(q.adultPP).toBe(q.roomPP)
    expect(q.childPP).toBe(q.roomPP) // không có vé trong giỏ
  })

  it('quét toàn bộ 33 dòng vé: mỗi vé 1 mình với 2 NL -> tổng = 2 x giá NL', () => {
    flatTickets.forEach((t, i) => {
      const q = computeQuoteCart(
        { ...base, lines: [{ kind: 'ticket', id: 1, ticket: i, adult: '2', child: '0', senior: '0' }] },
        flatTickets,
        combos
      )
      expect(q.total, `vé: ${t.name}`).toBe(2 * (+t.adult || 0))
    })
  })

  it('phòng ngoài bảng cộng thẳng vào phần phòng', () => {
    const q = computeQuoteCart({ ...base, room: '500000' }, flatTickets, combos)
    expect(q.extraRoom).toBe(500000)
    expect(q.roomAmt).toBe(500000)
    expect(q.total).toBe(500000)
  })
})
