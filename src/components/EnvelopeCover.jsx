"use client";
import { useState } from "react";

export default function EnvelopeCover({ onOpen }) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  const handleOpen = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    onOpen();
    setTimeout(() => setIsRemoved(true), 1500);
  };

  if (isRemoved) return null;

  return (
    <div
      id="card-opening-sides"
      className="fixed inset-0 z-50 flex justify-center overflow-hidden bg-[#2B1D14]"
    >
      <div className="relative h-full w-full max-w-[575px] overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[#2B1D14]" />
        <div className="absolute -left-[180px] top-[20%] h-[360px] w-[360px] rounded-full bg-[#7d5740] opacity-25 blur-[100px]" />
        <div className="absolute -right-[180px] bottom-[10%] h-[400px] w-[400px] rounded-full bg-[#a9743c] opacity-20 blur-[120px]" />

        {/* Right envelope */}
        <div
          className={`absolute right-0 top-0 z-10 h-full w-[50%] bg-[#5C3D2E] shadow-[-20px_0_60px_rgba(0,0,0,0.15)] transition-transform duration-[1200ms] ease-in-out ${
            isAnimating ? "translate-x-full" : "translate-x-0"
          }`}
        >
          <div className="absolute left-0 top-0 h-full w-px bg-[#B96420] opacity-40" />
          <div className="absolute right-7 top-7 h-16 w-16 border-r border-t border-[#B96420] opacity-50" />
          <div className="absolute bottom-7 right-7 h-16 w-16 border-b border-r border-[#B96420] opacity-50" />
        </div>

        {/* Left card */}
        <div
          className={`absolute left-0 top-0 z-20 h-full w-[72%] bg-[#5C3D2E] shadow-[15px_0_50px_rgba(0,0,0,0.2)] transition-transform duration-[1200ms] ease-in-out ${
            isAnimating ? "-translate-x-full" : "translate-x-0"
          }`}
        >
          <div className="absolute inset-4 border border-[#B96420] opacity-40" />
          <div className="absolute inset-7 border border-[#F5EFE6]/10" />

          {/* Top decoration */}
          <div className="absolute left-1/2 top-8 flex -translate-x-1/2 items-center gap-3">
            <div className="h-px w-12 bg-[#B96420] opacity-50" />
            <div className="h-2.5 w-2.5 rotate-45 border border-[#B96420]" />
            <div className="h-px w-12 bg-[#B96420] opacity-50" />
          </div>

          {/* Card content */}
          <div className="relative flex h-full flex-col items-center justify-center px-10 text-center">
            {/* Save the date */}
            <div className="absolute top-[16vh] flex flex-col items-center">
              <div className="font-dancing text-[34px] leading-none tracking-wide text-[#F5EFE6]/95">
                Save the date
              </div>
              <div className="mx-auto mt-4 h-px w-20 bg-[#B96420] opacity-70" />
            </div>

            {/* Names */}
            <div className="mt-[12vh] flex flex-col items-center">
              <div className="font-dancing text-[46px] leading-none text-[#F5EFE6]">
                Đức Mạnh
              </div>
              <div className="my-4 font-lora text-[25px] italic text-[#B96420]">
                &
              </div>
              <div className="font-dancing text-[46px] leading-none text-[#F5EFE6]">
                Hà My
              </div>
            </div>

            {/* Invitation */}
            <div className="absolute bottom-[13vh] flex flex-col items-center">
              <div className="font-lora text-[15px] italic tracking-[0.18em] text-[#F5EFE6]/80">
                Trân trọng kính mời!
              </div>
              <div className="mt-4 flex items-center gap-3">
                <div className="h-px w-8 bg-[#B96420] opacity-50" />
                <div className="h-1.5 w-1.5 rotate-45 bg-[#B96420]" />
                <div className="h-px w-8 bg-[#B96420] opacity-50" />
              </div>
            </div>
          </div>
        </div>

        {/* Wax seal button */}
        <button
          onClick={handleOpen}
          className={`absolute right-[28%] top-1/2 z-40 flex h-[88px] w-[88px] -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full cursor-pointer select-none transition-all duration-300 hover:scale-105 active:scale-95 ${
            isAnimating ? "pointer-events-none scale-90 opacity-0" : ""
          }`}
          aria-label="Mở thiệp"
        >
          {/* Outer glow */}
          <div className="absolute inset-[-8px] rounded-full border border-[#B96420] opacity-30" />
          <div className="absolute inset-[-3px] rounded-full border border-[#B96420] opacity-70 animate-pulse-slow" />

          {/* Seal */}
          <div className="relative flex h-[80px] w-[80px] items-center justify-center rounded-full border-2 border-[#d4893a] bg-[#B96420] shadow-[0_8px_25px_rgba(0,0,0,0.35)]">
            <div className="absolute inset-[5px] rounded-full border border-[#8a4d1a] opacity-60" />
            <img
              src="/assets/images/side-card-icon.png"
              alt="Mở thiệp"
              className="relative z-10 h-[50px] w-[50px] object-contain drop-shadow-md"
            />
          </div>
        </button>

        {/* Side text */}
        <div
          className={`absolute bottom-7 right-5 z-30 rotate-90 origin-bottom-right font-lora text-[9px] tracking-[0.35em] text-[#F5EFE6]/40 transition-opacity duration-500 ${
            isAnimating ? "opacity-0" : "opacity-100"
          }`}
        >
          OPEN OUR INVITATION
        </div>
      </div>
    </div>
  );
}
