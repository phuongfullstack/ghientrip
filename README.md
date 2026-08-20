# Handbook ELYDAY & SKKYE Travel — Cẩm nang training Sale & trực Fanpage

Website handbook nội bộ dành cho nhân viên sale (Phú Quốc). Đã migrate từ single-file HTML
sang **Next.js 15 (App Router, TypeScript, static export)** — giữ nguyên thiết kế và hành vi
của bản trước, dữ liệu tách riêng để cập nhật dễ dàng.

## Chạy

```bash
cd handbook-site
npm install
npm run dev        # phát triển: http://localhost:3000

npm run build      # xuất static vào out/
npm run serve      # phục vụ bản build: http://localhost:3000 (npx serve out)
```

## Cấu trúc

| Thành phần | Nội dung |
|---|---|
| `src/app/` | layout (fonts, theme pre-paint), page, globals.css (base + dark mode + classes) |
| `src/components/` | HandbookApp (shell, tab theo URL `?tab=&sub=`, phím tắt) + 12 component tab + Lightbox, Sidebar, BackTop |
| `src/data/` | `scriptsJson.json` · `ticketsJson.json` · `combosJson.json` — dữ liệu nguồn; `rooms.ts` giá phòng (một nguồn duy nhất); `quiz.ts` (DAYS/QUIZ/CHECKLIST/forms) |
| `src/lib/` | `quote.ts` (logic tính giỏ báo giá — pure), `format.ts`, `clipboard.ts`, |
| `public/assets/` | Ảnh bảng giá phòng, ảnh tour, font woff2 |
| `tests/` | Vitest cho `computeQuoteCart` (quét 33 dòng vé, cọc 30% làm tròn 1.000đ, chia đầu người) |

## Phím tắt & deep-link

- `/` — mở thư viện script và focus ô tìm kiếm
- `1–9`, `0` — chuyển 10 tab theo thứ tự menu
- URL: `?tab=gia&sub=phong` deep-link thẳng tới Bảng giá → phòng

## Cập nhật dữ liệu

- **Script / giá vé / combo:** sửa 3 file JSON trong `src/data/` rồi build lại — không còn
  bước nhúng data-URI như bản cũ (`fix_index.js` đã lỗi thời).
- **Giá phòng:** sửa `src/data/rooms.ts` — bảng hiển thị, dòng copy và calculator cùng đọc
  một nguồn (trước đây phải sửa 3 nơi).
- **Ảnh:** thay file JPG tương ứng trong `public/assets/` (giữ nguyên tên).

## Lưu ý dữ liệu giá phòng (đối chiếu 2026-08-20)

Giá 14 dòng phòng đã được kiểm chứng khớp **standee gốc** trong
`ELYDAY INFO/FILE BẢNG GIÁ PNG` (mỗi con số đọc ≥2 lần từ các vùng cắt khác nhau).
Hai điểm đã chỉnh theo standee, khác bảng cũ:

1. Giờ nhận phòng: **14:00** (bảng cũ ghi 15:00) — trả phòng 12:00.
2. Ghi chú giá CASA: **mùa thấp điểm 01/06–30/09/2026, chưa gồm thuế & phí**
   (bảng cũ ghi "Mùa Thường May–Oct, đã gồm thuế & phí").

Mùa hiệu lực Hillside cũng là 01/06–30/09/2026. Khi có standee/bảng giá mới, cập nhật
`rooms.ts` và ghi lại nguồn ở đây.

## Bản thân repo

Site sống trong repo riêng `ghientrip` (thư mục này có `.git` riêng); repo ngoài
`trip-handbook` đã bỏ track `handbook-site/` để tránh trùng lặp. Tài liệu nguồn nhạy cảm
(`ELYDAY INFO/`, HTML training gốc) chỉ nằm ở repo ngoài và đã gitignore.
