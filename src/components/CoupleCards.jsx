"use client";

export default function CoupleCards() {
  return (
    <div className="bg-paper">
      {/* Groom Card */}
      <div
        className="relative w-full aspect-[3/4] bg-cover bg-center"
        style={{
          backgroundImage:
            "url(/assets/images/bin3.webp)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-6 left-0 w-full text-center z-10">
          <div className="inline-block bg-[#6d0208] text-white text-xs uppercase tracking-widest px-3 py-1 mb-2 font-lora">
            Chú rể
          </div>
          <div className="font-dancing text-white text-[42px] leading-tight">
            Đức Mạnh
          </div>
        </div>
      </div>

      {/* Bride Card */}
      <div
        className="relative w-full aspect-[3/4] bg-cover bg-center"
        style={{
          backgroundImage:
            "url(/assets/images/bin8.webp)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-6 left-0 w-full text-center z-10">
          <div className="inline-block bg-[#6d0208] text-white text-xs uppercase tracking-widest px-3 py-1 mb-2 font-lora">
            Cô dâu
          </div>
          <div className="font-dancing text-white text-[42px] leading-tight">
            Hà My
          </div>
        </div>
      </div>
    </div>
  );
}
