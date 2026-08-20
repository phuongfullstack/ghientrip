'use client'

import { useCopy } from '@/lib/clipboard'
import { REPORT_FORM } from '@/data/quiz'

export default function CareTab() {
  const { copy, copyBtn } = useCopy()
  const btn = copyBtn('report', 'Copy mẫu')
  return (

<div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <section style={{ background: "#fff", border: "1px solid #E6E8EF", borderRadius: "16px", padding: "clamp(18px,4.5vw,26px)" }}>
            <h2 style={{ fontFamily: "Outfit,sans-serif", fontSize: "22px", fontWeight: "600", color: "#2A2D5C", margin: "0 0 4px" }}>Chăm sóc trước khi sử dụng dịch vụ</h2>
            <p style={{ fontSize: "14px", color: "#6B7080", margin: "0 0 18px" }}>Trước ngày khách sử dụng dịch vụ, Sales cần làm đủ những việc sau.</p>
            <ul style={{ margin: "0 0 20px", paddingLeft: "22px", display: "flex", flexDirection: "column", gap: "8px", fontSize: "14.5px", lineHeight: "1.6", color: "#3A3E4C" }}>
              <li>Gửi xác nhận booking.</li>
              <li>Gửi địa chỉ.</li>
              <li>Gửi giờ check-in hoặc giờ tập trung.</li>
              <li>Gửi số điện thoại hỗ trợ.</li>
              <li>Nhắc khách chuẩn bị giấy tờ cần thiết.</li>
              <li>Nhắc lịch thanh toán số tiền còn lại.</li>
              <li>Gửi lịch trình hoặc vé điện tử.</li>
              <li>Kiểm tra lại thời tiết, lịch show hoặc thay đổi dịch vụ nếu có.</li>
            </ul>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(240px,100%),1fr))", gap: "12px" }}>
              <div style={{ border: "1px solid #E6E8EF", borderRadius: "12px", padding: "18px" }}>
                <div style={{ fontFamily: "Outfit,sans-serif", fontWeight: "600", color: "#2A2D5C", fontSize: "16px", marginBottom: "10px" }}>Khách ở phòng</div>
                <ul style={{ margin: "0", paddingLeft: "18px", fontSize: "14px", lineHeight: "1.65", color: "#3A3E4C" }}>
                  <li>Xác nhận giờ đến</li>
                  <li>Hướng dẫn nhận phòng</li>
                  <li>Nhắc giờ check-in và check-out</li>
                </ul>
              </div>
              <div style={{ border: "1px solid #E6E8EF", borderRadius: "12px", padding: "18px" }}>
                <div style={{ fontFamily: "Outfit,sans-serif", fontWeight: "600", color: "#2A2D5C", fontSize: "16px", marginBottom: "10px" }}>Khách đi tour</div>
                <ul style={{ margin: "0", paddingLeft: "18px", fontSize: "14px", lineHeight: "1.65", color: "#3A3E4C" }}>
                  <li>Xác nhận giờ đón</li>
                  <li>Điểm đón</li>
                  <li>Trang phục và đồ dùng cần mang theo</li>
                  <li>Số điện thoại hướng dẫn viên hoặc điều hành</li>
                </ul>
              </div>
            </div>
          </section>

          <section style={{ background: "#fff", border: "1px solid #E6E8EF", borderRadius: "16px", padding: "clamp(18px,4.5vw,26px)" }}>
            <h3 style={{ fontFamily: "Outfit,sans-serif", fontSize: "19px", fontWeight: "600", color: "#2A2D5C", margin: "0 0 4px" }}>Trong khi khách sử dụng dịch vụ</h3>
            <p style={{ fontSize: "14px", color: "#6B7080", margin: "0 0 18px" }}>Sales cần chủ động hỏi, không chờ khách phản ánh.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(210px,100%),1fr))", gap: "8px", marginBottom: "22px" }}>
              <div style={{ border: "1px solid #E6E8EF", borderRadius: "10px", padding: "11px 13px", fontSize: "14px", color: "#3A3E4C" }}>Khách đã nhận phòng chưa</div>
              <div style={{ border: "1px solid #E6E8EF", borderRadius: "10px", padding: "11px 13px", fontSize: "14px", color: "#3A3E4C" }}>Phòng có đúng yêu cầu không</div>
              <div style={{ border: "1px solid #E6E8EF", borderRadius: "10px", padding: "11px 13px", fontSize: "14px", color: "#3A3E4C" }}>Khách đã nhận vé chưa</div>
              <div style={{ border: "1px solid #E6E8EF", borderRadius: "10px", padding: "11px 13px", fontSize: "14px", color: "#3A3E4C" }}>Xe hoặc tour có đón đúng giờ không</div>
              <div style={{ border: "1px solid #E6E8EF", borderRadius: "10px", padding: "11px 13px", fontSize: "14px", color: "#3A3E4C" }}>Khách có cần hỗ trợ thêm không</div>
            </div>
            <div style={{ fontSize: "13px", fontWeight: "600", color: "#2A2D5C", marginBottom: "10px" }}>Khi có sự cố</div>
            <ol style={{ margin: "0 0 16px", paddingLeft: "22px", display: "flex", flexDirection: "column", gap: "7px", fontSize: "14.5px", lineHeight: "1.6", color: "#3A3E4C" }}>
              <li>Tiếp nhận thông tin.</li>
              <li>Xin lỗi và trấn an khách.</li>
              <li>Không tranh cãi.</li>
              <li>Ghi nhận đầy đủ hình ảnh, thời gian và nội dung.</li>
              <li>Chuyển ngay cho bộ phận phụ trách.</li>
              <li>Theo sát đến khi có phương án xử lý.</li>
              <li>Cập nhật lại cho khách.</li>
            </ol>
            <div style={{ padding: "14px 16px", background: "#FFF6F3", border: "1px solid #F6D9CF", borderRadius: "12px", fontSize: "14px", color: "#B4441F", lineHeight: "1.6" }}>Không tự cam kết hoàn tiền, đổi phòng hoặc bồi thường khi chưa được cấp quản lý duyệt.</div>
          </section>

          <section style={{ background: "#fff", border: "1px solid #E6E8EF", borderRadius: "16px", padding: "clamp(18px,4.5vw,26px)" }}>
            <h3 style={{ fontFamily: "Outfit,sans-serif", fontSize: "19px", fontWeight: "600", color: "#2A2D5C", margin: "0 0 18px" }}>Chăm sóc sau bán</h3>
            <ul style={{ margin: "0 0 18px", paddingLeft: "22px", display: "flex", flexDirection: "column", gap: "8px", fontSize: "14.5px", lineHeight: "1.6", color: "#3A3E4C" }}>
              <li>Hỏi thăm trải nghiệm.</li>
              <li>Cảm ơn khách.</li>
              <li>Xin đánh giá.</li>
              <li>Xin hình ảnh nếu khách đồng ý.</li>
              <li>Lưu thông tin để chăm sóc lại.</li>
              <li>Giới thiệu chương trình ưu đãi cho lần sau.</li>
              <li>Xin khách giới thiệu bạn bè hoặc người thân.</li>
            </ul>
            <blockquote style={{ margin: "0", padding: "16px 18px", background: "#F5F6FA", borderLeft: "3px solid #4FB3A6", borderRadius: "0 10px 10px 0", fontSize: "14.5px", lineHeight: "1.65", color: "#2C2F3A" }}>“Dạ chuyến đi của gia đình mình đã ổn chưa ạ? Em cảm ơn anh/chị đã sử dụng dịch vụ bên em. Nếu có góp ý gì, anh/chị chia sẻ để bên em phục vụ tốt hơn trong những lần sau nhé.”</blockquote>
          </section>

          <section style={{ background: "#fff", border: "1px solid #E6E8EF", borderRadius: "16px", padding: "clamp(18px,4.5vw,26px)" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", flexWrap: "wrap", marginBottom: "6px" }}>
              <h3 style={{ fontFamily: "Outfit,sans-serif", fontSize: "19px", fontWeight: "600", color: "#2A2D5C", margin: "0" }}>Báo cáo cuối ngày</h3>
              <button onClick={() => copy(REPORT_FORM, 'report')} style={{ border: "1px solid #4FB3A6", background: btn.bg, color: btn.fg, borderRadius: "10px", padding: "10px 16px", fontFamily: "Outfit,sans-serif", fontSize: "13.5px", fontWeight: "500", cursor: "pointer", minHeight: "44px" }}>{btn.label}</button>
            </div>
            <p style={{ fontSize: "14px", color: "#6B7080", margin: "0 0 18px" }}>Cuối ngày, Sales gửi báo cáo theo đúng mẫu.</p>
            <pre style={{ margin: "0", background: "#2A2D5C", color: "#E8EAF6", borderRadius: "12px", padding: "clamp(14px,4vw,20px)", fontFamily: "ui-monospace,SFMono-Regular,Menlo,monospace", fontSize: "13.5px", lineHeight: "1.75", overflowX: "auto" }}>{REPORT_FORM}</pre>
          </section>
        </div>
  )
}
