"use client";

export default function FooterSection() {
  return (
    <>
      {/* Footer photo with quote */}
      <div
        className="relative w-full aspect-[4/3] bg-cover bg-[center_38%] overflow-hidden"
        style={{
          backgroundImage:
            "url(/assets/images/bin6.webp)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        {/* <div className="absolute bottom-10 left-6 right-6 z-10 text-white">
          <div className="font-highspirited text-[38px] leading-tight drop-shadow-lg">
            Trong em
          </div>
          <div className="font-lora italic text-[18px] leading-loose text-white/90">
            Anh đã tìm thấy mái nhà của mình
            <br />
            trái tim của mình
            <br />
            và mãi mãi của mình!
          </div>
        </div> */}
      </div>

      {/* Branding footer */}
      <div className="bg-[#5C3D2E] py-4 text-center">
        <p className="font-lora text-white/70 text-[12px] tracking-wide">
          Đức Mạnh & Hà My
        </p>
      </div>
    </>
  );
}
