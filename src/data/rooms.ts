import type { Room } from './types'

/**
 * Nguồn duy nhất cho giá phòng ELYDAY — trước đây dữ liệu này nhân ba
 * (bảng HTML + ROOM_COPY + ROOM_CATALOG trong index.html).
 * Đã đối chiếu từng con số với 8 standee gốc trong
 * `ELYDAY INFO/FILE BẢNG GIÁ PNG` (mỗi giá đọc ≥2 lần từ các vùng cắt khác nhau).
 * Cả hai khu đều là MÙA THẤP ĐIỂM 01/06–30/09/2026, giá/đêm CHƯA gồm thuế & phí.
 * Check-in 14:00 — check-out 12:00 (theo chân standee).
 */
export const ROOMS: Room[] = [
  { hotel: 'Hillside Apartment', name: 'Studio City View', area: '28m²', capacity: '2 người lớn', wd: 940000, we: 1130000 },
  { hotel: 'Hillside Apartment', name: 'Studio Ocean View', area: '28m²', capacity: '2 người lớn', wd: 1230000, we: 1480000 },
  { hotel: 'Hillside Apartment', name: '1 Bedroom City View', area: '45m²', capacity: '2NL + 2TE<12t', wd: 1440000, we: 1650000 },
  { hotel: 'Hillside Apartment', name: '1 Bedroom Ocean View', area: '45m²', capacity: '2NL + 2TE<12t', wd: 1570000, we: 1790000 },
  { hotel: 'Hillside Apartment', name: '2 Bedroom City View', area: '80m²', capacity: '4NL + 1TE<12t', wd: 2360000, we: 2610000 },
  { hotel: 'Hillside Apartment', name: '2 Bedroom Ocean View', area: '80m²', capacity: '4NL + 1TE<12t', wd: 2610000, we: 2860000 },
  { hotel: 'Hillside Apartment', name: '3 Bedroom City View', area: '95m²', capacity: '6NL + 1TE<12t', wd: 3150000, we: 3450000 },
  { hotel: 'Hillside Apartment', name: '3 Bedroom Ocean View', area: '95m²', capacity: '6NL + 1TE<12t', wd: 3450000, we: 3750000 },
  { hotel: 'ELYDAY CASA', name: 'Classic Queen', area: '16m²', capacity: '2 khách', wd: 630000, we: 690000 },
  { hotel: 'ELYDAY CASA', name: 'Superior Queen', area: '20m²', capacity: '2 khách', wd: 680000, we: 940000 },
  { hotel: 'ELYDAY CASA', name: 'Deluxe Queen', area: '20m²', capacity: '2 khách + 1 trẻ<12t', wd: 680000, we: 940000 },
  { hotel: 'ELYDAY CASA', name: 'Family Deluxe', area: '28m²', capacity: '2NL + 2TE<12t', wd: 1100000, we: 1350000 },
  { hotel: 'ELYDAY CASA', name: 'Suite Homey 1BR', area: '28m²', capacity: '2 khách + 2TE<12t', wd: 1660000, we: 1780000 },
  { hotel: 'ELYDAY CASA', name: 'Suite Casa 1BR with Bathtub', area: '16m²', capacity: '2 khách', wd: 1900000, we: 2020000 },
]

export const HILLSIDE_ROOMS = ROOMS.filter((r) => r.hotel === 'Hillside Apartment')
export const CASA_ROOMS = ROOMS.filter((r) => r.hotel === 'ELYDAY CASA')

const seasonNote = 'mùa thấp điểm 01/06–30/09/2026, chưa gồm thuế & phí'

const fmt = (n: number) => n.toLocaleString('vi-VN')

export function roomCopy(r: Room): string {
  return (
    `${r.hotel} — ${r.name} (${r.area}, ${r.capacity}): ` +
    `Ngày thường ${fmt(r.wd)}đ/đêm · Cuối tuần ${fmt(r.we)}đ/đêm (${seasonNote})`
  )
}
