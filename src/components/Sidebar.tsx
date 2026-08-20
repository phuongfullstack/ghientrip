interface SidebarProps {
  checkPercent: string
  quizTotalLabel: string
  onGoLotrinh: () => void
}

export default function Sidebar({ checkPercent, quizTotalLabel, onGoLotrinh }: SidebarProps) {
  return (
    <aside style={{ flex: '1 1 300px', maxWidth: 'min(100%,520px)', minWidth: '0', position: 'sticky', top: '20px', alignSelf: 'flex-start', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(240px,100%),1fr))', alignContent: 'start', alignItems: 'start', gap: '14px' }}>
      <section style={{ background: '#fff', border: '1px solid #E6E8EF', borderRadius: '14px', padding: 'clamp(16px,4vw,20px)' }}>
        <div style={{ fontFamily: 'Outfit,sans-serif', fontSize: '12px', fontWeight: '600', letterSpacing: '0.06em', textTransform: 'uppercase', color: '#4FB3A6', marginBottom: '14px' }}>5 quy tắc bắt buộc</div>
        <ol className="rules-ol" style={{ margin: '0', paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: 'clamp(13.5px,1.4vw,14.5px)', lineHeight: '1.6', color: '#3A3E4C', textWrap: 'pretty' }}>
          <li>Lead mới phản hồi tối đa 05 phút; sale chịu trách nhiệm lead được phân trong ngày.</li>
          <li>Không cam kết phòng, giá, tour hoặc phụ thu khi chưa kiểm tra.</li>
          <li>Sale không tự giảm giá; mọi giá thấp hơn giá chuẩn phải được Lead duyệt.</li>
          <li>Booking chốt khi khách cọc 30% và có bill chuyển khoản hợp lệ.</li>
          <li>Sau cọc phải bàn giao đúng Reservation/Team Tour và sale gửi xác nhận cuối.</li>
        </ol>
      </section>

      <section style={{ background: '#EAF7F4', border: '1px solid #D4EFE8', borderRadius: '14px', padding: 'clamp(12px,2.5vw,15px)' }}>
        <div style={{ fontFamily: 'Outfit,sans-serif', fontSize: '12px', fontWeight: '600', letterSpacing: '0.06em', textTransform: 'uppercase', color: '#1E6B5E', marginBottom: '8px' }}>Tiến độ của bạn</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
          <div style={{ flex: '0 0 auto' }}>
            <div style={{ fontFamily: 'Outfit,sans-serif', fontSize: 'clamp(19px,3.5vw,23px)', fontWeight: '700', color: '#1E6B5E', lineHeight: '1.1' }}>{checkPercent}</div>
            <div style={{ fontSize: '12px', color: '#3D6A62', marginTop: '1px' }}>checklist làm độc lập</div>
          </div>
          <div style={{ flex: '1 1 120px', minWidth: '100px', height: '5px', borderRadius: '99px', background: '#CDE9E2', overflow: 'hidden' }}>
            <div style={{ height: '100%', background: '#4FB3A6', width: checkPercent }}></div>
          </div>
        </div>
        <div style={{ fontSize: '12px', color: '#3D6A62', marginTop: '8px', lineHeight: '1.45' }}>{quizTotalLabel}</div>
        <button onClick={onGoLotrinh} style={{ marginTop: '10px', border: '1px solid #4FB3A6', background: '#fff', color: '#1E6B5E', borderRadius: '10px', padding: '10px 14px', fontFamily: 'Outfit,sans-serif', fontSize: '13.5px', fontWeight: '600', cursor: 'pointer', minHeight: '40px', width: '100%' }}>🧭 Tiếp tục lộ trình training</button>
      </section>

      <section style={{ background: '#fff', border: '1px solid #E6E8EF', borderRadius: '14px', padding: 'clamp(12px,2.5vw,15px)' }}>
        <div style={{ fontFamily: 'Outfit,sans-serif', fontSize: '12px', fontWeight: '600', letterSpacing: '0.06em', textTransform: 'uppercase', color: '#6B7080', marginBottom: '8px' }}>Nhắc nhanh</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(200px,100%),1fr))', alignItems: 'start', gap: '7px' }}>
          {[
            'Trẻ em dưới 1m miễn phí vé Sun World Hòn Thơm và Vin Phú Quốc.',
            'Mỗi ngày trong combo chỉ chọn 01 chương trình full-day.',
            'Không ghép Hòn Thơm với tour tàu trong cùng một ngày.',
          ].map((text) => (
            <div key={text} style={{ display: 'flex', gap: '6px', alignItems: 'baseline' }}>
              <span style={{ color: '#4FB3A6', fontWeight: '700', flex: '0 0 auto' }}>·</span>
              <span style={{ fontSize: 'clamp(12px,1.2vw,12.5px)', lineHeight: '1.5', color: '#3A3E4C', textWrap: 'pretty' }}>{text}</span>
            </div>
          ))}
        </div>
      </section>
    </aside>
  )
}
