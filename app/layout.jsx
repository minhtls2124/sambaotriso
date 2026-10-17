import { Lora, Be_Vietnam_Pro } from "next/font/google";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import FloatingContact from "@/components/FloatingContact";
import { SITE } from "@/lib/site";
import "./globals.css";

const serif = Lora({
  subsets: ["vietnamese", "latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Be_Vietnam_Pro({
  subsets: ["vietnamese", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

/* ===================== SEO ON-PAGE ===================== */
export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Sâm Báo Núi Báo – Chỉ dẫn địa lý Vĩnh Lộc, Thanh Hóa | Triso Group",
    template: "%s | Sâm Báo Triso",
  },
  description: SITE.moTa,
  keywords: [
    "Sâm Báo",
    "Sâm Báo Núi Báo",
    "Sâm Báo Triso Triệu Sơn",
    "Sâm Báo Vĩnh Lộc",
    "Abelmoschus sagittifolius",
    "chỉ dẫn địa lý Sâm Báo",
    "dược liệu Thanh Hóa",
    "Công ty Cổ phần Quốc tế Triệu Sơn",
  ],
  authors: [{ name: SITE.congTy }],
  creator: SITE.congTy,
  publisher: SITE.congTy,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: SITE.url,
    siteName: SITE.ten,
    title: "Sâm Báo Núi Báo – Đại Việt đệ nhất danh sâm | Triso Group",
    description: SITE.moTa,
    images: [{ url: "/og-sam-bao.jpg", width: 1200, height: 630, alt: "Củ Sâm Báo Núi Báo, Vĩnh Lộc, Thanh Hóa" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sâm Báo Núi Báo – Chỉ dẫn địa lý Vĩnh Lộc, Thanh Hóa",
    description: SITE.moTa,
    images: ["/og-sam-bao.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  verification: { google: "" }, // dán mã Google Search Console khi có
};

export const viewport = {
  themeColor: "#1B4332",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

/* Dữ liệu có cấu trúc giúp Google hiểu doanh nghiệp + vùng chỉ dẫn địa lý */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE.url}/#to-chuc`,
      name: SITE.congTy,
      alternateName: ["Triso Group", "Triso", "Sâm Báo Triso"],
      url: SITE.url,
      logo: `${SITE.url}/logo-sam-bao-triso.png`,
      telephone: `+84${SITE.hotline.slice(1)}`,
      email: SITE.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: "16 Trần Khát Chân",
        addressLocality: "Huyện Vĩnh Lộc",
        addressRegion: "Thanh Hóa",
        addressCountry: "VN",
      },
      sameAs: [SITE.zalo],
    },
    {
      "@type": "Place",
      "@id": `${SITE.url}/#vung-nui-bao`,
      name: "Vùng dược liệu Núi Báo",
      description:
        "Vùng trồng Sâm Báo đặc hữu tại Núi Báo, xã Vĩnh Hùng, huyện Vĩnh Lộc, tỉnh Thanh Hóa — địa hình bán sơn địa, thổ nhưỡng bồi đắp bởi sông Mã.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Xã Vĩnh Hùng, huyện Vĩnh Lộc",
        addressRegion: "Thanh Hóa",
        addressCountry: "VN",
      },
      geo: { "@type": "GeoCoordinates", latitude: SITE.toaDo.lat, longitude: SITE.toaDo.lng },
    },
    {
      "@type": "Product",
      name: "Sâm Báo Núi Báo (Abelmoschus sagittifolius)",
      description:
        "Dược liệu bản địa quý của Vĩnh Lộc, Thanh Hóa. Vị ngọt nhạt, tính bình, giàu Polysaccharide, Saponin, Flavonoid và 11 loại acid amin.",
      brand: { "@id": `${SITE.url}/#to-chuc` },
      category: "Dược liệu",
      additionalProperty: [
        { "@type": "PropertyValue", name: "Tên khoa học", value: "Abelmoschus sagittifolius (Kurz) Merr." },
        { "@type": "PropertyValue", name: "Họ thực vật", value: "Malvaceae" },
        { "@type": "PropertyValue", name: "Vùng trồng", value: "Núi Báo, xã Vĩnh Hùng, Vĩnh Lộc, Thanh Hóa" },
      ],
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi" className={`${serif.variable} ${sans.variable}`}>
      <body className="min-h-screen bg-kem font-sans text-than antialiased">
        <a
          href="#noi-dung"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-rung focus:px-4 focus:py-2 focus:text-white"
        >
          Bỏ qua điều hướng, tới nội dung chính
        </a>

        <SiteHeader />
        <main id="noi-dung">{children}</main>
        <SiteFooter />
        <FloatingContact />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
