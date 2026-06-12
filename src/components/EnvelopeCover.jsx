"use client";

import { useState } from "react";

export default function EnvelopeCover({ onOpen }) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  const handleOpen = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    // Play music immediately when clicked
    onOpen();
    
    // Remove the envelope from DOM after animation completes (approx 1.5s)
    setTimeout(() => {
      setIsRemoved(true);
    }, 1500);
  };

  if (isRemoved) return null;

  return (
    <div
      id="card-opening-sides"
      className={`fixed inset-0 z-50 max-w-[575px] mx-auto overflow-hidden bg-transparent pointer-events-auto`}
      style={{
        "--slide-card-max-width": "575px",
        "--slide-card-color": "#6d0208",
        "--slide-card-stripe-color": "#e9e9e9",
        "--slide-card-stripe-size": "3.5%",
        "--slide-seal-size": "80px",
      }}
    >
      {/* Right side panel */}
      <div
        className={`absolute top-0 right-0 h-full w-[50%] bg-burgundy z-0 transition-transform duration-[1200ms] ease-in-out ${
          isAnimating ? "translate-x-full" : "translate-x-0"
        }`}
      />

      {/* Left side panel */}
      <div
        className={`absolute top-0 left-0 h-full w-[68%] z-10 transition-transform duration-[1200ms] ease-in-out flex flex-col justify-between p-8 text-white ${
          isAnimating ? "-translate-x-full" : "translate-x-0"
        }`}
        style={{
          background: `linear-gradient(to right, var(--slide-card-color) 0%, var(--slide-card-color) calc(100% - var(--slide-card-stripe-size)), var(--slide-card-stripe-color) calc(100% - var(--slide-card-stripe-size)), var(--slide-card-stripe-color) 100%)`,
        }}
      >
        {/* Save the date text */}
        <div className="mt-[10vh] pl-16 relative">
          <span className="absolute left-0 bottom-[-20px] font-dancing text-[80px] leading-[0.8] text-white/95">
            S
          </span>
          <div className="font-dancing text-[36px] leading-none text-white/95 whitespace-nowrap">
            ave the date
          </div>
        </div>

        {/* Names */}
        <div className="flex flex-col gap-2 mt-[-5vh]">
          <div className="font-dancing text-[40px] leading-tight text-white/90">
            Đức Mạnh
          </div>
          <div className="font-lora italic text-[28px] leading-none text-white/80 pl-4 rotate-[-4deg]">
            &
          </div>
          <div className="font-dancing text-[40px] leading-tight text-white/90">
            Hà My
          </div>
        </div>

        {/* Invitation Text */}
        <div className="font-lora italic text-[16px] tracking-wide mb-[6vh]">
          Trân trọng kính mời!
        </div>

        {/* Wax Seal Button centered on the split */}
        <button
          onClick={handleOpen}
          className={`absolute right-[-40px] top-[50%] translate-y-[-50%] w-[80px] h-[80px] rounded-full z-20 flex items-center justify-center cursor-pointer select-none transition-all duration-300 hover:scale-105 active:scale-95 ${
            isAnimating ? "pointer-events-none opacity-0" : ""
          }`}
          aria-label="Mở thiệp"
        >
          {/* Pulsing ring outer boundary */}
          <div className="absolute inset-0 rounded-full border-2 border-gold-ring/60 animate-pulse-slow pointer-events-none" />
          {/* Seal core */}
          <div className="w-[74px] h-[74px] rounded-full bg-gold-seal flex items-center justify-center shadow-lg border border-gold-ring/30">
            <img
              src="/assets/images/side-card-icon.png"
              alt="Mở thiệp"
              className="w-[50px] h-[50px] object-contain drop-shadow"
            />
          </div>
        </button>
      </div>
    </div>
  );
}
