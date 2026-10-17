/**
 * Logo dạng SVG: vòng tròn kim + bóng núi Báo + hoa Sâm Báo 5 cánh.
 * Dùng currentColor cho nét núi nên đổi màu theo ngữ cảnh.
 */
export default function LogoSamBao({ className = "h-11 w-11" }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" role="img" aria-label="Logo Sâm Báo Triso">
      <circle cx="24" cy="24" r="22.5" stroke="#C5A059" strokeWidth="1.3" />
      {/* dãy núi Báo */}
      <path
        d="M9 33.5 17 21l5.5 7.5L27 23l4.5 6.5L39 33.5z"
        fill="#2D6A4F"
        stroke="#1B4332"
        strokeWidth="0.8"
        strokeLinejoin="round"
      />
      <path d="M9 33.5h30" stroke="#C5A059" strokeWidth="1.4" strokeLinecap="round" />
      {/* hoa sâm báo 5 cánh */}
      <g transform="translate(24 15)">
        <g fill="#E3C98B">
          <ellipse cx="0" cy="-6" rx="3" ry="4.2" />
          <ellipse cx="5.7" cy="-1.9" rx="4.2" ry="3" />
          <ellipse cx="3.5" cy="4.9" rx="3.8" ry="3.2" />
          <ellipse cx="-3.5" cy="4.9" rx="3.8" ry="3.2" />
          <ellipse cx="-5.7" cy="-1.9" rx="4.2" ry="3" />
        </g>
        <circle cx="0" cy="0" r="2.6" fill="#C5A059" />
      </g>
    </svg>
  );
}
