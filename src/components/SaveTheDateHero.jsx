"use client";

export default function SaveTheDateHero({ isOpened }) {
  return (
    <div
      id="card-banner"
      className="relative w-full aspect-[420/692] bg-cover bg-top bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: "url(/assets/images/bin1.webp)",
      }}
    >
      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 w-full h-[400px] bg-gradient-to-t from-black/70 to-transparent pointer-events-none z-0" />

      {/* Content wrapper */}
      <div className="absolute bottom-0 left-0 w-full text-center py-[50px] z-10 flex flex-col items-center">
        {/* Save the date calligraphy */}
        <div
          className={`font-highspirited text-[65px] leading-[1.5] text-white relative inline-block pl-20 transition-all duration-1000 delay-[200ms] ${
            isOpened
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10"
          }`}
        >
          {/* <span className="absolute left-0 bottom-[-24px] text-[110px]">
            H
          </span>
          ãy giữ ngày này */}
        </div>

        {/* Names */}
        <div
          className={`mt-[-5px] flex flex-col gap-0.5 transition-all duration-1000 delay-[500ms] ${
            isOpened
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-10"
          }`}
        >
          <h2 className="font-lora text-[28px] leading-[1.6] text-white font-normal uppercase tracking-wider">
            Đức Mạnh
          </h2>
          <h2 className="font-lora text-[24px] leading-[1.6] text-white/95 font-light uppercase">
            &
          </h2>
          <h2 className="font-lora text-[28px] leading-[1.6] text-white font-normal uppercase tracking-wider">
            Hà My
          </h2>
        </div>

        {/* Date */}
        <div
          className={`font-lora text-[25px] leading-none text-white mt-4 tracking-widest transition-all duration-1000 delay-[800ms] ${
            isOpened
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          20.09.2026
        </div>
      </div>
    </div>
  );
}
