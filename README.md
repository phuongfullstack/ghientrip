# Handbook ELYDAY & SKKYE Travel — Cẩm nang training Sale & trực Fanpage

Website handbook nội bộ dành cho nhân viên sale (Phú Quốc). Xây dựng trên nền trang
`Training Sale ELYDAY SKKYE.html` do công ty thiết kế sẵn, đã giải đóng gói để chạy
độc lập và bổ sung tab **Cẩm nang**.

## Cách chạy

**Cách 1 — Mở trực tiếp:** double-click `index.html` (dữ liệu đã nhúng sẵn trong file,
không cần Internet trừ font/React nếu cache trình duyệt chưa có).

**Cách 2 — Chạy qua HTTP (khuyến nghị):**

```bash
cd handbook-site
npx http-server -p 8123
# mở http://localhost:8123
```

## Cấu trúc

| Thành phần | Nội dung |
|---|---|
| `index.html` | Toàn bộ app + dữ liệu JSON nhúng (data URI) |
| `assets/` | Ảnh bảng giá phòng, ảnh tour du thuyền, font, React, dữ liệu nguồn |
| `assets/scriptsJson.json` · `ticketsJson.json` · `combosJson.json` | Dữ liệu nguồn để cập nhật |

NaN

1. **Tổng quan** — phạm vi công việc, nguyên tắc cốt lõi, 5 quy tắc bắt buộc
2. **Lộ trình 7 ngày** — chương trình training + 21 câu quiz + checklist 13 mục
3. **Quy trình** — 6 bước làm việc hằng ngày
4. **Trạng thái lead** — 13 trạng thái + quy định trực Fanpage
5. **Chốt booking** — xác nhận thông tin, thanh toán, kiểm tra bill, form NEW BOOKING
6. **Chăm sóc** — trước/trong/sau chuyến đi, báo cáo cuối ngày
7. **Script** — 152 mẫu tin nhắn theo 17 hạng mục, tìm kiếm + copy
8. **Bảng giá** — vé Sun World Hòn Thơm + Vin Phú Quốc, 12 combo lịch trình,
   bảng ROOM INFO ELYDAY (Hillside Apartment + ELYDAY CASA + chính sách chung),
   ảnh bảng giá phòng gốc, tour du thuyền 3 đảo, máy tính báo giá + cọc 30%
9. **Cẩm nang** (mới bổ sung) — từ điển thuật ngữ, khu vực & điểm đến Phú Quốc,
   11 option ghép combo, bảng giá tour trọn gói 2N1Đ/3N2Đ + phụ thu, FAQ,
   xử lý phản hồi 6 bước, quy chế thu nhập & hoa hồng
10. **Checklist** — KPI + xác nhận hoàn thành training

## Cập nhật dữ liệu

- **Bảng giá vé / script / combo:** sửa 3 file JSON trong `assets/` rồi chạy lại
  `node .tools/fix_index.js` (ở thư mục gốc repo) để nhúng lại dữ liệu vào `index.html`.
- **Bảng ROOM INFO phòng:** sửa khối `roominfo-elyday` trong `index.html`, hoặc sửa `node .tools/add_roominfo.js` rồi chạy lại (script tự bỏ qua nếu đã có).
- **Ảnh bảng giá phòng / tour:** thay file JPG tương ứng trong `assets/` (giữ nguyên tên).

## Nguồn tài liệu

- `Training Sale ELYDAY SKKYE.html` — thiết kế web gốc (giải đóng gói)
- `ELYDAY INFO/cam-nang-sale-tour.pdf` — 32 trang, OCR và đưa vào tab Cẩm nang
- `ELYDAY INFO/SKKYE COMBO.xlsx` — bảng giá vé niêm yết + lịch trình combo
- `ELYDAY INFO/NHÂN SỰ/SCRIPT_KICH_BAN_SALE_ELYDAY_SKKYE_EXCEL.xlsx` — 152 script
- `ELYDAY INFO/NHÂN SỰ/quy_che_luong_thuong_online_sale_FINAL.docx` — quy chế thu nhập
- `ELYDAY INFO/NHÂN SỰ/Quy_trinh_lam_viec_Training_Sale_Du_lich.docx` — quy trình training
