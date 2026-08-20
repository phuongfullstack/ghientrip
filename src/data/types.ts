export interface ScriptEntry {
  code: string
  cat: string
  sit: string
  when: string
  msg: string
}

export interface TicketRow {
  group: string
  name: string
  adult: number
  child: number | null
  senior: number
  note?: string
}

export interface TicketGroupData {
  title: string
  rows: TicketRow[]
  notes: string[]
}

export interface ComboEntry {
  sheet: string
  desc: string
  d1: string
  d2: string
  d3: string
  inc: string
  exc: string
}

export interface Room {
  hotel: string
  name: string
  area: string
  capacity: string
  wd: number
  we: number
}
