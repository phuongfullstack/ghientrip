interface HomeTabProps {
  onQuickScripts: () => void
  onQuickGiaVe: () => void
  onQuickCalc: () => void
}

export default function HomeTab({ onQuickScripts, onQuickGiaVe, onQuickCalc }: HomeTabProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ background: '#2A2D5C', borderRadius: '16px', padding: '18px 20px' }}>
        <div style={{ fontFamily: 'Outfit,sans-serif', fontSize: '12px', fontWeight: '600', letterSpacing: '.06em', textTransform: 'uppercase', color: '#7FD8C9', marginBottom: '12px' }}>Bắt đầu nhanh</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(200px,100%),1fr))', gap: '10px' }}>
          <button className="qa-btn" onClick={onQuickScripts}><span className="qa-ico">🔎</span><span className="qa-txt"><b>Tìm script</b><small>152 mẫu — hoặc nhấn phím <kbd>/</kbd></small></span></button>
          <button className="qa-btn" onClick={onQuickGiaVe}><span className="qa-ico">🧾</span><span className="qa-txt"><b>Bảng giá vé</b><small>Sun World + Vin — phím <kbd>8</kbd></small></span></button>
          <button className="qa-btn" onClick={onQuickCalc}><span className="qa-ico">🧮</span><span className="qa-txt"><b>Tính báo giá</b><small>Kèm văn mẫu copy — phím <kbd>8</kbd></small></span></button>
        </div>
      </div>

      <section style={{ background: '#fff', border: '1px solid #E6E8EF', borderRadius: '16px', padding: 'clamp(18px,4.5vw,28px)' }}>
        <div style={{ display: 'inline-block', padding: '5px 11px', borderRadius: '999px', background: '#EAF7F4', color: '#1E6B5E', fontSize: '11px', fontWeight: '600', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Nguyên tắc cốt lõi</div>
        <div className="pr-chips">
          {['Hỏi đúng nhu cầu', 'Tư vấn đúng sản phẩm', 'Báo giá rõ ràng', 'Theo sát khách', 'Chốt đúng thông tin', 'Bàn giao đầy đủ', 'Chăm sóc đến khi hoàn tất'].map((t, i) => (
            <div key={t} className="pr-chip"><span>{String(i + 1).padStart(2, '0')}</span>{t}</div>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginTop: '24px', paddingTop: '22px', borderTop: '1px solid #EEF0F5' }}>
          {[
            { v: '📥 10–30', d: 'lead/ngày, tùy lượng khách thực tế', c: '#2A2D5C', w: '600' },
            { v: '⏱ 05 phút', d: 'thời gian phản hồi tối đa cho lead mới', c: '#1E6B5E', w: '700' },
            { v: '💰 30%', d: 'tiền cọc để booking được tính là đã chốt', c: '#2A2D5C', w: '600' },
            { v: '📅 7 ngày', d: 'lộ trình training trước khi làm độc lập', c: '#2A2D5C', w: '600' },
          ].map((s) => (
            <div key={s.v} style={{ flex: '1 1 150px' }}>
              <div style={{ fontFamily: 'Outfit,sans-serif', fontSize: '22px', fontWeight: s.w as string, color: s.c }}>{s.v}</div>
              <div style={{ fontSize: '13px', color: '#6B7080', marginTop: '2px' }}>{s.d}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: '#fff', border: '1px solid #E6E8EF', borderRadius: '16px', padding: 'clamp(18px,4.5vw,26px)' }}>
        <h2 style={{ fontFamily: 'Outfit,sans-serif', fontSize: '20px', fontWeight: '600', color: '#2A2D5C', margin: '0 0 4px' }}>Phạm vi công việc</h2>
        <p style={{ fontSize: '14px', color: '#6B7080', margin: '0 0 20px' }}>Bộ phận Sales – Chăm sóc khách hàng. Trực Fanpage xuyên suốt các ngày trong tuần.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(200px,100%),1fr))', gap: '12px' }}>
          {[
            ['Phòng', 'Khách sạn, căn hộ, villa. Bắc đảo – trung tâm – Nam đảo.'],
            ['Tour', 'Tour đảo, câu cá – lặn san hô, city tour, du thuyền 3 đảo.'],
            ['Vé vui chơi', 'Sun World Hòn Thơm, Vinpearl, Grand World, show diễn.'],
            ['Combo', '2N1Đ đến 5N4Đ, ghép phòng với vé, tour và show.'],
          ].map(([title, desc]) => (
            <div key={title} style={{ border: '1px solid #E6E8EF', borderRadius: '12px', padding: '16px' }}>
              <div style={{ fontFamily: 'Outfit,sans-serif', fontWeight: '600', color: '#2A2D5C', fontSize: '15px' }}>{title}</div>
              <div style={{ fontSize: '13px', color: '#6B7080', marginTop: '6px', lineHeight: '1.55' }}>{desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: '#fff', border: '1px solid #E6E8EF', borderRadius: '16px', padding: 'clamp(18px,4.5vw,26px)' }}>
        <h2 style={{ fontFamily: 'Outfit,sans-serif', fontSize: '20px', fontWeight: '600', color: '#2A2D5C', margin: '0 0 4px' }}>Mục tiêu công việc</h2>
        <p style={{ fontSize: '14px', color: '#6B7080', margin: '0 0 18px' }}>Sáu việc phải làm đủ mỗi ngày.</p>
        <ol style={{ margin: '0', paddingLeft: '22px', display: 'flex', flexDirection: 'column', gap: '9px', fontSize: '14.5px', lineHeight: '1.6', color: '#3A3E4C' }}>
          <li>Trực Fanpage xuyên suốt các ngày trong tuần.</li>
          <li>Tiếp nhận và xử lý khoảng 10–30 lead/ngày, tùy lượng khách thực tế.</li>
          <li>Tư vấn phòng, tour, vé vui chơi và combo du lịch Phú Quốc.</li>
          <li>Theo sát khách từ lúc hỏi thông tin đến khi chốt cọc.</li>
          <li>Chăm sóc khách trước, trong và sau khi sử dụng dịch vụ.</li>
          <li>Cập nhật đầy đủ thông tin khách hàng và báo cáo kết quả hằng ngày.</li>
          <li>Bàn giao booking chính xác cho bộ phận Reservation, Tour hoặc Điều hành.</li>
        </ol>
      </section>

      <section style={{ background: '#2A2D5C', borderRadius: '16px', padding: '26px', color: '#fff' }}>
        <h2 style={{ fontFamily: 'Outfit,sans-serif', fontSize: '20px', fontWeight: '600', margin: '0 0 4px' }}>Tiêu chuẩn tư vấn — những điều không được làm</h2>
        <p style={{ fontSize: '14px', color: '#A9AECB', margin: '0 0 18px' }}>Áp dụng cho mọi kênh: tin nhắn, bình luận, điện thoại.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(230px,100%),1fr))', gap: '10px' }}>
          {[
            'Không báo sai giá',
            'Không hứa dịch vụ khi chưa kiểm tra',
            'Không tự ý giảm giá',
            'Không gửi thông tin nội bộ cho khách',
            'Không tranh cãi với khách hàng',
            'Không trả lời cụt lủn, không dùng từ khó hiểu',
            'Không gây áp lực quá mức cho khách',
            'Không giành khách của nhân viên khác',
          ].map((t) => (
            <div key={t} style={{ background: '#353A6E', borderRadius: '10px', padding: '13px 15px', fontSize: '14px' }}>{t}</div>
          ))}
        </div>
      </section>
    </div>
  )
}
