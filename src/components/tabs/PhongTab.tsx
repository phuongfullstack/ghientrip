'use client'

import { useState } from 'react'
import { CASA_ROOMS, HILLSIDE_ROOMS, ROOMS, roomCopy } from '@/data/rooms'
import type { Room } from '@/data/types'
import { useCopy } from '@/lib/clipboard'
import { slugify } from '@/lib/format'
import Lightbox from '../Lightbox'

const PRICE_IMAGES = [
  { src: '/assets/228e646c-0bc7-400d-8e1d-0f781ccddd80.jpg', cap: 'Bảng giá Studio — Hillside Apartment' },
  { src: '/assets/c276c0d0-02be-420a-a442-0db45d5870db.jpg', cap: 'Bảng giá 1 Bedroom — Hillside Apartment' },
  { src: '/assets/3e52e4ad-a7d5-4c52-8d52-7d3b488f0bd2.jpg', cap: 'Bảng giá 2 Bedroom — Hillside Apartment' },
  { src: '/assets/5ab16075-8e9e-4507-acd9-218a0c497fa0.jpg', cap: 'Bảng giá 3 Bedroom — Hillside Apartment' },
  { src: '/assets/337c6907-9027-4ee5-af8a-1c2d52432f68.jpg', cap: 'Casa de Mar Classic' },
  { src: '/assets/934d4bed-a011-4084-b539-fce95d2fc080.jpg', cap: 'Casa de Mar Deluxe' },
  { src: '/assets/dee36e6b-7350-467e-b335-82ccffeca225.jpg', cap: 'Casa de Mar Family Deluxe' },
  { src: '/assets/52bde70d-de6b-4d60-b3a3-88b5089a7349.jpg', cap: 'Casa de Mar Suite' },
]

const th = { textAlign: 'left' as const, padding: '8px 10px', background: '#F5F6FA', color: '#2A2D5C', fontWeight: '600' as const, borderBottom: '1px solid #E6E8EF', whiteSpace: 'nowrap' }
const td = { padding: '8px 10px', borderBottom: '1px solid #EEF0F5', color: '#3A3E4C', verticalAlign: 'top' as const, lineHeight: '1.5' }

const fmt = (n: number) => n.toLocaleString('vi-VN') + 'đ'

function RoomTable({ rooms }: { rooms: Room[] }) {
  const { copy, copyBtn } = useCopy()
  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13.5px', minWidth: '700px' }}>
        <thead>
          <tr>
            <th style={th}>Loại phòng</th><th style={th}>Diện tích</th><th style={th}>Sức chứa</th><th style={th}>Ngày thường</th><th style={th}>Cuối tuần</th><th style={th}>Copy</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map((r) => {
            const key = 'room' + ROOMS.indexOf(r)
            const b = copyBtn(key, '⧉ Copy')
            return (
              <tr key={r.name}>
                <td style={{ ...td, fontWeight: '600', color: '#2A2D5C', whiteSpace: 'nowrap' }}>{r.name}</td>
                <td style={{ ...td, whiteSpace: 'nowrap' }}>{r.area}</td>
                <td style={td}>{r.capacity}</td>
                <td style={{ ...td, fontWeight: '600', color: '#1E6B5E', whiteSpace: 'nowrap' }}>{fmt(r.wd)}</td>
                <td style={{ ...td, fontWeight: '600', color: '#1E6B5E', whiteSpace: 'nowrap' }}>{fmt(r.we)}</td>
                <td style={td}>
                  <button onClick={() => copy(roomCopy(r), key)} style={{ border: `1px solid ${b.bd}`, background: b.bg, color: b.fg, borderRadius: '8px', padding: '6px 10px', fontFamily: 'Outfit,sans-serif', fontSize: '12px', fontWeight: '500', cursor: 'pointer', minHeight: '30px', whiteSpace: 'nowrap' }}>{b.label}</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default function PhongTab() {
  const [lbIdx, setLbIdx] = useState(-1)

  return (
    <section style={{ background: '#fff', border: '1px solid #E6E8EF', borderRadius: '16px', padding: 'clamp(16px,4vw,24px)' }}>
      <h3 style={{ fontFamily: 'Outfit,sans-serif', fontSize: '17px', fontWeight: '600', color: '#2A2D5C', margin: '0 0 6px' }}>Bảng giá phòng</h3>
      <p style={{ fontSize: '14px', color: '#6B7080', margin: '0 0 18px' }}>File bảng giá gốc. Nhấn vào ảnh để xem kích thước đầy đủ.</p>

      <div id="roominfo-elyday" style={{ marginBottom: '22px' }}>
        <h4 style={{ fontFamily: 'Outfit,sans-serif', fontSize: '15px', fontWeight: '600', color: '#2A2D5C', margin: '22px 0 8px' }}>Hillside Apartment — căn hộ view thành phố &amp; biển</h4>
        <p style={{ fontSize: '12.5px', color: '#6B7080', margin: '0 0 8px' }}>Mùa thấp điểm 01/06 – 30/09/2026. Giá/đêm chưa gồm thuế &amp; phí. Ngày thường: Chủ Nhật – Thứ 5 · Cuối tuần: Thứ 6 – Thứ 7. Nhấn Copy để lấy dòng giá dán vào chat.</p>
        <RoomTable rooms={HILLSIDE_ROOMS} />

        <h4 style={{ fontFamily: 'Outfit,sans-serif', fontSize: '15px', fontWeight: '600', color: '#2A2D5C', margin: '22px 0 8px' }}>ELYDAY CASA — phòng khách sạn</h4>
        <p style={{ fontSize: '12.5px', color: '#6B7080', margin: '0 0 8px' }}>Mùa thấp điểm 01/06 – 30/09/2026 (theo standee Casa de Mar). Giá/đêm chưa gồm thuế &amp; phí, chưa gồm ăn sáng. Ngày thường: Chủ Nhật – Thứ 5 · Cuối tuần: Thứ 6 – Thứ 7.</p>
        <RoomTable rooms={CASA_ROOMS} />

        <h4 style={{ fontFamily: 'Outfit,sans-serif', fontSize: '15px', fontWeight: '600', color: '#2A2D5C', margin: '22px 0 8px' }}>Chính sách chung ELYDAY</h4>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13.5px' }}>
          <thead>
            <tr><th style={th}>Khoản</th><th style={th}>Quy định</th></tr>
          </thead>
          <tbody>
            <tr><td style={{ ...td, fontWeight: '600', color: '#2A2D5C', whiteSpace: 'nowrap' }}>Trẻ em</td><td style={td}>Miễn phí tối đa 02 trẻ dưới 12 tuổi/phòng khi ngủ chung giường với bố mẹ. Bé dùng sofa bed/giường phụ: 450.000đ/bé/đêm. Khách từ 12 tuổi ngủ chung: 300.000đ/người/đêm.</td></tr>
            <tr><td style={{ ...td, fontWeight: '600', color: '#2A2D5C', whiteSpace: 'nowrap' }}>Giờ nhận / trả phòng</td><td style={td}>Nhận phòng từ 14:00, trả phòng trước 12:00 (theo standee). Đến sớm: FO hỗ trợ giữ hành lý tùy tình trạng phòng.</td></tr>
            <tr><td style={{ ...td, fontWeight: '600', color: '#2A2D5C', whiteSpace: 'nowrap' }}>Nhận sớm / trả muộn</td><td style={td}>Phụ thuộc tình trạng phòng; phụ thu 30%, 50% hoặc 100% giá phòng tùy khung giờ.</td></tr>
            <tr><td style={{ ...td, fontWeight: '600', color: '#2A2D5C', whiteSpace: 'nowrap' }}>Hủy mùa thấp / cao điểm</td><td style={td}>Trước hơn 14 ngày: không tính phí · từ 14 đến 8 ngày: phí 50% tổng booking · trong vòng 7 ngày hoặc no-show: phí 100%.</td></tr>
            <tr><td style={{ ...td, fontWeight: '600', color: '#2A2D5C', whiteSpace: 'nowrap' }}>Hủy mùa Peak / lễ Tết</td><td style={td}>Trước hơn 21 ngày: không tính phí · từ 21 đến 15 ngày: phí 50% · trong vòng 14 ngày hoặc no-show: phí 100%.</td></tr>
          </tbody>
        </table>
        <div style={{ marginTop: '14px', padding: '12px 16px', background: '#FFF6F3', border: '1px solid #F6D9CF', borderRadius: '12px', fontSize: '13px', color: '#B4441F', lineHeight: '1.6' }}>Giá thay đổi theo mùa và dịp lễ, Tết — đây là bảng tham khảo trích từ standee mùa thấp điểm. Luôn kiểm tra bảng giá mới nhất và tình trạng chỗ trước khi báo khách; sale không tự giảm giá.</div>
        <div style={{ marginTop: '14px', padding: '12px 16px', background: '#F4FBF9', border: '1px solid #D4EFE8', borderRadius: '12px', fontSize: '13px', color: '#1E6B5E', lineHeight: '1.6' }}>Mẹo tư vấn: nhóm 6 khách có thể chọn 03 Studio (ở riêng) hoặc 01 căn 3 Bedroom (ở chung) — lấy tổng tiền phòng chia đều đầu người rồi cộng giá vé/tour từng đối tượng (Mẫu 123–124 trong thư viện script).</div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(280px,100%),1fr))', gap: '14px' }}>
        {PRICE_IMAGES.map((img, i) => (
          <figure key={img.src} style={{ margin: 0, position: 'relative' }}>
            <img src={img.src} alt={img.cap} onClick={() => setLbIdx(i)} style={{ width: '100%', display: 'block', border: '1px solid #E6E8EF', borderRadius: '12px', cursor: 'zoom-in' }} />
            <a className="dl-btn" href={img.src} download={`${slugify(img.cap)}.jpg`} aria-label={`Tải xuống ${img.cap}`}>⬇</a>
          </figure>
        ))}
      </div>

      {lbIdx >= 0 ? <Lightbox items={PRICE_IMAGES} index={lbIdx} onIndex={setLbIdx} onClose={() => setLbIdx(-1)} /> : null}
    </section>
  )
}
