export default function ProcessTab() {
  return (
<div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <section style={{ background: "#fff", border: "1px solid #E6E8EF", borderRadius: "16px", padding: "clamp(18px,4.5vw,26px)" }}>
            <h2 style={{ fontFamily: "Outfit,sans-serif", fontSize: "22px", fontWeight: "600", color: "#2A2D5C", margin: "0 0 4px" }}>Quy trình làm việc hằng ngày</h2>
            <p style={{ fontSize: "14px", color: "#6B7080", margin: "0" }}>Sáu bước, theo đúng thứ tự, từ đầu ca đến khi khách chốt cọc.</p>
          </section>

          <section style={{ background: "#fff", border: "1px solid #E6E8EF", borderRadius: "16px", padding: "clamp(18px,4.5vw,26px)" }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: "12px", marginBottom: "16px" }}>
              <span style={{ fontFamily: "Outfit,sans-serif", fontSize: "13px", fontWeight: "600", color: "#4FB3A6" }}>BƯỚC 1</span>
              <h3 style={{ fontFamily: "Outfit,sans-serif", fontSize: "19px", fontWeight: "600", color: "#2A2D5C", margin: "0" }}>Kiểm tra đầu ca</h3>
            </div>
            <ol style={{ margin: "0 0 20px", paddingLeft: "22px", display: "flex", flexDirection: "column", gap: "7px", fontSize: "14.5px", lineHeight: "1.6", color: "#3A3E4C" }}>
              <li>Kiểm tra toàn bộ tin nhắn mới trên Fanpage.</li>
              <li>Kiểm tra bình luận chưa phản hồi.</li>
              <li>Kiểm tra khách cũ đã báo giá nhưng chưa chốt.</li>
              <li>Kiểm tra booking đang chờ khách cọc.</li>
              <li>Kiểm tra các thông báo thay đổi giá, tình trạng phòng, tour hoặc vé.</li>
              <li>Xem lại khách đang sử dụng dịch vụ trong ngày để chủ động chăm sóc.</li>
            </ol>
            <div style={{ background: "#FFF6F3", border: "1px solid #F6D9CF", borderRadius: "12px", padding: "16px" }}>
              <div style={{ fontSize: "13px", fontWeight: "600", color: "#B4441F", marginBottom: "8px" }}>Không được bỏ sót</div>
              <div style={{ fontSize: "14px", color: "#6D4234", lineHeight: "1.6" }}>Tin nhắn mới · Bình luận hỏi giá · Khách đã để lại số điện thoại · Khách đã gửi bill nhưng chưa được xác nhận · Khách cũ quay lại nhắn tin.</div>
            </div>
          </section>

          <section style={{ background: "#fff", border: "1px solid #E6E8EF", borderRadius: "16px", padding: "clamp(18px,4.5vw,26px)" }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: "12px", marginBottom: "16px" }}>
              <span style={{ fontFamily: "Outfit,sans-serif", fontSize: "13px", fontWeight: "600", color: "#4FB3A6" }}>BƯỚC 2</span>
              <h3 style={{ fontFamily: "Outfit,sans-serif", fontSize: "19px", fontWeight: "600", color: "#2A2D5C", margin: "0" }}>Tiếp nhận lead mới</h3>
            </div>
            <p style={{ fontSize: "14.5px", color: "#3A3E4C", margin: "0 0 14px", lineHeight: "1.6" }}>Khi có khách mới nhắn tin, nhân viên cần phản hồi sớm nhất có thể.</p>
            <blockquote style={{ margin: "0 0 18px", padding: "16px 18px", background: "#F5F6FA", borderLeft: "3px solid #4FB3A6", borderRadius: "0 10px 10px 0", fontSize: "14.5px", lineHeight: "1.65", color: "#2C2F3A" }}>“Dạ em chào anh/chị ạ. Anh/chị đang cần tham khảo phòng, tour, vé vui chơi hay combo Phú Quốc để em hỗ trợ mình nhanh nhất ạ?”</blockquote>
            <div style={{ fontSize: "13px", fontWeight: "600", color: "#2A2D5C", marginBottom: "10px" }}>Sau đó khai thác đủ thông tin</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(210px,100%),1fr))", gap: "8px" }}>
              <div style={{ border: "1px solid #E6E8EF", borderRadius: "10px", padding: "11px 13px", fontSize: "14px", color: "#3A3E4C" }}>Ngày đi hoặc ngày check-in</div>
              <div style={{ border: "1px solid #E6E8EF", borderRadius: "10px", padding: "11px 13px", fontSize: "14px", color: "#3A3E4C" }}>Ngày về hoặc ngày check-out</div>
              <div style={{ border: "1px solid #E6E8EF", borderRadius: "10px", padding: "11px 13px", fontSize: "14px", color: "#3A3E4C" }}>Số lượng người lớn</div>
              <div style={{ border: "1px solid #E6E8EF", borderRadius: "10px", padding: "11px 13px", fontSize: "14px", color: "#3A3E4C" }}>Số trẻ em, độ tuổi hoặc chiều cao</div>
              <div style={{ border: "1px solid #E6E8EF", borderRadius: "10px", padding: "11px 13px", fontSize: "14px", color: "#3A3E4C" }}>Khách cần phòng, tour, vé hay combo</div>
              <div style={{ border: "1px solid #E6E8EF", borderRadius: "10px", padding: "11px 13px", fontSize: "14px", color: "#3A3E4C" }}>Khu vực khách muốn ở</div>
              <div style={{ border: "1px solid #E6E8EF", borderRadius: "10px", padding: "11px 13px", fontSize: "14px", color: "#3A3E4C" }}>Ngân sách dự kiến</div>
              <div style={{ border: "1px solid #E6E8EF", borderRadius: "10px", padding: "11px 13px", fontSize: "14px", color: "#3A3E4C" }}>Yêu cầu đặc biệt: view biển, nhiều giường, ăn sáng, xe đưa đón</div>
            </div>
            <div style={{ marginTop: "16px", padding: "14px 16px", background: "#FFF6F3", border: "1px solid #F6D9CF", borderRadius: "12px", fontSize: "14px", color: "#B4441F", fontWeight: "500" }}>Không gửi bảng giá hàng loạt khi chưa xác định nhu cầu của khách.</div>
          </section>

          <section style={{ background: "#fff", border: "1px solid #E6E8EF", borderRadius: "16px", padding: "clamp(18px,4.5vw,26px)" }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: "12px", marginBottom: "16px" }}>
              <span style={{ fontFamily: "Outfit,sans-serif", fontSize: "13px", fontWeight: "600", color: "#4FB3A6" }}>BƯỚC 3</span>
              <h3 style={{ fontFamily: "Outfit,sans-serif", fontSize: "19px", fontWeight: "600", color: "#2A2D5C", margin: "0" }}>Phân loại nhu cầu khách</h3>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(240px,100%),1fr))", gap: "12px" }}>
              <div style={{ border: "1px solid #E6E8EF", borderRadius: "12px", padding: "18px" }}>
                <div style={{ fontFamily: "Outfit,sans-serif", fontWeight: "600", color: "#2A2D5C", fontSize: "16px", marginBottom: "10px" }}>1. Khách cần phòng</div>
                <ul style={{ margin: "0", paddingLeft: "18px", fontSize: "14px", lineHeight: "1.65", color: "#3A3E4C" }}>
                  <li>Ngày check-in và check-out</li>
                  <li>Số đêm</li>
                  <li>Số lượng khách</li>
                  <li>Số phòng</li>
                  <li>Loại phòng</li>
                  <li>Khu vực Bắc đảo, trung tâm hay Nam đảo</li>
                  <li>Ngân sách</li>
                  <li>Có cần ăn sáng hoặc xe đưa đón không</li>
                </ul>
              </div>
              <div style={{ border: "1px solid #E6E8EF", borderRadius: "12px", padding: "18px" }}>
                <div style={{ fontFamily: "Outfit,sans-serif", fontWeight: "600", color: "#2A2D5C", fontSize: "16px", marginBottom: "10px" }}>2. Khách cần tour</div>
                <ul style={{ margin: "0", paddingLeft: "18px", fontSize: "14px", lineHeight: "1.65", color: "#3A3E4C" }}>
                  <li>Ngày tham gia tour</li>
                  <li>Số lượng người lớn, trẻ em</li>
                  <li>Tour khách quan tâm</li>
                  <li>Có cần xe đưa đón không</li>
                  <li>Đi riêng hay ghép đoàn</li>
                  <li>Có trẻ nhỏ hoặc người lớn tuổi không</li>
                </ul>
              </div>
              <div style={{ border: "1px solid #E6E8EF", borderRadius: "12px", padding: "18px" }}>
                <div style={{ fontFamily: "Outfit,sans-serif", fontWeight: "600", color: "#2A2D5C", fontSize: "16px", marginBottom: "10px" }}>3. Khách cần vé vui chơi</div>
                <ul style={{ margin: "0", paddingLeft: "18px", fontSize: "14px", lineHeight: "1.65", color: "#3A3E4C" }}>
                  <li>Loại vé</li>
                  <li>Ngày sử dụng</li>
                  <li>Số lượng người lớn</li>
                  <li>Số lượng trẻ em</li>
                  <li>Chiều cao trẻ em</li>
                  <li>Khách đã có lịch trình hay chưa</li>
                </ul>
              </div>
              <div style={{ border: "1px solid #E6E8EF", borderRadius: "12px", padding: "18px" }}>
                <div style={{ fontFamily: "Outfit,sans-serif", fontWeight: "600", color: "#2A2D5C", fontSize: "16px", marginBottom: "10px" }}>4. Khách cần combo</div>
                <ul style={{ margin: "0", paddingLeft: "18px", fontSize: "14px", lineHeight: "1.65", color: "#3A3E4C" }}>
                  <li>Thời gian lưu trú</li>
                  <li>Số lượng khách</li>
                  <li>Nhu cầu phòng</li>
                  <li>Các điểm khách muốn tham quan</li>
                  <li>Ngân sách</li>
                  <li>Khách có vé máy bay hay chưa</li>
                  <li>Khách có phương tiện di chuyển tại Phú Quốc hay chưa</li>
                </ul>
              </div>
            </div>
          </section>

          <section style={{ background: "#fff", border: "1px solid #E6E8EF", borderRadius: "16px", padding: "clamp(18px,4.5vw,26px)" }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: "12px", marginBottom: "16px" }}>
              <span style={{ fontFamily: "Outfit,sans-serif", fontSize: "13px", fontWeight: "600", color: "#4FB3A6" }}>BƯỚC 4</span>
              <h3 style={{ fontFamily: "Outfit,sans-serif", fontSize: "19px", fontWeight: "600", color: "#2A2D5C", margin: "0" }}>Kiểm tra giá và tình trạng dịch vụ</h3>
            </div>
            <ol style={{ margin: "0 0 18px", paddingLeft: "22px", display: "flex", flexDirection: "column", gap: "7px", fontSize: "14.5px", lineHeight: "1.6", color: "#3A3E4C" }}>
              <li>Kiểm tra bảng giá mới nhất.</li>
              <li>Kiểm tra tình trạng phòng, vé hoặc tour.</li>
              <li>Kiểm tra điều kiện áp dụng.</li>
              <li>Kiểm tra giá người lớn và trẻ em.</li>
              <li>Kiểm tra phụ thu cuối tuần, lễ, Tết hoặc phụ thu trẻ em.</li>
              <li>Kiểm tra dịch vụ có bao gồm xe đưa đón hay không.</li>
              <li>Không tự ý giảm giá khi chưa được duyệt.</li>
            </ol>
            <div style={{ padding: "14px 16px", background: "#FFF6F3", border: "1px solid #F6D9CF", borderRadius: "12px", fontSize: "14px", color: "#B4441F", lineHeight: "1.6" }}>Nếu chưa chắc chắn về giá hoặc tình trạng dịch vụ, phải hỏi lại bộ phận phụ trách trước khi báo khách. Không được tự suy đoán.</div>
          </section>

          <section style={{ background: "#fff", border: "1px solid #E6E8EF", borderRadius: "16px", padding: "clamp(18px,4.5vw,26px)" }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: "12px", marginBottom: "16px" }}>
              <span style={{ fontFamily: "Outfit,sans-serif", fontSize: "13px", fontWeight: "600", color: "#4FB3A6" }}>BƯỚC 5</span>
              <h3 style={{ fontFamily: "Outfit,sans-serif", fontSize: "19px", fontWeight: "600", color: "#2A2D5C", margin: "0" }}>Tư vấn và báo giá</h3>
            </div>
            <div style={{ fontSize: "13px", fontWeight: "600", color: "#2A2D5C", marginBottom: "10px" }}>Khi báo giá, cần trình bày rõ</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(180px,100%),1fr))", gap: "8px", marginBottom: "20px" }}>
              <div style={{ border: "1px solid #E6E8EF", borderRadius: "10px", padding: "11px 13px", fontSize: "14px", color: "#3A3E4C" }}>Tên dịch vụ</div>
              <div style={{ border: "1px solid #E6E8EF", borderRadius: "10px", padding: "11px 13px", fontSize: "14px", color: "#3A3E4C" }}>Ngày sử dụng</div>
              <div style={{ border: "1px solid #E6E8EF", borderRadius: "10px", padding: "11px 13px", fontSize: "14px", color: "#3A3E4C" }}>Số lượng khách</div>
              <div style={{ border: "1px solid #E6E8EF", borderRadius: "10px", padding: "11px 13px", fontSize: "14px", color: "#3A3E4C" }}>Dịch vụ bao gồm</div>
              <div style={{ border: "1px solid #E6E8EF", borderRadius: "10px", padding: "11px 13px", fontSize: "14px", color: "#3A3E4C" }}>Dịch vụ không bao gồm</div>
              <div style={{ border: "1px solid #E6E8EF", borderRadius: "10px", padding: "11px 13px", fontSize: "14px", color: "#3A3E4C" }}>Tổng giá</div>
              <div style={{ border: "1px solid #E6E8EF", borderRadius: "10px", padding: "11px 13px", fontSize: "14px", color: "#3A3E4C" }}>Số tiền cần cọc</div>
              <div style={{ border: "1px solid #E6E8EF", borderRadius: "10px", padding: "11px 13px", fontSize: "14px", color: "#3A3E4C" }}>Số tiền còn lại</div>
              <div style={{ border: "1px solid #E6E8EF", borderRadius: "10px", padding: "11px 13px", fontSize: "14px", color: "#3A3E4C" }}>Chính sách hoàn, hủy hoặc thay đổi</div>
              <div style={{ border: "1px solid #E6E8EF", borderRadius: "10px", padding: "11px 13px", fontSize: "14px", color: "#3A3E4C" }}>Thời hạn giữ giá hoặc giữ chỗ</div>
            </div>
            <blockquote style={{ margin: "0 0 14px", padding: "16px 18px", background: "#F5F6FA", borderLeft: "3px solid #4FB3A6", borderRadius: "0 10px 10px 0", fontSize: "14.5px", lineHeight: "1.65", color: "#2C2F3A" }}>“Dạ với lịch trình 3 ngày 2 đêm của gia đình mình, em đề xuất combo gồm 2 đêm phòng, vé Hòn Thơm, buffet trưa và vé xem show buổi tối. Tổng giá là … đồng. Mình cọc trước … đồng để giữ phòng và dịch vụ ạ.”</blockquote>
            <blockquote style={{ margin: "0", padding: "16px 18px", background: "#F5F6FA", borderLeft: "3px solid #4FB3A6", borderRadius: "0 10px 10px 0", fontSize: "14.5px", lineHeight: "1.65", color: "#2C2F3A" }}>“Anh/chị thấy phương án này đã phù hợp với nhu cầu của mình chưa ạ? Em có thể điều chỉnh thêm theo ngân sách của gia đình mình.”</blockquote>
          </section>

          <section style={{ background: "#fff", border: "1px solid #E6E8EF", borderRadius: "16px", padding: "clamp(18px,4.5vw,26px)" }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: "12px", marginBottom: "16px" }}>
              <span style={{ fontFamily: "Outfit,sans-serif", fontSize: "13px", fontWeight: "600", color: "#4FB3A6" }}>BƯỚC 6</span>
              <h3 style={{ fontFamily: "Outfit,sans-serif", fontSize: "19px", fontWeight: "600", color: "#2A2D5C", margin: "0" }}>Theo sát và chăm sóc lead</h3>
            </div>
            <p style={{ fontSize: "14.5px", color: "#3A3E4C", margin: "0 0 16px", lineHeight: "1.6" }}>Sau khi báo giá, nhân viên không được bỏ khách.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(200px,100%),1fr))", gap: "10px", marginBottom: "18px" }}>
              <div style={{ background: "#EAF7F4", borderRadius: "12px", padding: "14px 16px" }}>
                <div style={{ fontFamily: "Outfit,sans-serif", fontWeight: "600", color: "#1E6B5E", fontSize: "15px" }}>Sau 2–4 giờ</div>
                <div style={{ fontSize: "13.5px", color: "#3D6A62", marginTop: "4px", lineHeight: "1.5" }}>nếu khách đã xem nhưng chưa phản hồi</div>
              </div>
              <div style={{ background: "#EAF7F4", borderRadius: "12px", padding: "14px 16px" }}>
                <div style={{ fontFamily: "Outfit,sans-serif", fontWeight: "600", color: "#1E6B5E", fontSize: "15px" }}>Cuối ngày</div>
                <div style={{ fontSize: "13.5px", color: "#3D6A62", marginTop: "4px", lineHeight: "1.5" }}>nếu khách vẫn chưa quyết định</div>
              </div>
              <div style={{ background: "#EAF7F4", borderRadius: "12px", padding: "14px 16px" }}>
                <div style={{ fontFamily: "Outfit,sans-serif", fontWeight: "600", color: "#1E6B5E", fontSize: "15px" }}>Ngày hôm sau</div>
                <div style={{ fontSize: "13.5px", color: "#3D6A62", marginTop: "4px", lineHeight: "1.5" }}>tiếp tục hỏi thăm</div>
              </div>
              <div style={{ background: "#EAF7F4", borderRadius: "12px", padding: "14px 16px" }}>
                <div style={{ fontFamily: "Outfit,sans-serif", fontWeight: "600", color: "#1E6B5E", fontSize: "15px" }}>Trước 3–7 ngày</div>
                <div style={{ fontSize: "13.5px", color: "#3D6A62", marginTop: "4px", lineHeight: "1.5" }}>trước ngày khách dự kiến đi</div>
              </div>
            </div>
            <blockquote style={{ margin: "0 0 16px", padding: "16px 18px", background: "#F5F6FA", borderLeft: "3px solid #4FB3A6", borderRadius: "0 10px 10px 0", fontSize: "14.5px", lineHeight: "1.65", color: "#2C2F3A" }}>“Dạ em xin phép hỏi mình đã xem qua phương án em gửi chưa ạ? Nếu cần điều chỉnh giá, phòng hoặc lịch trình, anh/chị báo em để em hỗ trợ thêm nhé.”</blockquote>
            <div style={{ fontSize: "13px", fontWeight: "600", color: "#2A2D5C", marginBottom: "8px" }}>Mỗi lần chăm sóc phải có mục đích rõ ràng</div>
            <div style={{ fontSize: "14px", color: "#3A3E4C", lineHeight: "1.6" }}>Cập nhật giá · Gửi phương án khác · Nhắc thời gian giữ chỗ · Xác nhận nhu cầu · Giải đáp thắc mắc.</div>
            <div style={{ marginTop: "16px", padding: "14px 16px", background: "#FFF6F3", border: "1px solid #F6D9CF", borderRadius: "12px", fontSize: "14px", color: "#B4441F", fontWeight: "500" }}>Không nhắn dồn dập, gây khó chịu cho khách.</div>
          </section>
        </div>
  )
}
