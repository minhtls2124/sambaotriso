import Link from "next/link";
import {
  MapPin, FlaskConical, Sprout, ShieldCheck, Leaf, Mountain, Waves, Sun,
  ArrowRight, Microscope, ScrollText, Phone, MessageCircle, BookOpen,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import {
  SITE, DUOC_TINH, DAC_DIEM_THUC_VAT, CONG_DUNG,
  DIEU_KIEN_THO_NHUONG, QUY_TRINH, SAN_PHAM, MOC_THOI_GIAN,
} from "@/lib/site";

export const metadata = {
  title: "Sâm Báo Núi Báo – Đại Việt đệ nhất danh sâm, Vĩnh Lộc Thanh Hóa",
  description:
    "Trang chính thức giới thiệu và bảo tồn chỉ dẫn địa lý Sâm Báo (Abelmoschus sagittifolius) vùng Núi Báo, xã Vĩnh Hùng, Vĩnh Lộc, Thanh Hóa — do Công ty Cổ phần Quốc tế Triệu Sơn (Triso Group) phát triển.",
  alternates: { canonical: "/" },
};

const ICON_THO_NHUONG = [Mountain, Waves, Sprout, Sun];

export default function TrangChu() {
  const banDoSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    "Núi Báo, Vĩnh Hùng, Vĩnh Lộc, Thanh Hóa"
  )}&z=12&output=embed`;

  return (
    <>
      {/* ============================ HERO ============================ */}
      <section className="van-la relative overflow-hidden bg-rung pb-20 pt-[104px] text-white lg:pb-28 lg:pt-32">
        <div className="mx-auto grid w-[92vw] max-w-noidung items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-kim/60 px-4 py-1.5 text-[0.74rem] font-semibold uppercase tracking-[0.2em] text-kim-sang">
              <MapPin className="h-3.5 w-3.5" />
              Chỉ dẫn địa lý · Vĩnh Lộc, Thanh Hóa
            </p>

            <h1 className="mt-6 text-[clamp(2.2rem,5.6vw,3.9rem)] leading-[1.14] text-white">
              Sâm Báo Núi Báo
              <span className="mt-3 block font-serif text-[0.44em] font-normal italic text-kim-sang">
                Đại Việt đệ nhất danh sâm
              </span>
            </h1>

            <p className="mt-6 max-w-[58ch] text-[1.05rem] leading-relaxed text-kem/85">
              Loài dược liệu bản địa <em className="not-italic text-kim-sang">Abelmoschus sagittifolius</em> sinh
              trưởng trên vùng bán sơn địa Núi Báo, xã Vĩnh Hùng — nơi phù sa sông Mã và nền đất giàu khoáng
              tạo nên phẩm chất không nơi nào thay thế được.
            </p>

            <div className="mt-9 flex flex-wrap gap-3.5">
              <Link
                href="/nguon-goc-nui-bao"
                className="inline-flex items-center gap-2.5 rounded-full bg-kim px-7 py-3.5 font-semibold text-rung shadow-la-cao transition hover:-translate-y-0.5 hover:bg-kim-sang"
              >
                <Mountain className="h-[18px] w-[18px]" />
                Khám phá vùng Núi Báo
              </Link>
              <Link
                href="/nghien-cuu-khoa-hoc"
                className="inline-flex items-center gap-2.5 rounded-full border border-kim/60 px-7 py-3.5 font-semibold text-kim-sang transition hover:bg-kim/15"
              >
                <Microscope className="h-[18px] w-[18px]" />
                Dữ liệu khoa học
              </Link>
            </div>

            <dl className="mt-11 grid gap-5 border-t border-kim/25 pt-7 sm:grid-cols-3">
              {[
                { so: "11", nhan: "loại acid amin ghi nhận trong củ" },
                { so: "10–12", nhan: "tháng sinh trưởng trước thu hoạch" },
                { so: "1", nhan: "vùng đặc hữu: Núi Báo – Vĩnh Lộc" },
              ].map((x) => (
                <div key={x.nhan}>
                  <dt className="font-serif text-[2rem] leading-none text-kim-sang">{x.so}</dt>
                  <dd className="mt-2 text-[0.86rem] leading-snug text-kem/75">{x.nhan}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Thẻ định danh thực vật */}
          <aside className="rounded-xl2 border border-kim/30 bg-white/5 p-7 backdrop-blur-sm lg:p-9">
            <p className="flex items-center gap-2 text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-kim">
              <Leaf className="h-4 w-4" /> Phiếu định danh
            </p>
            <h2 className="mt-4 font-serif text-2xl italic text-white">
              Abelmoschus sagittifolius
              <span className="block text-[0.7em] not-italic text-kem/70">(Kurz) Merr.</span>
            </h2>
            <dl className="mt-6 divide-y divide-white/10">
              {DAC_DIEM_THUC_VAT.map((d) => (
                <div key={d.nhan} className="grid grid-cols-[auto_1fr] gap-4 py-3 text-[0.9rem]">
                  <dt className="text-kem/60">{d.nhan}</dt>
                  <dd className="text-right font-medium text-white">{d.giaTri}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      {/* ==================== BỐN CAM KẾT GIÁ TRỊ ==================== */}
      <section className="bg-kem-sau py-14">
        <div className="mx-auto grid w-[92vw] max-w-noidung gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: MapPin, ten: "Dược liệu bản địa", mo: "Gắn với một vùng đất duy nhất: Núi Báo, Vĩnh Hùng." },
            { icon: FlaskConical, ten: "Nghiên cứu khoa học", mo: "Đồng hành cùng hội đồng khoa học và cơ quan quản lý." },
            { icon: Sprout, ten: "Bảo tồn nguồn gen", mo: "Nhân giống từ cây đầu dòng, giữ giống bản địa thuần." },
            { icon: ShieldCheck, ten: "Chuẩn hóa chất lượng", mo: "Quy trình canh tác, sơ chế và chiết xuất khép kín." },
          ].map(({ icon: Icon, ten, mo }) => (
            <article key={ten} className="rounded-xl2 border border-rung/10 bg-white p-6 shadow-la">
              <Icon className="h-7 w-7 text-rung-ngoc" />
              <h3 className="mt-4 text-[1.1rem] text-rung">{ten}</h3>
              <p className="mt-2 text-[0.9rem] leading-relaxed text-than-nhat">{mo}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ==================== CHỈ DẪN ĐỊA LÝ ==================== */}
      <section id="chi-dan-dia-ly" className="py-20 lg:py-24">
        <div className="mx-auto w-[92vw] max-w-noidung">
          <SectionHeading
            nhan="Chỉ dẫn địa lý"
            tieuDe="Vì sao chỉ Núi Báo mới có Sâm Báo"
            moTa="Chỉ dẫn địa lý không phải là một cái tên, mà là mối liên hệ giữa phẩm chất dược liệu và điều kiện tự nhiên của nơi nó sinh ra. Với Sâm Báo, mối liên hệ ấy nằm ở địa hình, thổ nhưỡng và dòng sông Mã."
          />

          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-start">
            <div className="grid gap-5">
              {DIEU_KIEN_THO_NHUONG.map((d, i) => {
                const Icon = ICON_THO_NHUONG[i];
                return (
                  <article key={d.ten} className="flex gap-4 rounded-xl2 border border-rung/10 bg-white p-6 shadow-la">
                    <span className="grid h-12 w-12 flex-none place-items-center rounded-full bg-rung/8 text-rung-sang">
                      <Icon className="h-6 w-6" />
                    </span>
                    <div>
                      <h3 className="text-[1.08rem] text-rung">{d.ten}</h3>
                      <p className="mt-1.5 text-[0.93rem] leading-relaxed text-than-nhat">{d.mo}</p>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Khung bản đồ định vị */}
            <figure className="m-0 overflow-hidden rounded-xl2 border border-rung/15 bg-white shadow-la-cao">
              <div className="flex items-center justify-between gap-3 border-b border-rung/10 bg-kem px-5 py-3.5">
                <p className="flex items-center gap-2 text-[0.88rem] font-semibold text-rung">
                  <MapPin className="h-4 w-4 text-kim-dam" />
                  Núi Báo — xã Vĩnh Hùng, Vĩnh Lộc, Thanh Hóa
                </p>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.vungTrong)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden text-[0.82rem] font-medium text-rung-ngoc underline-offset-4 hover:underline sm:block"
                >
                  Mở Google Maps
                </a>
              </div>

              <iframe
                src={banDoSrc}
                title="Bản đồ định vị vùng trồng Sâm Báo tại Núi Báo, xã Vĩnh Hùng, huyện Vĩnh Lộc, tỉnh Thanh Hóa"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="h-[320px] w-full border-0 lg:h-[420px]"
              />

              <figcaption className="grid gap-2 bg-white px-5 py-4 text-[0.86rem] text-than-nhat sm:grid-cols-3">
                <span><strong className="text-rung">Tọa độ tham khảo:</strong> {SITE.toaDo.lat}, {SITE.toaDo.lng}</span>
                <span><strong className="text-rung">Lưu vực:</strong> sông Mã</span>
                <span><strong className="text-rung">Di sản lân cận:</strong> Thành Nhà Hồ (UNESCO)</span>
              </figcaption>
            </figure>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4 rounded-xl2 border border-kim/40 bg-kim/10 px-6 py-5">
            <ScrollText className="h-6 w-6 flex-none text-kim-dam" />
            <p className="flex-1 text-[0.93rem] text-than">
              Hồ sơ chỉ dẫn địa lý <strong className="text-rung">“Báo”</strong> đang được xây dựng nhằm bảo vệ
              danh tiếng và nguồn gốc của dược liệu Sâm Báo trước tình trạng mạo danh vùng trồng.
            </p>
            <Link
              href="/nguon-goc-nui-bao"
              className="inline-flex items-center gap-2 text-[0.9rem] font-semibold text-rung underline-offset-4 hover:underline"
            >
              Tìm hiểu hồ sơ <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== KHOA HỌC ==================== */}
      <section id="khoa-hoc" className="van-la bg-rung py-20 text-white lg:py-24">
        <div className="mx-auto w-[92vw] max-w-noidung">
          <SectionHeading
            toi
            nhan="Nghiên cứu khoa học"
            tieuDe="Dược tính của Sâm Báo"
            moTa="Các nhóm hoạt chất được ghi nhận trong củ Sâm Báo theo tài liệu nghiên cứu do Triso Group phối hợp cùng các nhà khoa học thực hiện. Hàm lượng cụ thể thay đổi theo tuổi củ, mùa vụ và kỹ thuật canh tác."
          />

          <div className="mt-11 overflow-x-auto rounded-xl2 border border-kim/25 bg-white/5">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <caption className="sr-only">
                Bảng nhóm hoạt chất chính trong củ Sâm Báo và vai trò của từng nhóm
              </caption>
              <thead>
                <tr className="border-b border-kim/30 text-[0.78rem] uppercase tracking-wider text-kim-sang">
                  <th scope="col" className="px-5 py-4 font-semibold">Nhóm hoạt chất</th>
                  <th scope="col" className="px-5 py-4 font-semibold">Vai trò ghi nhận</th>
                  <th scope="col" className="px-5 py-4 font-semibold">Ghi chú</th>
                </tr>
              </thead>
              <tbody className="text-[0.92rem]">
                {DUOC_TINH.map((d) => (
                  <tr key={d.nhom} className="border-b border-white/8 last:border-0 hover:bg-white/5">
                    <th scope="row" className="px-5 py-4 text-left font-medium text-kim-sang">{d.nhom}</th>
                    <td className="px-5 py-4 text-kem/85">{d.vaiTro}</td>
                    <td className="px-5 py-4 text-kem/60">{d.ghiChu}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <article className="rounded-xl2 border border-white/12 bg-white/5 p-7">
              <h3 className="flex items-center gap-2.5 text-xl text-kim-sang">
                <BookOpen className="h-5 w-5" /> Y học cổ truyền
              </h3>
              <ul className="mt-4 grid gap-2.5 text-[0.93rem] text-kem/85">
                {CONG_DUNG.coTruyen.map((c) => (
                  <li key={c} className="flex gap-3">
                    <Leaf className="mt-1 h-4 w-4 flex-none text-kim" />
                    {c}
                  </li>
                ))}
              </ul>
              <p className="mt-5 border-t border-white/10 pt-4 text-[0.85rem] italic text-kem/60">
                Tính vị: ngọt nhạt, tính bình — khác với nhiều loại sâm có tính ôn hoặc tính nóng.
              </p>
            </article>

            <article className="rounded-xl2 border border-white/12 bg-white/5 p-7">
              <h3 className="flex items-center gap-2.5 text-xl text-kim-sang">
                <Microscope className="h-5 w-5" /> Hướng ứng dụng hiện đại
              </h3>
              <ul className="mt-4 grid gap-2.5 text-[0.93rem] text-kem/85">
                {CONG_DUNG.hienDai.map((c) => (
                  <li key={c} className="flex gap-3">
                    <FlaskConical className="mt-1 h-4 w-4 flex-none text-kim" />
                    {c}
                  </li>
                ))}
              </ul>
              <p className="mt-5 border-t border-white/10 pt-4 text-[0.85rem] italic text-kem/60">
                Nội dung mang tính tham khảo khoa học, không phải chỉ định điều trị.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ==================== VÙNG TRỒNG CHUẨN HÓA ==================== */}
      <section id="vung-trong" className="py-20 lg:py-24">
        <div className="mx-auto w-[92vw] max-w-noidung">
          <SectionHeading
            nhan="Vùng trồng chuẩn hóa"
            tieuDe="Sáu bước từ nguồn gen tới hoạt chất"
            moTa="Chuỗi khép kín giúp mỗi củ Sâm Báo đều truy xuất được nguồn gốc và giữ ổn định chất lượng qua từng vụ."
          />

          <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {QUY_TRINH.map((q, i) => (
              <li
                key={q.buoc}
                className="relative rounded-xl2 border border-rung/10 bg-white p-6 shadow-la transition hover:-translate-y-1 hover:border-kim/50"
              >
                <span className="font-serif text-[0.9rem] tracking-[0.18em] text-kim-dam">
                  BƯỚC {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-[1.14rem] text-rung">{q.buoc}</h3>
                <p className="mt-2 text-[0.92rem] leading-relaxed text-than-nhat">{q.mo}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ==================== SẢN PHẨM ==================== */}
      <section id="san-pham" className="bg-kem-sau py-20 lg:py-24">
        <div className="mx-auto w-[92vw] max-w-noidung">
          <SectionHeading
            nhan="Sản phẩm"
            tieuDe="Sâm Báo trong đời sống hằng ngày"
            moTa="Từ củ sâm tươi khó bảo quản, Triso Group phát triển các dạng sản phẩm tiện dụng để giá trị dược liệu đi được vào bữa ăn, ly trà và thói quen chăm sóc sức khỏe."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SAN_PHAM.map((s) => (
              <article
                key={s.ten}
                className="flex flex-col rounded-xl2 border border-rung/10 bg-white p-6 shadow-la transition hover:-translate-y-1 hover:shadow-la-cao"
              >
                <h3 className="text-[1.12rem] text-rung">{s.ten}</h3>
                <p className="mt-1.5 text-[0.8rem] font-medium uppercase tracking-wider text-kim-dam">
                  {s.dungTich}
                </p>
                <p className="mt-3 flex-1 text-[0.92rem] leading-relaxed text-than-nhat">{s.mo}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/san-pham"
              className="inline-flex items-center gap-2 rounded-full border border-rung px-7 py-3 font-semibold text-rung transition hover:bg-rung hover:text-kem"
            >
              Xem toàn bộ sản phẩm <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== HÀNH TRÌNH ==================== */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto w-[92vw] max-w-noidung">
          <SectionHeading
            nhan="Hành trình phục hưng"
            tieuDe="Một dược liệu quý không thể hồi sinh trong ngày một ngày hai"
          />

          <ol className="mt-12 border-l-2 border-kim/35 pl-6 sm:pl-8">
            {MOC_THOI_GIAN.map((m) => (
              <li key={m.nam} className="relative pb-9 last:pb-0">
                <span className="absolute -left-[31px] top-1 grid h-4 w-4 place-items-center rounded-full border-2 border-kim bg-kem sm:-left-[39px]" />
                <p className="font-serif text-[1.15rem] font-semibold text-rung">{m.nam}</p>
                <p className="mt-1 max-w-[70ch] text-[0.95rem] leading-relaxed text-than-nhat">{m.noiDung}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ==================== CTA LIÊN HỆ ==================== */}
      <section id="lien-he" className="van-la bg-rung-sang py-16 text-white lg:py-20">
        <div className="mx-auto grid w-[92vw] max-w-noidung items-center gap-8 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <h2 className="text-[clamp(1.6rem,3.6vw,2.4rem)] text-white">
              Hợp tác phát triển vùng nguyên liệu Sâm Báo
            </h2>
            <p className="mt-4 max-w-[58ch] text-[1rem] leading-relaxed text-kem/85">
              {SITE.congTy} tiếp nhận hợp tác về vùng trồng, phân phối sản phẩm và nghiên cứu khoa học
              liên quan tới Sâm Báo Núi Báo.
            </p>
          </div>

          <div className="flex flex-wrap gap-3.5 lg:justify-end">
            <a
              href={`tel:${SITE.hotline}`}
              className="inline-flex items-center gap-2.5 rounded-full bg-kim px-7 py-3.5 font-semibold text-rung shadow-la-cao transition hover:-translate-y-0.5 hover:bg-kim-sang"
            >
              <Phone className="h-[18px] w-[18px]" /> {SITE.hotlineHienThi}
            </a>
            <a
              href={SITE.zalo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full border border-kim/60 px-7 py-3.5 font-semibold text-kim-sang transition hover:bg-kim/15"
            >
              <MessageCircle className="h-[18px] w-[18px]" /> Nhắn Zalo
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
