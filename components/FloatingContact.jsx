"use client";

import { useEffect, useState } from "react";
import { Phone, ArrowUp } from "lucide-react";
import { SITE } from "@/lib/site";

/** Biểu tượng Zalo dạng bong bóng chat có chữ Zalo */
function ZaloIcon({ className = "h-6 w-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M21 11.3a8.4 8.4 0 0 1-12 7.6L3.4 20.6l1.7-5.4A8.4 8.4 0 1 1 21 11.3z"
        fill="currentColor"
      />
      <path
        d="M7.6 8.6h3.1L7.6 13h3.2M14 8.6v4.4M16.6 10.2v2.8"
        stroke="#0068FF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function FloatingContact() {
  const [hienLen, setHienLen] = useState(false);

  useEffect(() => {
    const theoDoi = () => setHienLen(window.scrollY > 600);
    window.addEventListener("scroll", theoDoi, { passive: true });
    theoDoi();
    return () => window.removeEventListener("scroll", theoDoi);
  }, []);

  const lenDau = () => {
    const giam = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: giam ? "auto" : "smooth" });
  };

  const nhanClass =
    "pointer-events-none absolute right-[calc(100%+12px)] top-1/2 hidden -translate-y-1/2 translate-x-1.5 " +
    "whitespace-nowrap rounded-[10px] bg-rung px-3 py-1.5 text-[0.8rem] font-medium text-kem opacity-0 " +
    "shadow-la transition-all group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 " +
    "group-focus-visible:opacity-100 md:block";

  return (
    <div
      className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      {/* Tên công ty hiển thị kèm cụm nút, ẩn trên màn hình rất nhỏ */}
      <span className="hidden rounded-full border border-kim/40 bg-rung/95 px-3.5 py-1.5 text-[0.72rem] font-medium tracking-wide text-kem shadow-la sm:block">
        {SITE.congTyNgan} · {SITE.hotlineHienThi}
      </span>

      <button
        type="button"
        onClick={lenDau}
        aria-label="Lên đầu trang"
        className={`grid h-11 w-11 place-items-center rounded-full border border-kim/60 bg-rung/90 text-kim-sang shadow-la transition-all duration-300 hover:-translate-y-0.5 ${
          hienLen ? "visible translate-y-0 opacity-100" : "invisible translate-y-2.5 opacity-0"
        }`}
      >
        <ArrowUp className="h-5 w-5" />
      </button>

      {/* Zalo — có hiệu ứng rung */}
      <a
        href={SITE.zalo}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Nhắn Zalo cho ${SITE.congTy}`}
        className="group relative grid h-14 w-14 place-items-center rounded-full bg-[#0068FF] text-white shadow-la-cao transition hover:-translate-y-0.5 hover:scale-105"
      >
        <span className={nhanClass}>Nhắn Zalo · {SITE.congTyNgan}</span>
        <ZaloIcon className="h-7 w-7 animate-rung" />
      </a>

      {/* Gọi điện — có vòng sóng lan */}
      <a
        href={`tel:${SITE.hotline}`}
        aria-label={`Gọi hotline ${SITE.hotlineHienThi}`}
        className="group relative grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-rung-sang to-rung text-kim-sang shadow-la-cao transition hover:-translate-y-0.5 hover:scale-105"
      >
        <span className="pointer-events-none absolute inset-0 animate-song rounded-full border-2 border-kim/70" />
        <span className={nhanClass}>Gọi {SITE.hotlineHienThi}</span>
        <Phone className="relative h-6 w-6" />
      </a>
    </div>
  );
}
