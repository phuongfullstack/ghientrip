export default function LeadTab() {
  return (
<div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <section style={{ background: "#fff", border: "1px solid #E6E8EF", borderRadius: "16px", padding: "clamp(18px,4.5vw,26px)" }}>
            <h2 style={{ fontFamily: "Outfit,sans-serif", fontSize: "22px", fontWeight: "600", color: "#2A2D5C", margin: "0 0 4px" }}>13 trạng thái lead cần cập nhật</h2>
            <p style={{ fontSize: "14px", color: "#6B7080", margin: "0 0 20px" }}>Không được để lead không có trạng thái.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "14px", padding: "12px 14px", border: "1px solid #E6E8EF", borderRadius: "10px" }}><span style={{ fontFamily: "Outfit,sans-serif", fontSize: "13px", fontWeight: "600", color: "#9AA0B4", minWidth: "22px" }}>01</span><span style={{ fontSize: "14.5px", color: "#2C2F3A" }}>Lead mới</span></div>
              <div style={{ display: "flex", alignItems: "center", gap: "14px", padding: "12px 14px", border: "1px solid #E6E8EF", borderRadius: "10px" }}><span style={{ fontFamily: "Outfit,sans-serif", fontSize: "13px", fontWeight: "600", color: "#9AA0B4", minWidth: "22px" }}>02</span><span style={{ fontSize: "14.5px", color: "#2C2F3A" }}>Đã liên hệ</span></div>
              <div style={{ display: "flex", alignItems: "center", gap: "14px", padding: "12px 14px", border: "1px solid #E6E8EF", borderRadius: "10px" }}><span style={{ fontFamily: "Outfit,sans-serif", fontSize: "13px", fontWeight: "600", color: "#9AA0B4", minWidth: "22px" }}>03</span><span style={{ fontSize: "14.5px", color: "#2C2F3A" }}>Đang khai thác nhu cầu</span></div>
              <div style={{ display: "flex", alignItems: "center", gap: "14px", padding: "12px 14px", border: "1px solid #E6E8EF", borderRadius: "10px" }}><span style={{ fontFamily: "Outfit,sans-serif", fontSize: "13px", fontWeight: "600", color: "#9AA0B4", minWidth: "22px" }}>04</span><span style={{ fontSize: "14.5px", color: "#2C2F3A" }}>Đã báo giá</span></div>
              <div style={{ display: "flex", alignItems: "center", gap: "14px", padding: "12px 14px", border: "1px solid #E6E8EF", borderRadius: "10px" }}><span style={{ fontFamily: "Outfit,sans-serif", fontSize: "13px", fontWeight: "600", color: "#9AA0B4", minWidth: "22px" }}>05</span><span style={{ fontSize: "14.5px", color: "#2C2F3A" }}>Đang cân nhắc</span></div>
              <div style={{ display: "flex", alignItems: "center", gap: "14px", padding: "12px 14px", border: "1px solid #E6E8EF", borderRadius: "10px" }}><span style={{ fontFamily: "Outfit,sans-serif", fontSize: "13px", fontWeight: "600", color: "#9AA0B4", minWidth: "22px" }}>06</span><span style={{ fontSize: "14.5px", color: "#2C2F3A" }}>Chờ xác nhận dịch vụ</span></div>
              <div style={{ display: "flex", alignItems: "center", gap: "14px", padding: "12px 14px", border: "1px solid #E6E8EF", borderRadius: "10px" }}><span style={{ fontFamily: "Outfit,sans-serif", fontSize: "13px", fontWeight: "600", color: "#9AA0B4", minWidth: "22px" }}>07</span><span style={{ fontSize: "14.5px", color: "#2C2F3A" }}>Chờ khách cọc</span></div>
              <div style={{ display: "flex", alignItems: "center", gap: "14px", padding: "12px 14px", border: "1px solid #D4EFE8", background: "#F4FBF9", borderRadius: "10px" }}><span style={{ fontFamily: "Outfit,sans-serif", fontSize: "13px", fontWeight: "600", color: "#4FB3A6", minWidth: "22px" }}>08</span><span style={{ fontSize: "14.5px", color: "#1E6B5E", fontWeight: "500" }}>Đã cọc</span></div>
              <div style={{ display: "flex", alignItems: "center", gap: "14px", padding: "12px 14px", border: "1px solid #D4EFE8", background: "#F4FBF9", borderRadius: "10px" }}><span style={{ fontFamily: "Outfit,sans-serif", fontSize: "13px", fontWeight: "600", color: "#4FB3A6", minWidth: "22px" }}>09</span><span style={{ fontSize: "14.5px", color: "#1E6B5E", fontWeight: "500" }}>Đã tạo booking</span></div>
              <div style={{ display: "flex", alignItems: "center", gap: "14px", padding: "12px 14px", border: "1px solid #D4EFE8", background: "#F4FBF9", borderRadius: "10px" }}><span style={{ fontFamily: "Outfit,sans-serif", fontSize: "13px", fontWeight: "600", color: "#4FB3A6", minWidth: "22px" }}>10</span><span style={{ fontSize: "14.5px", color: "#1E6B5E", fontWeight: "500" }}>Đã bàn giao</span></div>
              <div style={{ display: "flex", alignItems: "center", gap: "14px", padding: "12px 14px", border: "1px solid #D4EFE8", background: "#F4FBF9", borderRadius: "10px" }}><span style={{ fontFamily: "Outfit,sans-serif", fontSize: "13px", fontWeight: "600", color: "#4FB3A6", minWidth: "22px" }}>11</span><span style={{ fontSize: "14.5px", color: "#1E6B5E", fontWeight: "500" }}>Hoàn thành dịch vụ</span></div>
              <div style={{ display: "flex", alignItems: "center", gap: "14px", padding: "12px 14px", border: "1px solid #F6D9CF", background: "#FFF9F7", borderRadius: "10px" }}><span style={{ fontFamily: "Outfit,sans-serif", fontSize: "13px", fontWeight: "600", color: "#D9754C", minWidth: "22px" }}>12</span><span style={{ fontSize: "14.5px", color: "#B4441F" }}>Không chốt</span></div>
              <div style={{ display: "flex", alignItems: "center", gap: "14px", padding: "12px 14px", border: "1px solid #F6D9CF", background: "#FFF9F7", borderRadius: "10px" }}><span style={{ fontFamily: "Outfit,sans-serif", fontSize: "13px", fontWeight: "600", color: "#D9754C", minWidth: "22px" }}>13</span><span style={{ fontSize: "14.5px", color: "#B4441F" }}>Hủy booking</span></div>
            </div>
          </section>

          <section style={{ background: "#fff", border: "1px solid #E6E8EF", borderRadius: "16px", padding: "clamp(18px,4.5vw,26px)" }}>
            <h3 style={{ fontFamily: "Outfit,sans-serif", fontSize: "19px", fontWeight: "600", color: "#2A2D5C", margin: "0 0 4px" }}>Nếu khách không chốt, ghi rõ lý do</h3>
            <p style={{ fontSize: "14px", color: "#6B7080", margin: "0 0 18px" }}>Chọn đúng một trong bảy lý do dưới đây.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(210px,100%),1fr))", gap: "8px" }}>
              <div style={{ border: "1px solid #E6E8EF", borderRadius: "10px", padding: "12px 14px", fontSize: "14px", color: "#3A3E4C" }}>Giá cao</div>
              <div style={{ border: "1px solid #E6E8EF", borderRadius: "10px", padding: "12px 14px", fontSize: "14px", color: "#3A3E4C" }}>Không còn phòng</div>
              <div style={{ border: "1px solid #E6E8EF", borderRadius: "10px", padding: "12px 14px", fontSize: "14px", color: "#3A3E4C" }}>Thay đổi ngày đi</div>
              <div style={{ border: "1px solid #E6E8EF", borderRadius: "10px", padding: "12px 14px", fontSize: "14px", color: "#3A3E4C" }}>Khách chọn đơn vị khác</div>
              <div style={{ border: "1px solid #E6E8EF", borderRadius: "10px", padding: "12px 14px", fontSize: "14px", color: "#3A3E4C" }}>Không liên hệ được</div>
              <div style={{ border: "1px solid #E6E8EF", borderRadius: "10px", padding: "12px 14px", fontSize: "14px", color: "#3A3E4C" }}>Khách chưa có kế hoạch cụ thể</div>
              <div style={{ border: "1px solid #E6E8EF", borderRadius: "10px", padding: "12px 14px", fontSize: "14px", color: "#3A3E4C" }}>Dịch vụ không phù hợp</div>
            </div>
          </section>

          <section style={{ background: "#fff", border: "1px solid #E6E8EF", borderRadius: "16px", padding: "clamp(18px,4.5vw,26px)" }}>
            <h3 style={{ fontFamily: "Outfit,sans-serif", fontSize: "19px", fontWeight: "600", color: "#2A2D5C", margin: "0 0 4px" }}>Quy định trực Fanpage</h3>
            <p style={{ fontSize: "14px", color: "#6B7080", margin: "0 0 18px" }}>Công cụ: Pancake quản lý tin nhắn, Tourwell quản lý booking và vận hành dịch vụ.</p>
            <ul style={{ margin: "0", paddingLeft: "22px", display: "flex", flexDirection: "column", gap: "8px", fontSize: "14.5px", lineHeight: "1.6", color: "#3A3E4C" }}>
              <li>Nhân viên trực Fanpage tất cả các ngày trong tuần.</li>
              <li>Phải thường xuyên kiểm tra tin nhắn và phản hồi khách kịp thời.</li>
              <li>Không được bỏ sót tin nhắn, bình luận hoặc khách cũ nhắn lại.</li>
              <li>Không tự ý tắt thông báo trong thời gian trực.</li>
              <li>Khi bận hoặc nghỉ phải báo trước và bàn giao khách đang tư vấn.</li>
              <li>Khách cũ nhắn lại ưu tiên để Sales cũ tiếp tục chăm sóc.</li>
              <li>Không tự ý giành khách của nhân viên khác.</li>
              <li>Không xóa tin nhắn hoặc thay đổi thông tin khách hàng.</li>
              <li>Không sử dụng thông tin khách hàng cho mục đích cá nhân.</li>
            </ul>
          </section>
        </div>
  )
}
