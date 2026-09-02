"use client";

export default function QuoteSection() {
  return (
    <div
      id="groom-bride"
      className="relative overflow-hidden"
      style={{ background: "#5C3D2E" }}
    >
      {/* Decorative floral images */}
      <img
        src="/templates/wedding/002/images/decor-flower1.png"
        alt=""
        aria-hidden
        className="absolute top-0 right-0 w-40 opacity-60 select-none pointer-events-none"
      />
      <img
        src="/templates/wedding/002/images/decor-flower2.png"
        alt=""
        aria-hidden
        className="absolute bottom-0 left-0 w-40 opacity-60 select-none pointer-events-none"
      />

      {/* Quote content */}
      <div className="relative z-10 flex flex-col items-center py-14 px-8 text-center">
        <h2
          className="font-lora uppercase text-white text-[22px] leading-[1.5] tracking-widest"
          style={{ textShadow: "0 1px 6px rgba(0,0,0,0.25)" }}
        >
         Hai Trái Tim
          <br />
          Một Nhịp Đập
        </h2>

        <div className="my-4 w-[1px] h-12 bg-white/50" />

        <h4 className="font-lora italic text-white/90 text-[15px] leading-[1.7] max-w-[260px]">
          Khởi đầu cho một tâm hồn đồng điệu
          <br />
          vững vàng và vĩnh cửu theo thời gian.
        </h4>
      </div>
    </div>
  );
}
