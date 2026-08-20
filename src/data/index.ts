import scriptsRaw from './scriptsJson.json'
import ticketsRaw from './ticketsJson.json'
import combosRaw from './combosJson.json'
import type { ScriptEntry, TicketGroupData, TicketRow, ComboEntry } from './types'

const scriptsData = scriptsRaw as { categories: string[]; scripts: ScriptEntry[] }
export const cats: string[] = scriptsData.categories
export const scripts: ScriptEntry[] = scriptsData.scripts

export const ticketGroups: TicketGroupData[] = (ticketsRaw as TicketGroupData[]).filter(
  (g) => g.rows && g.rows.length
)
export const flatTickets: TicketRow[] = ticketGroups.flatMap((g) => g.rows || [])

export const combos: ComboEntry[] = combosRaw as ComboEntry[]
