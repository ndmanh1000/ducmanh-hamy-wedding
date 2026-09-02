"use client";

import { useState } from "react";

function GiftModal({ isOpen, onClose, person }) {
  if (!isOpen) return null;

  const info = {
    groom: {
      title: "Quà mừng cưới chú rể",
      name: "NGUYỄN ĐỨC MẠNH",
      qrImage: "/assets/images/chure.webp",
    },
    bride: {
      title: "Quà mừng cưới cô dâu",
      name: "NGUYỄN HÀ MY",
      qrImage: "/assets/images/caodau.webp",
    },
  };

  const data = info[person];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-6"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl overflow-hidden w-full max-w-[360px] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header title */}
        <div className="pt-6 px-6 text-center">
          <div className="font-dancing text-[#5C3D2E] text-[30px] leading-tight">
            {data.title}
          </div>
          <div className="w-14 h-px bg-[#5C3D2E]/40 mx-auto mt-2" />
        </div>

        {/* QR code + info */}
        <div className="px-6 pt-5 pb-6 flex flex-col items-center gap-3">
          <img
            src={data.qrImage}
            alt={`QR ${data.name}`}
            className="w-full max-w-[300px] h-auto object-contain rounded-lg"
          />
          <div className="text-center">
            <div className="font-lora font-bold text-neutral-800 text-[16px]">
              {data.name}
            </div>
          </div>
          <button
            onClick={onClose}
            className="mt-2 border border-[#5C3D2E] text-[#5C3D2E] font-lora uppercase tracking-widest text-[12px] px-6 py-2 rounded-full hover:bg-[#5C3D2E] hover:text-white transition-colors"
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
        <div className="font-dancing text-[#5C3D2E] text-[40px] leading-none">
          Quà mừng cưới
        </div>
        <div className="w-16 h-px bg-[#5C3D2E]/40 mx-auto mt-3 mb-3" />
        <p className="font-lora italic text-neutral-500 text-[13px]">
          Sự hiện diện của quý khách là món quà lớn nhất
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <button
          onClick={() => setModal("groom")}
          className="animate-pulse-slow flex items-center justify-center gap-3 bg-[#5C3D2E] text-white font-lora uppercase tracking-widest text-[13px] py-3.5 rounded-full shadow-lg hover:bg-[#7d5740] transition-colors"
        >
          🎁 Quà mừng cưới chú rể
        </button>
        <button
          onClick={() => setModal("bride")}
          className="animate-pulse-slow flex items-center justify-center gap-3 border-2 border-[#5C3D2E] text-[#5C3D2E] font-lora uppercase tracking-widest text-[13px] py-3.5 rounded-full shadow-lg hover:bg-[#5C3D2E] hover:text-white transition-colors"
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
