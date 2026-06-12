"use client";

import { useState } from "react";

function QRPlaceholder() {
  return (
    <div className="w-44 h-44 bg-neutral-50 border border-neutral-200 rounded flex flex-col items-center justify-center p-3 text-center">
      <svg width="50" height="50" viewBox="0 0 100 100" className="text-[#6d0208]/70 mb-2">
        <path d="M15,15 h20 v6 h-14 v14 h-6 z" fill="currentColor" />
        <path d="M65,15 h20 v6 h-14 v14 h-6 z" fill="currentColor" transform="rotate(90 75 25)" />
        <path d="M65,65 h20 v6 h-14 v14 h-6 z" fill="currentColor" transform="rotate(180 75 75)" />
        <path d="M15,65 h20 v6 h-14 v14 h-6 z" fill="currentColor" transform="rotate(270 25 75)" />
        <path d="M50,40 C45,35 37,38 37,45 C37,52 50,60 50,60 C50,60 63,52 63,45 C63,38 55,35 50,40 Z" fill="currentColor" />
        <rect x="25" y="25" width="8" height="8" fill="currentColor" />
        <rect x="67" y="25" width="8" height="8" fill="currentColor" />
        <rect x="25" y="67" width="8" height="8" fill="currentColor" />
        <circle cx="35" cy="50" r="3" fill="currentColor" />
        <circle cx="65" cy="50" r="3" fill="currentColor" />
        <rect x="47" y="25" width="6" height="6" fill="currentColor" />
        <rect x="47" y="69" width="6" height="6" fill="currentColor" />
      </svg>
      <div className="font-lora text-[11px] font-bold text-neutral-600 uppercase tracking-wider">
        MÃ QR BANK
      </div>
      <div className="font-lora text-[9px] text-neutral-400 italic mt-0.5">
        (Thay ảnh QR tại GiftSection.jsx)
      </div>
    </div>
  );
}

function GiftModal({ isOpen, onClose, person }) {
  if (!isOpen) return null;

  const info = {
    groom: {
      title: "Quà mừng cưới chú rể",
      name: "NGUYỄN ĐỨC MẠNH",
      bank: "Techcombank",
      account: "8613 8866 88",
    },
    bride: {
      title: "Quà mừng cưới cô dâu",
      name: "HÀ MY",
      bank: "Techcombank",
      account: "1903 6101 4630 15",
    },
  };

  const data = info[person];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-6"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl overflow-hidden w-full max-w-[340px] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header photo */}
        <div
          className="relative h-36 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(/placeholders/footer.png)",
          }}
        >
          <div className="absolute inset-0 bg-[#6d0208]/60 flex items-center justify-center">
            <div className="font-dancing text-white text-[28px] text-center">
              {data.title}
            </div>
          </div>
        </div>

        {/* QR code + info */}
        <div className="p-6 flex flex-col items-center gap-3">
          <QRPlaceholder />
          <div className="text-center">
            <div className="font-lora font-bold text-neutral-800 text-[16px]">
              {data.name}
            </div>
            <div className="font-lora text-neutral-500 text-[13px]">
              {data.bank}
            </div>
            <div className="font-lora text-[#6d0208] font-bold text-[18px] tracking-widest mt-1">
              {data.account}
            </div>
          </div>
          <button
            onClick={onClose}
            className="mt-2 border border-[#6d0208] text-[#6d0208] font-lora uppercase tracking-widest text-[12px] px-6 py-2 rounded-full hover:bg-[#6d0208] hover:text-white transition-colors"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
}

export default function GiftSection() {
  const [modal, setModal] = useState(null);

  return (
    <div className="bg-paper py-10 px-5">
      <div className="text-center mb-7">
        <div className="font-dancing text-[#6d0208] text-[40px] leading-none">
          Quà mừng cưới
        </div>
        <div className="w-16 h-px bg-[#6d0208]/40 mx-auto mt-3 mb-3" />
        <p className="font-lora italic text-neutral-500 text-[13px]">
          Sự hiện diện của quý khách là món quà lớn nhất
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <button
          onClick={() => setModal("groom")}
          className="animate-pulse-slow flex items-center justify-center gap-3 bg-[#6d0208] text-white font-lora uppercase tracking-widest text-[13px] py-3.5 rounded-full shadow-lg hover:bg-[#8a0210] transition-colors"
        >
          🎁 Quà mừng cưới chú rể
        </button>
        <button
          onClick={() => setModal("bride")}
          className="animate-pulse-slow flex items-center justify-center gap-3 border-2 border-[#6d0208] text-[#6d0208] font-lora uppercase tracking-widest text-[13px] py-3.5 rounded-full shadow-lg hover:bg-[#6d0208] hover:text-white transition-colors"
        >
          🎁 Quà mừng cưới cô dâu
        </button>
      </div>

      <GiftModal
        isOpen={modal !== null}
        onClose={() => setModal(null)}
        person={modal}
      />
    </div>
  );
}
