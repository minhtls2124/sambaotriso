/**
 * Dữ liệu dùng chung toàn site — sửa một chỗ, cả site đổi theo.
 * Nguồn nội dung: cẩm nang "Hành trình Sâm Báo Triso" của Triso Group.
 */

export const SITE = {
  ten: "Sâm Báo Triso",
  tenDayDu: "Sâm Báo Núi Báo – Chỉ dẫn địa lý Vĩnh Lộc, Thanh Hóa",
  congTy: "Công ty Cổ phần Quốc tế Triệu Sơn (Triso Group)",
  congTyNgan: "Triso Group",
  slogan: "Sống chất từ gốc",
  moTa:
    "Sâm Báo (Abelmoschus sagittifolius) – Đại Việt đệ nhất danh sâm của vùng Núi Báo, xã Vĩnh Hùng, huyện Vĩnh Lộc, Thanh Hóa. Hành trình bảo tồn nguồn gen, xây dựng chỉ dẫn địa lý và nghiên cứu khoa học do Công ty Cổ phần Quốc tế Triệu Sơn (Triso Group) thực hiện.",
  url: "https://sambao.vn",
  hotline: "0965756036",
  hotlineHienThi: "0965 756 036",
  zalo: "https://zalo.me/0965756036",
  email: "info@sambao.vn",
  diaChi: "16 Trần Khát Chân, huyện Vĩnh Lộc, tỉnh Thanh Hóa",
  vungTrong: "Núi Báo, xã Vĩnh Hùng, huyện Vĩnh Lộc, tỉnh Thanh Hóa",
  toaDo: { lat: 20.0686, lng: 105.6189 }, // vị trí tham khảo vùng Núi Báo – Vĩnh Lộc
  gioLamViec: "Thứ 2 – Chủ nhật, 7:30 – 21:00",
};

export const NAV = [
  { href: "/", nhan: "Trang chủ" },
  { href: "/nguon-goc-nui-bao", nhan: "Nguồn gốc Núi Báo" },
  { href: "/nghien-cuu-khoa-hoc", nhan: "Nghiên cứu khoa học" },
  { href: "/vung-trong-chuan-hoa", nhan: "Vùng trồng chuẩn hóa" },
  { href: "/san-pham", nhan: "Sản phẩm" },
  { href: "/lien-he", nhan: "Liên hệ" },
];

/** Dữ liệu dược tính — các nhóm hoạt chất được ghi nhận trong củ Sâm Báo */
export const DUOC_TINH = [
  {
    nhom: "Polysaccharide (chất nhầy)",
    vaiTro: "Tạo độ sánh đặc trưng, bao bọc niêm mạc tiêu hóa",
    ghiChu: "Nhóm hoạt chất nổi bật nhất của Sâm Báo",
  },
  {
    nhom: "Saponin",
    vaiTro: "Nhóm hoạt chất đặc trưng của các loài sâm, liên quan bồi bổ khí lực",
    ghiChu: "Hàm lượng thay đổi theo tuổi củ và vùng trồng",
  },
  {
    nhom: "Flavonoid",
    vaiTro: "Nhóm chất chống oxy hóa thực vật phổ biến",
    ghiChu: "Ghi nhận trong các nghiên cứu thành phần hóa học",
  },
  {
    nhom: "Terpenoid",
    vaiTro: "Góp phần tạo hương và hoạt tính sinh học của dược liệu",
    ghiChu: "Được giữ lại tối đa qua công nghệ BioActive Triso™",
  },
  {
    nhom: "Coumarin",
    vaiTro: "Nhóm hợp chất thứ cấp thường gặp ở dược liệu thân thảo",
    ghiChu: "Ghi nhận trong phân tích thành phần",
  },
  {
    nhom: "Acid amin (11 loại)",
    vaiTro: "Thành phần cấu tạo đạm, nền tảng dinh dưỡng của củ sâm",
    ghiChu: "Số liệu theo tài liệu nghiên cứu của Triso Group",
  },
  {
    nhom: "Khoáng chất vi lượng",
    vaiTro: "Zn, Fe, Se, Mn… bổ sung vi chất",
    ghiChu: "Phụ thuộc thổ nhưỡng vùng trồng Núi Báo",
  },
];

export const DAC_DIEM_THUC_VAT = [
  { nhan: "Tên khoa học", giaTri: "Abelmoschus sagittifolius (Kurz) Merr." },
  { nhan: "Họ thực vật", giaTri: "Họ Bông – Malvaceae" },
  { nhan: "Tên gọi dân gian", giaTri: "Sâm Báo, Sâm Báo hoa vàng, sâm tiến vua" },
  { nhan: "Bộ phận dùng", giaTri: "Rễ củ (thu hoạch sau 10–12 tháng)" },
  { nhan: "Tính vị (YHCT)", giaTri: "Vị ngọt nhạt, tính bình" },
  { nhan: "Vùng phân bố đặc hữu", giaTri: "Núi Báo, xã Vĩnh Hùng, Vĩnh Lộc, Thanh Hóa" },
];

export const CONG_DUNG = {
  coTruyen: [
    "Bồi bổ cơ thể, ích khí",
    "Sinh tân dịch",
    "Hỗ trợ tiêu hóa",
    "Dùng cho người mới ốm dậy, người cao tuổi",
  ],
  hienDai: [
    "Chất nhầy Polysaccharide tạo lớp bao bọc niêm mạc dạ dày",
    "Bổ sung acid amin và khoáng vi lượng từ thực vật",
    "Nguyên liệu cho đồ uống, ẩm thực và chăm sóc cá nhân",
    "Đang được tiếp tục nghiên cứu về hoạt tính sinh học",
  ],
};

export const DIEU_KIEN_THO_NHUONG = [
  {
    ten: "Địa hình bán sơn địa",
    mo: "Núi Báo cao vừa phải, sườn thoải, thoát nước tốt — hạn chế úng rễ, điều kiện then chốt với cây lấy củ.",
  },
  {
    ten: "Phù sa sông Mã",
    mo: "Dải đất ven sông Mã bồi đắp lớp đất thịt nhẹ pha cát, tơi xốp, cho củ phát triển thẳng và ít xơ.",
  },
  {
    ten: "Thổ nhưỡng giàu khoáng",
    mo: "Nền đất feralit xen phù sa cổ, giàu khoáng vi lượng — yếu tố tạo nên hương vị và hoạt chất riêng của Sâm Báo.",
  },
  {
    ten: "Khí hậu chuyển tiếp",
    mo: "Nền nhiệt và lượng mưa phân hóa theo mùa, biên độ ngày đêm rõ, thuận lợi cho tích lũy chất khô trong củ.",
  },
];

export const QUY_TRINH = [
  { buoc: "Bảo tồn nguồn gen", mo: "Xác thực nguồn gen chuẩn của Sâm Báo bản địa, nhân giống từ cây đầu dòng." },
  { buoc: "Vườn ươm", mo: "Ươm cây con trong nhà màng, kiểm soát độ ẩm và sâu bệnh trước khi đưa ra ruộng." },
  { buoc: "Canh tác chuẩn hóa", mo: "Trồng theo quy trình thống nhất tại vùng nguyên liệu Vĩnh Lộc, ghi nhật ký đồng ruộng." },
  { buoc: "Thu hoạch đúng tuổi", mo: "Thu củ sau 10–12 tháng, thời điểm hàm lượng chất khô và hoạt chất ổn định." },
  { buoc: "Sơ chế & bảo quản", mo: "Rửa, phân loại, sấy và bảo quản theo quy trình để giữ hoạt chất." },
  { buoc: "Chiết xuất BioActive Triso™", mo: "Chiết xuất tối ưu nhằm giữ lại tối đa hoạt chất và hương vị tự nhiên." },
];

export const SAN_PHAM = [
  {
    ten: "Cốt Sâm Báo Triso",
    dungTich: "Chai 300ml · Hộp 30 gói 10ml",
    mo: "Dạng cô đặc từ củ Sâm Báo, độ sánh tự nhiên, dùng trực tiếp 5–10ml hoặc pha nước ấm, trà, cà phê, mật ong, ngâm rượu và nấu ăn.",
  },
  {
    ten: "Cà phê & Trà Sâm Báo",
    dungTich: "Hộp giấy",
    mo: "Dòng đồ uống hằng ngày kết hợp Sâm Báo, phục vụ hệ thống Triso Cafe và mua mang về.",
  },
  {
    ten: "Thực phẩm từ Sâm Báo",
    dungTich: "Cháo, củ sâm mật ong, sâm sấy",
    mo: "Nhóm sản phẩm dinh dưỡng chế biến sẵn, tiện dụng cho gia đình.",
  },
  {
    ten: "Mỹ phẩm thiên nhiên Triso Care",
    dungTich: "Chăm sóc da",
    mo: "Ứng dụng chất nhầy và hoạt chất Sâm Báo trong các sản phẩm chăm sóc cá nhân.",
  },
];

export const MOC_THOI_GIAN = [
  { nam: "Xưa", noiDung: "Sâm Báo được dân gian vùng Vĩnh Lộc dùng bồi bổ cơ thể, gắn với danh xưng “Đại Việt đệ nhất danh sâm”." },
  { nam: "2016", noiDung: "Doanh nhân Trần Đức Minh bén duyên với Sâm Báo, bắt đầu khảo sát thực địa tại quê hương Vĩnh Lộc." },
  { nam: "2021", noiDung: "Hội thảo khoa học đánh giá kết quả mô hình trồng cây Sâm Báo thương phẩm tại huyện Vĩnh Lộc." },
  { nam: "2023", noiDung: "Hội đồng khoa học đánh giá giá trị và tiềm năng phát triển Sâm Báo." },
  { nam: "2024", noiDung: "Hội thảo đánh giá tiềm năng, thực trạng và định hướng phát triển Sâm Báo tại UBND huyện Vĩnh Lộc." },
  { nam: "2030", noiDung: "Tầm nhìn: mở rộng vùng nguyên liệu quy mô lớn, chuẩn hóa sản xuất và hoàn thiện hồ sơ chỉ dẫn địa lý “Báo”." },
];
