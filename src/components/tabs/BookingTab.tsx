'use client'

import { useCopy } from '@/lib/clipboard'
import { BOOKING_FORM } from '@/data/quiz'

export default function BookingTab() {
  const { copy, copyBtn } = useCopy()
  const btn = copyBtn('booking', 'Copy form')
  return (

<div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <section style={{ background: "#fff", border: "1px solid #E6E8EF", borderRadius: "16px", padding: "clamp(18px,4.5vw,26px)" }}>
            <h2 style={{ fontFamily: "Outfit,sans-serif", fontSize: "22px", fontWeight: "600", color: "#2A2D5C", margin: "0 0 4px" }}>Quy trình chốt booking</h2>
            <p style={{ fontSize: "14px", color: "#6B7080", margin: "0" }}>Booking được xem là đã chốt khi khách cọc 30% và có bill chuyển khoản hợp lệ.</p>
          </section>

          <section style={{ background: "#fff", border: "1px solid #E6E8EF", borderRadius: "16px", padding: "clamp(18px,4.5vw,26px)" }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: "12px", marginBottom: "16px" }}>
              <span style={{ fontFamily: "Outfit,sans-serif", fontSize: "13px", fontWeight: "600", color: "#4FB3A6" }}>BƯỚC 1</span>
              <h3 style={{ fontFamily: "Outfit,sans-serif", fontSize: "19px", fontWeight: "600", color: "#2A2D5C", margin: "0" }}>Xác nhận lại thông tin</h3>
            </div>
            <p style={{ fontSize: "14.5px", color: "#3A3E4C", margin: "0 0 14px", lineHeight: "1.6" }}>Trước khi yêu cầu khách chuyển khoản, Sales phải xác nhận:</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(180px,100%),1fr))", gap: "8px" }}>
              <div style={{ border: "1px solid #E6E8EF", borderRadius: "10px", padding: "11px 13px", fontSize: "14px", color: "#3A3E4C" }}>Họ tên khách</div>
              <div style={{ border: "1px solid #E6E8EF", borderRadius: "10px", padding: "11px 13px", fontSize: "14px", color: "#3A3E4C" }}>Số điện thoại</div>
              <div style={{ border: "1px solid #E6E8EF", borderRadius: "10px", padding: "11px 13px", fontSize: "14px", color: "#3A3E4C" }}>Ngày sử dụng dịch vụ</div>
              <div style={{ border: "1px solid #E6E8EF", borderRadius: "10px", padding: "11px 13px", fontSize: "14px", color: "#3A3E4C" }}>Số lượng khách</div>
              <div style={{ border: "1px solid #E6E8EF", borderRadius: "10px", padding: "11px 13px", fontSize: "14px", color: "#3A3E4C" }}>Loại phòng hoặc dịch vụ</div>
              <div style={{ border: "1px solid #E6E8EF", borderRadius: "10px", padding: "11px 13px", fontSize: "14px", color: "#3A3E4C" }}>Giá bán</div>
              <div style={{ border: "1px solid #E6E8EF", borderRadius: "10px", padding: "11px 13px", fontSize: "14px", color: "#3A3E4C" }}>Tổng tiền</div>
              <div style={{ border: "1px solid #E6E8EF", borderRadius: "10px", padding: "11px 13px", fontSize: "14px", color: "#3A3E4C" }}>Tiền cọc</div>
              <div style={{ border: "1px solid #E6E8EF", borderRadius: "10px", padding: "11px 13px", fontSize: "14px", color: "#3A3E4C" }}>Số tiền còn lại</div>
              <div style={{ border: "1px solid #E6E8EF", borderRadius: "10px", padding: "11px 13px", fontSize: "14px", color: "#3A3E4C" }}>Chính sách hủy và thay đổi</div>
              <div style={{ border: "1px solid #E6E8EF", borderRadius: "10px", padding: "11px 13px", fontSize: "14px", color: "#3A3E4C" }}>Thông tin xuất hóa đơn nếu có</div>
            </div>
          </section>

          <section style={{ background: "#fff", border: "1px solid #E6E8EF", borderRadius: "16px", padding: "clamp(18px,4.5vw,26px)" }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: "12px", marginBottom: "16px" }}>
              <span style={{ fontFamily: "Outfit,sans-serif", fontSize: "13px", fontWeight: "600", color: "#4FB3A6" }}>BƯỚC 2</span>
              <h3 style={{ fontFamily: "Outfit,sans-serif", fontSize: "19px", fontWeight: "600", color: "#2A2D5C", margin: "0" }}>Gửi thông tin thanh toán</h3>
            </div>
            <p style={{ fontSize: "14.5px", color: "#3A3E4C", margin: "0 0 14px", lineHeight: "1.6" }}>Gửi đúng tên tài khoản, số tài khoản, ngân hàng, nội dung chuyển khoản và số tiền cần thanh toán.</p>
            <div style={{ padding: "14px 16px", background: "#FFF6F3", border: "1px solid #F6D9CF", borderRadius: "12px", fontSize: "14px", color: "#B4441F", lineHeight: "1.6" }}>Không gửi tài khoản cá nhân nếu công ty chưa cho phép. Thông tin tài khoản công ty do quản lý cung cấp riêng, không đăng trên tài liệu này.</div>
          </section>

          <section style={{ background: "#fff", border: "1px solid #E6E8EF", borderRadius: "16px", padding: "clamp(18px,4.5vw,26px)" }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: "12px", marginBottom: "16px" }}>
              <span style={{ fontFamily: "Outfit,sans-serif", fontSize: "13px", fontWeight: "600", color: "#4FB3A6" }}>BƯỚC 3</span>
              <h3 style={{ fontFamily: "Outfit,sans-serif", fontSize: "19px", fontWeight: "600", color: "#2A2D5C", margin: "0" }}>Kiểm tra bill</h3>
            </div>
            <ol style={{ margin: "0 0 18px", paddingLeft: "22px", display: "flex", flexDirection: "column", gap: "7px", fontSize: "14.5px", lineHeight: "1.6", color: "#3A3E4C" }}>
              <li>Kiểm tra số tiền.</li>
              <li>Kiểm tra nội dung chuyển khoản.</li>
              <li>Kiểm tra thời gian chuyển.</li>
              <li>Gửi bill vào nhóm hoặc hệ thống xác nhận thanh toán.</li>
              <li>Chỉ báo khách “đã xác nhận cọc” khi bộ phận phụ trách đã kiểm tra.</li>
            </ol>
            <div style={{ padding: "14px 16px", background: "#FFF6F3", border: "1px solid #F6D9CF", borderRadius: "12px", fontSize: "14px", color: "#B4441F", fontWeight: "500" }}>Không tự xác nhận thanh toán khi chưa kiểm tra được tiền.</div>
          </section>

          <section style={{ background: "#fff", border: "1px solid #E6E8EF", borderRadius: "16px", padding: "clamp(18px,4.5vw,26px)" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", flexWrap: "wrap", marginBottom: "6px" }}>
              <h3 style={{ fontFamily: "Outfit,sans-serif", fontSize: "19px", fontWeight: "600", color: "#2A2D5C", margin: "0" }}>Form NEW BOOKING</h3>
              <button onClick={() => copy(BOOKING_FORM, 'booking')} style={{ border: "1px solid #4FB3A6", background: btn.bg, color: btn.fg, borderRadius: "10px", padding: "10px 16px", fontFamily: "Outfit,sans-serif", fontSize: "13.5px", fontWeight: "500", cursor: "pointer", minHeight: "44px" }}>{btn.label}</button>
            </div>
            <p style={{ fontSize: "14px", color: "#6B7080", margin: "0 0 18px" }}>Sau khi khách cọc, Sales gửi booking và bill chuyển khoản vào nhóm phụ trách, dùng đúng form này.</p>
            <pre style={{ margin: "0 0 20px", background: "#2A2D5C", color: "#E8EAF6", borderRadius: "12px", padding: "clamp(14px,4vw,20px)", fontFamily: "ui-monospace,SFMono-Regular,Menlo,monospace", fontSize: "13.5px", lineHeight: "1.75", overflowX: "auto" }}>NEW BOOKING
Fanpage
+ Tên khách:
Sđt:
+ Check in:
+ Check out:
+ N of G:
+ N of Room:
+ Rate:
+ Service:
+ Total:
+ Dep:
+ Remain:</pre>
            <div style={{ fontSize: "13px", fontWeight: "600", color: "#2A2D5C", marginBottom: "10px" }}>Kèm theo</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(200px,100%),1fr))", gap: "8px", marginBottom: "20px" }}>
              <div style={{ border: "1px solid #E6E8EF", borderRadius: "10px", padding: "11px 13px", fontSize: "14px", color: "#3A3E4C" }}>Bill chuyển khoản</div>
              <div style={{ border: "1px solid #E6E8EF", borderRadius: "10px", padding: "11px 13px", fontSize: "14px", color: "#3A3E4C" }}>Yêu cầu đặc biệt của khách</div>
              <div style={{ border: "1px solid #E6E8EF", borderRadius: "10px", padding: "11px 13px", fontSize: "14px", color: "#3A3E4C" }}>Thông tin trẻ em</div>
              <div style={{ border: "1px solid #E6E8EF", borderRadius: "10px", padding: "11px 13px", fontSize: "14px", color: "#3A3E4C" }}>Giờ khách dự kiến đến</div>
              <div style={{ border: "1px solid #E6E8EF", borderRadius: "10px", padding: "11px 13px", fontSize: "14px", color: "#3A3E4C" }}>Thông tin cần lưu ý</div>
              <div style={{ border: "1px solid #E6E8EF", borderRadius: "10px", padding: "11px 13px", fontSize: "14px", color: "#3A3E4C" }}>Dịch vụ đã tặng hoặc ưu đãi</div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(220px,100%),1fr))", gap: "12px" }}>
              <div style={{ border: "1px solid #E6E8EF", borderRadius: "12px", padding: "16px" }}>
                <div style={{ fontFamily: "Outfit,sans-serif", fontWeight: "600", color: "#2A2D5C", fontSize: "15px" }}>Reservation</div>
                <div style={{ fontSize: "13.5px", color: "#6B7080", marginTop: "6px", lineHeight: "1.55" }}>Xử lý phần phòng.</div>
              </div>
              <div style={{ border: "1px solid #E6E8EF", borderRadius: "12px", padding: "16px" }}>
                <div style={{ fontFamily: "Outfit,sans-serif", fontWeight: "600", color: "#2A2D5C", fontSize: "15px" }}>Tour / Điều hành</div>
                <div style={{ fontSize: "13.5px", color: "#6B7080", marginTop: "6px", lineHeight: "1.55" }}>Xử lý tour, vé và dịch vụ.</div>
              </div>
              <div style={{ border: "1px solid #E6E8EF", borderRadius: "12px", padding: "16px" }}>
                <div style={{ fontFamily: "Outfit,sans-serif", fontWeight: "600", color: "#2A2D5C", fontSize: "15px" }}>Sales</div>
                <div style={{ fontSize: "13.5px", color: "#6B7080", marginTop: "6px", lineHeight: "1.55" }}>Theo dõi cho đến khi nhận được xác nhận booking.</div>
              </div>
            </div>
            <div style={{ marginTop: "16px", padding: "14px 16px", background: "#FFF6F3", border: "1px solid #F6D9CF", borderRadius: "12px", fontSize: "14px", color: "#B4441F", lineHeight: "1.6" }}>Không xem việc gửi booking là đã hoàn thành. Sales phải kiểm tra lại xem các bộ phận đã xác nhận đủ dịch vụ chưa.</div>
          </section>
        </div>
  )
}
