/**
 * Tiêu đề mục dùng chung: nhãn nhỏ có gạch kim + tiêu đề + mô tả.
 * toi = true khi đặt trên nền xanh sẫm.
 */
export default function SectionHeading({ nhan, tieuDe, moTa, giua = false, toi = false, as: As = "h2" }) {
  return (
    <div className={`max-w-[64ch] ${giua ? "mx-auto text-center" : ""}`}>
      {nhan && (
        <p
          className={`flex items-center gap-2.5 text-[0.75rem] font-semibold uppercase tracking-[0.22em] ${
            toi ? "text-kim-sang" : "text-kim-dam"
          } ${giua ? "justify-center" : ""}`}
        >
          <span className="h-px w-8 bg-current opacity-60" />
          {nhan}
          <span className="h-px w-8 bg-current opacity-60" />
        </p>
      )}
      <As
        className={`mt-3.5 text-[clamp(1.75rem,4vw,2.7rem)] ${
          toi ? "text-white" : "text-rung"
        }`}
      >
        {tieuDe}
      </As>
      {moTa && (
        <p className={`mt-4 text-[1.02rem] leading-relaxed ${toi ? "text-kem/80" : "text-than-nhat"}`}>
          {moTa}
        </p>
      )}
    </div>
  );
}
