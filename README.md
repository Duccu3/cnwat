# Công nghệ Web An toàn — Trang tổng hợp bài tập

Một trang tĩnh để tập trung **tất cả các bài lab/môn học** của Đặng Hoàng Đức. Bố cục gồm **sidebar** chứa danh sách bài, **hero** (banner video) có nút dẫn tới trang "Giới thiệu", và **các thẻ nội dung** ở phần chính.
---

## Tính năng chính
- **Sidebar có avatar + danh sách lab động**: danh sách bài được render từ mảng `ASSIGNMENTS` trong `script.js`. Chỉ cần thêm phần tử là sidebar tự cập nhật.
- **Hero video + CTA “Xem giới thiệu”**: banner nền video, có nút dẫn tới `/about/` (CV + bảng điểm).
- **UI Dark mode, responsive**: dùng CSS variables, card layout, và font Inter; có hiệu ứng hover/focus cơ bản.
- **Footer hiển thị năm hiện tại**: cập nhật tự động bằng JavaScript.

## Cấu trúc thư mục
```
.
├─ assets/                 # media (ảnh, video, favicon...)
├─ assignments/            # mỗi bài/lab là một thư mục (index.html bên trong)
├─ about/                  # trang giới thiệu (CV + Bảng điểm) - tùy chọn
├─ index.html              # trang chính
├─ style.css               # giao diện
└─ script.js               # render danh sách bài & logic nhỏ
```



> Không cần backend. Repo này chỉ gồm HTML/CSS/JS tĩnh.

## Thêm một bài/lab mới
1. Tạo thư mục `assignments/XX-ten-bai/` và đặt nội dung của bài vào đó (ít nhất có `index.html`).
2. Mở `script.js`, thêm phần tử vào mảng `ASSIGNMENTS`:
   ```js
   { id: "02", title: "Bài 02 — CSS", path: "assignments/02-css/" }
   ```
3. Reload trang: sidebar sẽ hiển thị link mới.

> Tuỳ chọn: có thể chuyển danh sách bài sang `assignments.json` và `fetch()` để không phải sửa JS mỗi lần.

## Trang Giới thiệu (about/)
- `about/index.html` gồm **2 tab**: `#grades` (bảng điểm) và `#cv` (CV).  
- Deep-link:
  - `about/#grades` → nhảy thẳng tới Bảng điểm
  - `about/#cv` → nhảy thẳng tới CV

## Favicon (đổi icon tab)
Đặt icon vào `assets/` và thêm vào `<head>`:
```html
<link rel="icon" type="image/svg+xml" href="assets/favicon.svg">
<link rel="icon" type="image/png" sizes="32x32" href="assets/favicon-32.png">
<link rel="apple-touch-icon" href="assets/apple-touch-icon.png">
```
> Với Project Pages (dạng `username.github.io/repo/`) hãy dùng đường dẫn **tương đối** `assets/...` như trên.

## Triển khai lên GitHub Pages
1. Commit & push toàn bộ mã nguồn.
2. Vào **Settings → Pages**.
3. **Source**: *Deploy from a branch* → **Branch**: `main` (thư mục `/ (root)`).
4. Lưu lại, đợi build xong là có link public.

## A11y & tối ưu khuyến nghị
- Tôn trọng **prefers-reduced-motion**: ẩn video và dùng ảnh poster.
- Thêm `aria-expanded` cho nút/biểu tượng mở menu (nếu có).
- Hạn chế kích thước video/ảnh; dùng `.webp` cho ảnh poster.

**Tác giả:** Đặng Hoàng Đức + some help from AI — `hdlshb@gmail.com`
