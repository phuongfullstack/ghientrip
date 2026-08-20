export interface QuizQuestion {
  id: string
  text: string
  opts: string[]
  a: number
  note: string
}

export const DAYS = [
  { n: 1, title: 'Hiểu công ty và sản phẩm', topics: ['Giới thiệu thương hiệu.', 'Các Fanpage đang phụ trách.', 'Các nhóm dịch vụ đang bán.', 'Phân biệt phòng, tour, vé và combo.', 'Hướng dẫn đọc bảng giá.'] },
  { n: 2, title: 'Quy trình nhận và xử lý lead', topics: ['Cách mở đầu cuộc trò chuyện.', 'Cách khai thác nhu cầu.', 'Cách phân loại khách.', 'Cách cập nhật trạng thái lead.'] },
  { n: 3, title: 'Tư vấn phòng', topics: ['Các khu vực lưu trú.', 'Loại phòng.', 'Giá phòng.', 'Phụ thu.', 'Chính sách đặt và hủy phòng.'] },
  { n: 4, title: 'Tư vấn tour, vé và combo', topics: ['Các tour phổ biến.', 'Vé vui chơi.', 'Giá người lớn và trẻ em.', 'Cách xây combo theo nhu cầu khách.'] },
  { n: 5, title: 'Báo giá và xử lý từ chối', topics: ['Cách trình bày báo giá.', 'Khách chê giá cao.', 'Khách cần suy nghĩ.', 'Khách so sánh với bên khác.', 'Khách chưa có lịch trình.'] },
  { n: 6, title: 'Chốt cọc và tạo booking', topics: ['Xác nhận thông tin.', 'Gửi thanh toán.', 'Kiểm tra bill.', 'Điền form NEW BOOKING.', 'Bàn giao cho các bộ phận.'] },
  { n: 7, title: 'Thực hành', topics: ['Nhân viên xử lý lead thật dưới sự giám sát.', 'Kiểm tra cách tư vấn.', 'Kiểm tra báo giá.', 'Kiểm tra cập nhật lead.', 'Tổng kết lỗi và hướng dẫn lại.'] },
]

export const QUIZ: Record<number, QuizQuestion[]> = {
  1: [
    { id: 'q1a', text: 'Phạm vi công việc của nhân viên trực Fanpage & Sales gồm những gì?', opts: ['Phòng, tour, vé vui chơi và combo Phú Quốc', 'Chỉ phòng khách sạn và căn hộ', 'Chỉ tour và vé vui chơi'], a: 0, note: 'Phòng, tour, vé vui chơi và combo Phú Quốc.' },
    { id: 'q1b', text: 'Lượng lead dự kiến mỗi ngày là bao nhiêu?', opts: ['Khoảng 10–30 lead/ngày, tùy lượng khách thực tế', 'Khoảng 50–100 lead/ngày', 'Không giới hạn'], a: 0, note: 'Khoảng 10–30 lead/ngày, tùy lượng khách thực tế.' },
    { id: 'q1c', text: 'Khi chưa chắc chắn về giá hoặc tình trạng dịch vụ, bạn làm gì?', opts: ['Hỏi lại bộ phận phụ trách trước khi báo khách', 'Báo theo bảng giá cũ đang có', 'Báo giá cao hơn cho an toàn'], a: 0, note: 'Phải hỏi lại bộ phận phụ trách trước khi báo khách. Không được tự suy đoán.' },
  ],
  2: [
    { id: 'q2a', text: 'Việc đầu tiên khi bắt đầu ca làm việc là gì?', opts: ['Kiểm tra toàn bộ tin nhắn mới trên Fanpage', 'Làm báo cáo doanh thu hôm qua', 'Đăng bài mới lên Fanpage'], a: 0, note: 'Bước 1 – Kiểm tra đầu ca: bắt đầu bằng toàn bộ tin nhắn mới trên Fanpage.' },
    { id: 'q2b', text: 'Khi khách mới nhắn tin, điều nào KHÔNG được làm?', opts: ['Gửi bảng giá hàng loạt khi chưa xác định nhu cầu', 'Hỏi ngày đi, số khách và ngân sách', 'Phản hồi sớm nhất có thể'], a: 0, note: 'Không gửi bảng giá hàng loạt khi chưa xác định nhu cầu của khách.' },
    { id: 'q2c', text: 'Lead mới phải được phản hồi trong bao lâu?', opts: ['Tối đa 05 phút', 'Trong vòng 30 phút', 'Trong ngày là được'], a: 0, note: 'Quy tắc bắt buộc: lead mới phản hồi tối đa 05 phút.' },
  ],
  3: [
    { id: 'q3a', text: 'Khách cần phòng, bạn phải khai thác đủ những gì?', opts: ['Ngày check-in/out, số đêm, số khách, số phòng, loại phòng, khu vực, ngân sách', 'Chỉ cần ngân sách và số khách', 'Chỉ cần ngày check-in'], a: 0, note: 'Đủ 8 mục, gồm cả nhu cầu ăn sáng và xe đưa đón.' },
    { id: 'q3b', text: 'Trước khi báo giá phòng, phải kiểm tra gì?', opts: ['Bảng giá mới nhất, tình trạng phòng, điều kiện áp dụng và phụ thu', 'Chỉ cần bảng giá', 'Chỉ cần tình trạng phòng'], a: 0, note: 'Bước 4 gồm 7 mục kiểm tra, có cả phụ thu cuối tuần, lễ, Tết và phụ thu trẻ em.' },
    { id: 'q3c', text: 'Sale có được tự giảm giá cho khách không?', opts: ['Không. Mọi giá thấp hơn giá chuẩn phải được Lead duyệt', 'Được, nếu khách sắp bỏ đi', 'Được, tối đa 10%'], a: 0, note: 'Sale không tự giảm giá; mọi giá thấp hơn giá chuẩn phải được Lead duyệt.' },
  ],
  4: [
    { id: 'q4a', text: 'Trẻ em dưới 1m khi mua vé Sun World Hòn Thơm và Vin Phú Quốc?', opts: ['Hoàn toàn miễn phí', 'Giảm 50%', 'Tính như người lớn'], a: 0, note: 'Trẻ em dưới 1m hoàn toàn miễn phí.' },
    { id: 'q4b', text: 'Giá niêm yết vé cáp treo 2 chiều Hòn Thơm cho người lớn?', opts: ['850.000đ', '700.000đ', '1.150.000đ'], a: 0, note: '850.000đ người lớn, 700.000đ trẻ em. Tặng vé tham quan Cầu Hôn và 01 phần bia Sun KraftBeer hoặc 01 đơn vị đồ uống khác.' },
    { id: 'q4c', text: 'Mỗi ngày trong combo được ghép mấy chương trình full-day?', opts: ['Chỉ 01 chương trình full-day', 'Tối đa 02', 'Không giới hạn'], a: 0, note: 'Mỗi ngày chỉ chọn 01 chương trình full-day. Không ghép Hòn Thơm và tour tàu trong cùng một ngày.' },
  ],
  5: [
    { id: 'q5a', text: 'Một báo giá đầy đủ cần có gì?', opts: ['Tên dịch vụ, ngày, số khách, bao gồm/không bao gồm, tổng giá, cọc, còn lại, chính sách hủy, thời hạn giữ chỗ', 'Tổng giá và số tiền cọc', 'Tên dịch vụ và tổng giá'], a: 0, note: 'Đủ 10 mục, trình bày ngắn gọn, dễ hiểu và có đề xuất rõ ràng.' },
    { id: 'q5b', text: 'Khách đã xem báo giá nhưng chưa phản hồi, khi nào chăm sóc lại?', opts: ['Sau 2–4 giờ, và mỗi lần phải có mục đích rõ ràng', 'Nhắn liên tục cho đến khi khách trả lời', 'Chờ khách chủ động nhắn lại'], a: 0, note: 'Sau 2–4 giờ; cuối ngày; ngày hôm sau; trước ngày đi 3–7 ngày. Không nhắn dồn dập.' },
    { id: 'q5c', text: 'Khách chê giá cao thì xử lý thế nào?', opts: ['Đề xuất phương án khác theo ngân sách, không tự giảm giá', 'Giảm ngay 10% để giữ khách', 'Nói giá đã là thấp nhất rồi'], a: 0, note: 'Điều chỉnh phương án theo ngân sách; giảm giá phải được duyệt.' },
  ],
  6: [
    { id: 'q6a', text: 'Booking được xem là đã chốt khi nào?', opts: ['Khách cọc 30% và có bill chuyển khoản hợp lệ', 'Khách nói sẽ chuyển khoản', 'Khách đã xác nhận chọn phòng'], a: 0, note: 'Booking chốt khi khách cọc 30% và có bill chuyển khoản hợp lệ.' },
    { id: 'q6b', text: 'Khi nào được báo khách “đã xác nhận cọc”?', opts: ['Khi bộ phận phụ trách đã kiểm tra tiền', 'Ngay khi khách gửi ảnh bill', 'Khi khách đọc tin nhắn'], a: 0, note: 'Không tự xác nhận thanh toán khi chưa kiểm tra được tiền.' },
    { id: 'q6c', text: 'Sau khi gửi form NEW BOOKING vào nhóm, việc của Sales là gì?', opts: ['Theo dõi đến khi các bộ phận xác nhận đủ dịch vụ', 'Coi như đã hoàn thành', 'Chuyển khách cho Reservation'], a: 0, note: 'Không xem việc gửi booking là đã hoàn thành.' },
  ],
  7: [
    { id: 'q7a', text: 'Khách không chốt thì cập nhật thế nào?', opts: ['Ghi rõ lý do không chốt và cập nhật trạng thái', 'Để trống trạng thái', 'Xóa lead khỏi danh sách'], a: 0, note: 'Không được để lead không có trạng thái. Có 7 lý do không chốt để chọn.' },
    { id: 'q7b', text: 'Khách gặp sự cố khi đang sử dụng dịch vụ, bạn làm gì trước?', opts: ['Tiếp nhận, xin lỗi trấn an, ghi nhận đầy đủ rồi chuyển bộ phận phụ trách', 'Cam kết hoàn tiền ngay cho khách yên tâm', 'Giải thích rằng lỗi thuộc nhà cung cấp'], a: 0, note: 'Không tự cam kết hoàn tiền, đổi phòng hoặc bồi thường khi chưa được cấp quản lý duyệt.' },
    { id: 'q7c', text: 'Khách cũ quay lại nhắn tin thì ai phụ trách?', opts: ['Ưu tiên giữ cho Sale đã tư vấn trước đó', 'Ai thấy trước thì nhận', 'Chuyển cho Sale mới để chia đều lead'], a: 0, note: 'Khách cũ nhắn lại ưu tiên để Sales cũ tiếp tục chăm sóc.' },
  ],
}

export const ALL_QUIZ: QuizQuestion[] = Object.keys(QUIZ)
  .map(Number)
  .sort((a, b) => a - b)
  .flatMap((k) => QUIZ[k])

export const CHECKLIST = [
  'Biết khai thác đủ thông tin khách.',
  'Biết đọc và sử dụng bảng giá.',
  'Biết tư vấn các sản phẩm chính.',
  'Biết kiểm tra tình trạng dịch vụ.',
  'Biết báo giá rõ ràng.',
  'Biết chăm sóc lại khách.',
  'Biết chốt thông tin booking.',
  'Biết kiểm tra bill.',
  'Biết điền form NEW BOOKING.',
  'Biết bàn giao cho đúng bộ phận.',
  'Biết báo cáo cuối ngày.',
  'Biết xử lý các tình huống cơ bản.',
  'Không tự ý báo giá, giảm giá hoặc cam kết ngoài chính sách.',
]

export const BOOKING_FORM =
  'NEW BOOKING\nFanpage\n+ Tên khách:\nSđt:\n+ Check in:\n+ Check out:\n+ N of G:\n+ N of Room:\n+ Rate:\n+ Service:\n+ Total:\n+ Dep:\n+ Remain:'

export const REPORT_FORM =
  'BÁO CÁO SALES NGÀY …/…/…\nLead mới:\nĐã tư vấn:\nĐã báo giá:\nĐang cân nhắc:\nChờ cọc:\nBooking đã chốt:\nDoanh thu đã chốt:\nTiền cọc đã nhận:\nKhách cần chăm sóc lại:\nVấn đề cần hỗ trợ:'

export const CM_CHIPS: { id: string; label: string }[] = [
  { id: 'cm-khuvuc', label: 'Khu vực Phú Quốc' },
  { id: 'cm-thuatngu', label: 'Thuật ngữ' },
  { id: 'cm-option', label: '11 Option' },
  { id: 'cm-giatour', label: 'Giá tour trọn gói' },
  { id: 'cm-diadiem', label: 'Địa điểm' },
  { id: 'cm-xuly', label: 'Xử lý phản hồi' },
  { id: 'cm-faq', label: 'FAQ' },
  { id: 'cm-thunhap', label: 'Thu nhập & hoa hồng' },
]
