# Sâm Báo Triso — website chỉ dẫn địa lý

Website giới thiệu và bảo tồn chỉ dẫn địa lý cho dược liệu **Sâm Báo** (*Abelmoschus sagittifolius*),
vùng Núi Báo, xã Vĩnh Hùng, huyện Vĩnh Lộc, tỉnh Thanh Hóa.
Bản quyền và phát triển: **Công ty Cổ phần Quốc tế Triệu Sơn (Triso Group)**.

## Tech stack

Next.js 14 (App Router) · Tailwind CSS 3 · lucide-react · next/font (Lora + Be Vietnam Pro)

## Chạy dự án

```bash
npm install
npm run dev     # http://localhost:3000
```

## Cấu trúc

```
app/
  layout.jsx        Khung chung: font, metadata SEO, JSON-LD, Header/Footer/FloatingContact
  page.jsx          Trang chủ (hero, chỉ dẫn địa lý + bản đồ, khoa học, vùng trồng, sản phẩm, hành trình, CTA)
  globals.css       Biến màu, hiệu ứng rung/sóng, reset
  robots.js         /robots.txt sinh tự động
  sitemap.js        /sitemap.xml sinh tự động từ NAV
components/
  SiteHeader.jsx    Navbar cố định + menu mobile + nút hotline
  SiteFooter.jsx    Footer 3 cột + miễn trừ trách nhiệm
  FloatingContact.jsx  Cụm nút nổi: Zalo (rung), gọi điện (sóng lan), lên đầu trang
  SectionHeading.jsx   Tiêu đề mục dùng chung (nền sáng / nền tối)
  LogoSamBao.jsx    Logo SVG: núi Báo + hoa sâm 5 cánh
lib/
  site.js           Toàn bộ dữ liệu: thông tin công ty, menu, dược tính, thổ nhưỡng, quy trình, sản phẩm, mốc thời gian
tailwind.config.js  Bảng màu rung/kim/dat/kem/than, font, shadow
```

## Bảng màu

| Token | Hex | Dùng cho |
|---|---|---|
| `rung` | `#1B4332` | Nền chủ đạo, header, footer |
| `rung-sang` | `#2D6A4F` | Dải CTA, gradient |
| `rung-ngoc` | `#40916C` | Icon, nhấn phụ |
| `kim` | `#C5A059` | Nút chính, đường viền, nhãn |
| `dat` | `#D4A373` | Nhấn nâu đất |
| `kem` | `#FAF8F3` | Nền sáng |
| `than` | `#23281F` | Chữ |

## Các trang cần bổ sung

`layout.jsx` đã sẵn sàng cho mọi route. Tạo thêm các thư mục sau trong `app/`, mỗi thư mục một `page.jsx`:

- `nguon-goc-nui-bao/` — chỉ dẫn địa lý chi tiết, bản đồ lớn, hồ sơ "Báo"
- `nghien-cuu-khoa-hoc/` — bảng dược tính đầy đủ, danh mục đề tài/hội thảo
- `vung-trong-chuan-hoa/` — quy trình canh tác, nhật ký đồng ruộng, truy xuất nguồn gốc
- `san-pham/` — danh mục sản phẩm, hướng dẫn sử dụng
- `lien-he/` — form liên hệ, bản đồ văn phòng, kênh đại lý

Mỗi trang nhớ export `metadata` riêng (title + description + `alternates.canonical`) để SEO on-page không bị trùng.

## SEO on-page đã làm sẵn

- `metadata` gốc với title template, keywords ("Sâm Báo", "Sâm Báo Núi Báo", "Sâm Báo Triso Triệu Sơn"), Open Graph, Twitter Card
- JSON-LD `@graph`: `Organization` (Triso) + `Place` (vùng Núi Báo, có toạ độ) + `Product` (Sâm Báo)
- HTML semantic: `header` / `nav` / `main` / `section` + `h1` duy nhất, `table` có `caption` và `th scope`
- Link "bỏ qua điều hướng" cho bàn phím, `aria-current` trên menu, `focus-visible` rõ ràng
- `robots.js` + `sitemap.js` tự sinh

## Việc cần bạn hoàn thiện

1. **Ảnh**: thêm `/public/og-sam-bao.jpg` (1200×630) và `/public/logo-sam-bao-triso.png`; thay các mảng nền bằng ảnh thật vùng trồng, củ sâm, hội thảo khoa học.
2. **Toạ độ Núi Báo** trong `lib/site.js` đang là vị trí tham khảo của khu vực Vĩnh Lộc — đo lại toạ độ chính xác của vùng trồng rồi cập nhật (dùng cho cả JSON-LD và bản đồ).
3. **Số liệu dược tính**: hiện liệt kê nhóm hoạt chất theo cẩm nang Triso. Khi có phiếu kiểm nghiệm, bổ sung cột hàm lượng cụ thể và trích dẫn tên đề tài/đơn vị kiểm nghiệm — đây là phần tạo uy tín mạnh nhất cho hồ sơ chỉ dẫn địa lý.
4. **Mã Google Search Console** điền vào `metadata.verification.google`.
5. **Email** `info@sambao.vn` trong `lib/site.js` là giả định — sửa cho đúng.
