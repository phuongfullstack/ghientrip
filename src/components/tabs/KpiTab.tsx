'use client'

import { CHECKLIST } from '@/data/quiz'

interface KpiTabProps {
  done: Record<number, boolean>
  onToggle: (i: number) => void
  onReset: () => void
}

export default function KpiTab({ done, onToggle, onReset }: KpiTabProps) {
  const doneCount = CHECKLIST.filter((_, i) => done[i]).length

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <section style={{ background: '#fff', border: '1px solid #E6E8EF', borderRadius: '16px', padding: 'clamp(18px,4.5vw,26px)' }}>
        <h2 style={{ fontFamily: 'Outfit,sans-serif', fontSize: '22px', fontWeight: '600', color: '#2A2D5C', margin: '0 0 4px' }}>KPI đánh giá nhân viên</h2>
        <p style={{ fontSize: '14px', color: '#6B7080', margin: '0 0 18px' }}>Không chỉ đánh giá dựa trên số booking chốt, mà còn đánh giá thái độ, trách nhiệm và khả năng theo sát khách.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(230px,100%),1fr))', gap: '8px' }}>
          {[
            'Tỷ lệ phản hồi lead',
            'Thời gian phản hồi khách',
            'Tỷ lệ khách được cập nhật trạng thái',
            'Tỷ lệ chăm sóc lại',
            'Số booking chốt',
            'Doanh thu hoặc lợi nhuận gộp',
            'Độ chính xác của booking',
            'Tỷ lệ khách phàn nàn',
            'Tinh thần phối hợp với team',
            'Việc tuân thủ quy trình và báo cáo',
          ].map((t) => (
            <div key={t} style={{ border: '1px solid #E6E8EF', borderRadius: '10px', padding: '12px 14px', fontSize: '14px', color: '#3A3E4C' }}>{t}</div>
          ))}
        </div>
        <div style={{ marginTop: '18px', padding: '14px 16px', background: '#F5F6FA', border: '1px solid #E6E8EF', borderRadius: '12px', fontSize: '13.5px', color: '#6B7080', lineHeight: '1.6' }}>Quy chế lương – thưởng, target doanh thu và tỷ lệ hoa hồng không đăng trên tài liệu này. Xem bản nội bộ do quản lý cung cấp.</div>
      </section>

      <section style={{ background: '#fff', border: '1px solid #E6E8EF', borderRadius: '16px', padding: 'clamp(18px,4.5vw,26px)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '14px', flexWrap: 'wrap', marginBottom: '6px' }}>
          <h3 style={{ fontFamily: 'Outfit,sans-serif', fontSize: '19px', fontWeight: '600', color: '#2A2D5C', margin: '0' }}>Checklist trước khi làm độc lập</h3>
          <button onClick={onReset} style={{ border: '1px solid #D9DCE6', background: '#fff', color: '#6B7080', borderRadius: '9px', padding: '9px 14px', fontFamily: 'Outfit,sans-serif', fontSize: '13px', cursor: 'pointer', minHeight: '40px' }}>Đặt lại</button>
        </div>
        <p style={{ fontSize: '14px', color: '#6B7080', margin: '0 0 18px' }}>{doneCount}/{CHECKLIST.length} mục đã đạt — tiến độ được lưu trên máy của bạn.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {CHECKLIST.map((text, i) => {
            const on = !!done[i]
            return (
              <button key={i} onClick={() => onToggle(i)} style={{ display: 'flex', alignItems: 'center', gap: '14px', textAlign: 'left', width: '100%', border: `1px solid ${on ? '#D4EFE8' : '#E6E8EF'}`, background: on ? '#F4FBF9' : '#fff', borderRadius: '11px', padding: '14px 16px', cursor: 'pointer', minHeight: '52px', fontFamily: "'Be Vietnam Pro',sans-serif" }}>
                <span style={{ width: '22px', height: '22px', flex: '0 0 22px', borderRadius: '6px', border: `1.5px solid ${on ? '#4FB3A6' : '#C9CDDB'}`, background: on ? '#4FB3A6' : '#fff', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: '700' }}>{on ? '✓' : ''}</span>
                <span style={{ fontFamily: 'Outfit,sans-serif', fontSize: '12.5px', fontWeight: '600', color: '#9AA0B4', minWidth: '20px' }}>{String(i + 1).padStart(2, '0')}</span>
                <span style={{ fontSize: '14.5px', color: on ? '#1E6B5E' : '#2C2F3A', lineHeight: '1.5' }}>{text}</span>
              </button>
            )
          })}
        </div>
      </section>

      <section style={{ background: '#fff', border: '1px solid #E6E8EF', borderRadius: '16px', padding: 'clamp(18px,4.5vw,26px)' }}>
        <h3 style={{ fontFamily: 'Outfit,sans-serif', fontSize: '19px', fontWeight: '600', color: '#2A2D5C', margin: '0 0 18px' }}>Xác nhận hoàn thành training</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(240px,100%),1fr))', gap: '14px' }}>
          <div style={{ border: '1px dashed #C9CDDB', borderRadius: '12px', padding: '20px' }}>
            <div style={{ fontFamily: 'Outfit,sans-serif', fontSize: '14px', fontWeight: '600', color: '#2A2D5C', marginBottom: '16px' }}>Nhân viên được training</div>
            <div style={{ fontSize: '14px', color: '#6B7080', lineHeight: '2.2' }}>Họ tên: ____________________<br />Ngày: ____/____/________</div>
          </div>
          <div style={{ border: '1px dashed #C9CDDB', borderRadius: '12px', padding: '20px' }}>
            <div style={{ fontFamily: 'Outfit,sans-serif', fontSize: '14px', fontWeight: '600', color: '#2A2D5C', marginBottom: '16px' }}>Người training</div>
            <div style={{ fontSize: '14px', color: '#6B7080', lineHeight: '2.2' }}>Họ tên: ____________________<br />Ngày: ____/____/________</div>
          </div>
        </div>
      </section>
    </div>
  )
}
