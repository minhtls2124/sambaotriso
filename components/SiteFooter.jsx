import Link from "next/link";
import { MapPin, Phone, Mail, Globe, Clock, Leaf } from "lucide-react";
import { NAV, SITE } from "@/lib/site";
import LogoSamBao from "./LogoSamBao";

export default function SiteFooter() {
  return (
    <footer className="van-la bg-rung pt-16 text-kem/85">
      <div className="mx-auto w-[92vw] max-w-noidung">
        <div className="grid gap-10 pb-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.2fr]">
          {/* Cột thương hiệu */}
          <div>
            <div className="flex items-center gap-3">
              <LogoSamBao className="h-12 w-12 flex-none" />
              <span>
                <span className="block font-serif text-xl font-semibold text-white">Sâm Báo Triso</span>
                <span className="mt-1 block text-[0.68rem] tracking-[0.26em] text-kim">
                  {SITE.slogan.toUpperCase()}
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-[46ch] text-[0.93rem] leading-relaxed">
              Bảo tồn nguồn gen và phát triển chỉ dẫn địa lý cho Sâm Báo — dược liệu bản địa của vùng
              Núi Báo, xã Vĩnh Hùng, huyện Vĩnh Lộc, tỉnh Thanh Hóa.
            </p>
            <p className="mt-4 text-[0.88rem] font-medium text-kim-sang">{SITE.congTy}</p>
          </div>

          {/* Cột điều hướng */}
          <nav aria-label="Liên kết chân trang">
            <h2 className="mb-4 font-serif text-lg text-kim-sang">Khám phá</h2>
            <ul className="grid gap-2.5 text-[0.92rem]">
              {NAV.map((m) => (
                <li key={m.href}>
                  <Link href={m.href} className="transition hover:text-kim-sang">
                    {m.nhan}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Cột liên hệ */}
          <div>
            <h2 className="mb-4 font-serif text-lg text-kim-sang">Liên hệ</h2>
            <ul className="grid gap-3 text-[0.92rem]">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-[18px] w-[18px] flex-none text-kim" />
                <span>
                  <strong className="font-medium text-white">Văn phòng:</strong> {SITE.diaChi}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Leaf className="mt-0.5 h-[18px] w-[18px] flex-none text-kim" />
                <span>
                  <strong className="font-medium text-white">Vùng trồng:</strong> {SITE.vungTrong}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-[18px] w-[18px] flex-none text-kim" />
                <a href={`tel:${SITE.hotline}`} className="transition hover:text-kim-sang">
                  Hotline: {SITE.hotlineHienThi}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-[18px] w-[18px] flex-none text-kim" />
                <a href={`mailto:${SITE.email}`} className="transition hover:text-kim-sang">
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Globe className="mt-0.5 h-[18px] w-[18px] flex-none text-kim" />
                <a href={SITE.url} className="transition hover:text-kim-sang">
                  sambao.vn
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-[18px] w-[18px] flex-none text-kim" />
                <span>{SITE.gioLamViec}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-kim/20 py-6 text-[0.8rem] text-kem/65 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.congTy}. Bản quyền thương hiệu Sâm Báo Triso.
          </p>
          <p className="max-w-[60ch] md:text-right">
            Thông tin trên website mang tính tham khảo về dược liệu. Sản phẩm không phải là thuốc và
            không có tác dụng thay thế thuốc chữa bệnh.
          </p>
        </div>
      </div>
    </footer>
  );
}
