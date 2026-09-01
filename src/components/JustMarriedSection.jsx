"use client";

export default function JustMarriedSection() {
  return (
    <div
      className="relative w-full aspect-[4/3] bg-cover overflow-hidden"
      style={{
        backgroundImage:
          "url(/assets/images/bin4.webp)",
        backgroundPosition: "center 30%",
      }}
    >
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
        {/* <div className="font-highspirited text-[58px] leading-none drop-shadow-lg">
          Vừa mới kết hôn
        </div> */}
      </div>
    </div>
  );
}
