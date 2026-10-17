"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { NAV, SITE } from "@/lib/site";
import LogoSamBao from "./LogoSamBao";

export default function SiteHeader() {
  const [mo, setMo] = useState(false);
  const [daCuon, setDaCuon] = useState(false);
  const duongDan = usePathname();

  useEffect(() => {
    const theoDoi = () => setDaCuon(window.scrollY > 24);
    window.addEventListener("scroll", theoDoi, { passive: true });
    theoDoi();
    return () => window.removeEventListener("scroll", theoDoi);
  }, []);

  // Đóng menu khi chuyển trang
  useEffect(() => setMo(false), [duongDan]);

  // Khóa cuộn nền khi menu mobile đang mở
  useEffect(() => {
    document.body.style.overflow = mo ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mo]);

  const dangO = (href) =>
    href === "/" ? duongDan === "/" : duongDan.startsWith(href);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        daCuon
          ? "bg-rung/97 shadow-la backdrop-blur-md"
          : "bg-rung/90 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-[72px] w-[92vw] max-w-noidung items-center justify-between gap-4 lg:h-20">
        <Link href="/" className="flex items-center gap-3" aria-label={`${SITE.ten} — trang chủ`}>
          <LogoSamBao className="h-11 w-11 flex-none" />
          <span className="leading-none">
            <span className="block font-serif text-[1.3rem] font-semibold tracking-wide text-white">
              Sâm Báo
            </span>
            <span className="mt-1 block text-[0.62rem] font-medium tracking-[0.3em] text-kim">
              TRISO GROUP
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Điều hướng chính">
          {NAV.map((m) => (
            <Link
              key={m.href}
              href={m.href}
              aria-current={dangO(m.href) ? "page" : undefined}
              className={`relative rounded-full px-3.5 py-2 text-[0.92rem] font-medium transition ${
                dangO(m.href)
                  ? "text-kim-sang"
                  : "text-white/85 hover:bg-white/10 hover:text-white"
              }`}
            >
              {m.nhan}
              {dangO(m.href) && (
                <span className="absolute inset-x-3.5 -bottom-0.5 h-px bg-kim" />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${SITE.hotline}`}
            className="hidden items-center gap-2 rounded-full border border-kim/70 bg-kim/10 px-5 py-2.5 text-[0.9rem] font-semibold text-kim-sang transition hover:bg-kim hover:text-rung md:inline-flex"
          >
            <Phone className="h-4 w-4" />
            {SITE.hotlineHienThi}
          </a>

          <button
            type="button"
            onClick={() => setMo((v) => !v)}
            aria-expanded={mo}
            aria-controls="menu-mobile"
            aria-label={mo ? "Đóng menu" : "Mở menu"}
            className="rounded-lg p-2.5 text-kim-sang transition hover:bg-white/10 xl:hidden"
          >
            {mo ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <div
        id="menu-mobile"
        className={`grid overflow-hidden border-t border-kim/20 bg-rung transition-[grid-template-rows] duration-300 xl:hidden ${
          mo ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <nav aria-label="Điều hướng phụ">
            {NAV.map((m) => (
              <Link
                key={m.href}
                href={m.href}
                className={`block border-b border-white/10 px-[4vw] py-3.5 font-medium ${
                  dangO(m.href) ? "text-kim-sang" : "text-white/85"
                }`}
              >
                {m.nhan}
              </Link>
            ))}
          </nav>
          <a
            href={`tel:${SITE.hotline}`}
            className="m-[4vw] flex items-center justify-center gap-2 rounded-full bg-kim px-6 py-3 font-semibold text-rung"
          >
            <Phone className="h-[18px] w-[18px]" /> Gọi {SITE.hotlineHienThi}
          </a>
        </div>
      </div>
    </header>
  );
}
