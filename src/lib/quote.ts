import { ROOMS } from '@/data/rooms'
import type { ComboEntry, TicketRow } from '@/data/types'
import { calcNum } from './format'

export interface TicketLine {
  kind: 'ticket'
  id: number
  ticket: number
  adult: string
  child: string
  senior: string
}
export interface RoomLine {
  kind: 'room'
  id: number
  roomId: number
  qty: string
  nightsWd: string
  nightsWe: string
}
export interface ComboLine {
  kind: 'combo'
  id: number
  comboIdx: number
  amount: string
  qty: string
  pax: string
}
export interface LeLine {
  kind: 'le'
  id: number
  name: string
  amount: string
  qty: string
}
export type CartLine = TicketLine | RoomLine | ComboLine | LeLine

export interface CalcState {
  ticket: number
  adult: string
  child: string
  senior: string
  room: string
  other: string
  nightsWd: string
  nightsWe: string
  comboPick: string
  comboPrice: string
  leName: string
  lines: CartLine[]
  nextId: number
}

export function ticketRates(t: TicketRow | null) {
  if (!t) return { adult: 0, child: 0, senior: 0, hasChildRate: false }
  const c = t.child
  const hasChildRate = c !== null && c !== undefined && (c as unknown) !== '' && !isNaN(+c)
  const child = hasChildRate && c != null ? +c : +t.adult || 0
  const s = t.senior
  const hasSenior = s !== null && s !== undefined && (s as unknown) !== '' && !isNaN(+s)
  const senior = hasSenior && s != null ? +s : +t.adult || 0
  return { adult: +t.adult || 0, child, senior, hasChildRate }
}

export interface QuoteLineOut {
  kind: 'ticket' | 'room' | 'combo' | 'le'
  id: number
  title: string
  amt: number
  nA?: number
  nC?: number
  nS?: number
  qty?: number
  wd?: number
  we?: number
  pax?: number
  rates?: { adult: number; child: number; senior: number; hasChildRate: boolean }
}

export interface QuoteResult {
  nAdult: number
  nChild: number
  nSenior: number
  nGuests: number
  ticketTotal: number
  roomAmt: number
  roomCart: number
  extraRoom: number
  comboAmt: number
  otherAmt: number
  leCart: number
  total: number
  dep: number
  remain: number
  sharedAmt: number
  roomPP: number
  adultPP: number
  childPP: number
  seniorPP: number
  ppReady: boolean
  ticketAdultRate: number
  ticketChildRate: number
  ticketSeniorRate: number
  hasTicket: boolean
  hasRoomLine: boolean
  hasCombo: boolean
  lineOut: QuoteLineOut[]
  overlap: boolean
}

export function computeQuoteCart(
  calc: CalcState,
  flatTickets: TicketRow[],
  combos: ComboEntry[]
): QuoteResult {
  const lines = calc.lines || []
  const nAdult = calcNum(calc.adult)
  const nChild = calcNum(calc.child)
  const nSenior = calcNum(calc.senior)
  const nGuests = nAdult + nChild + nSenior
  let ticketTotal = 0,
    roomCart = 0,
    comboAmt = 0,
    leCart = 0
  let ticketAdultRate = 0,
    ticketChildRate = 0,
    ticketSeniorRate = 0
  let hasTicket = false,
    hasRoomLine = false,
    hasCombo = false
  const lineOut: QuoteLineOut[] = []
  lines.forEach(function (line) {
    if (line.kind === 'ticket') {
      const t = flatTickets[line.ticket]
      const r = ticketRates(t)
      const nA = calcNum(line.adult),
        nC = calcNum(line.child),
        nS = calcNum(line.senior)
      const amt = nA * r.adult + nC * r.child + nS * r.senior
      ticketTotal += amt
      if (nA > 0) ticketAdultRate += r.adult
      if (nC > 0) ticketChildRate += r.child
      if (nS > 0) ticketSeniorRate += r.senior
      hasTicket = true
      lineOut.push({ kind: 'ticket', id: line.id, title: t ? t.name.replace(/\n/g, ' ') : 'Vé', amt, nA, nC, nS, rates: r })
    } else if (line.kind === 'room') {
      const room = ROOMS[line.roomId]
      if (!room) return
      const qty = calcNum(line.qty)
      const wd = calcNum(line.nightsWd),
        we = calcNum(line.nightsWe)
      const amt = qty * (wd * room.wd + we * room.we)
      roomCart += amt
      hasRoomLine = true
      lineOut.push({ kind: 'room', id: line.id, title: room.hotel + ' — ' + room.name, amt, qty, wd, we })
    } else if (line.kind === 'combo') {
      const combo = combos[line.comboIdx]
      const qty = calcNum(line.qty)
      const amt = calcNum(line.amount) * qty
      comboAmt += amt
      hasCombo = true
      const title = combo ? (combo.desc || '').split('\n')[0] || combo.sheet : 'Combo'
      lineOut.push({ kind: 'combo', id: line.id, title, amt, qty, pax: calcNum(line.pax) })
    } else if (line.kind === 'le') {
      const qty = calcNum(line.qty)
      const amt = calcNum(line.amount) * qty
      leCart += amt
      lineOut.push({ kind: 'le', id: line.id, title: line.name || 'Dịch vụ lẻ', amt, qty })
    }
  })
  const extraRoom = calcNum(calc.room)
  const roomAmt = roomCart + extraRoom
  const otherAmt = leCart
  const total = ticketTotal + roomAmt + comboAmt + otherAmt
  const dep = Math.round((total * 0.3) / 1000) * 1000
  const remain = total - dep
  const sharedAmt = roomAmt + comboAmt + otherAmt
  const roomPP = nGuests > 0 && sharedAmt > 0 ? Math.round(sharedAmt / nGuests) : 0
  const adultPP = roomPP + ticketAdultRate
  const childPP = roomPP + ticketChildRate
  const seniorPP = roomPP + ticketSeniorRate
  const ppReady = nGuests > 0 && total > 0
  return {
    nAdult,
    nChild,
    nSenior,
    nGuests,
    ticketTotal,
    roomAmt,
    roomCart,
    extraRoom,
    comboAmt,
    otherAmt,
    leCart,
    total,
    dep,
    remain,
    sharedAmt,
    roomPP,
    adultPP,
    childPP,
    seniorPP,
    ppReady,
    ticketAdultRate,
    ticketChildRate,
    ticketSeniorRate,
    hasTicket,
    hasRoomLine,
    hasCombo,
    lineOut,
    overlap: hasCombo && (hasTicket || hasRoomLine || extraRoom > 0),
  }
}
