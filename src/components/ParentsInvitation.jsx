"use client";

export default function ParentsInvitation() {
  return (
    <div className="bg-paper py-10 px-6 text-center">
      {/* Parents section */}
      <div className="flex justify-between gap-4 mb-8">
        {/* Groom's parents */}
        <div className="flex-1 text-left">
          <div className="text-[#5C3D2E] font-lora text-xs uppercase tracking-widest border-b border-[#5C3D2E]/30 pb-1 mb-3">
            Nhà trai
          </div>
          <div className="font-lora text-[13px] text-neutral-700 leading-7">
            <div>Ông: Nguyễn Văn Giáp</div>
            <div>Bà: Lê Thị Thanh Vân</div>
          </div>
        </div>

        {/* Bride's parents */}
        <div className="flex-1 text-right">
          <div className="text-[#5C3D2E] font-lora text-xs uppercase tracking-widest border-b border-[#5C3D2E]/30 pb-1 mb-3">
            Nhà gái
          </div>
          <div className="font-lora text-[13px] text-neutral-700 leading-7">
            <div>Ông: Nguyễn Văn Hưng</div>
            <div>Bà: Hoàng Thị Xuân Hương</div>
          </div>
        </div>
      </div>

      {/* Monogram */}
      <div className="flex justify-center mb-6">
        <div
          className="w-24 h-24 rounded-full border-2 flex items-center justify-center relative"
          style={{ borderColor: "#B96420" }}
        >
          <img
            src="/templates/wedding/002/images/signature-bg-red.png"
            alt="MH monogram"
            className="w-20 h-20 object-contain"
          />
        </div>
      </div>

      {/* Invitation text */}
      <p className="font-lora italic text-neutral-600 text-[14px] leading-[1.9] mb-6 max-w-[320px] mx-auto">
        Trân trọng kính mời Quý khách tới dự bữa tiệc chung vui cùng gia đình
        chúng tôi
      </p>

      {/* Divider */}
      <div className="w-px h-8 bg-[#5C3D2E]/30 mx-auto mb-4" />

      {/* Couple names */}
      <div className="flex items-center justify-center gap-3">
        <div className="font-dancing text-[#5C3D2E] text-[32px] leading-tight">
          Đức Mạnh
        </div>
        <div className="font-lora italic text-neutral-500 text-[20px]">&</div>
        <div className="font-dancing text-[#5C3D2E] text-[32px] leading-tight">
          Hà My
        </div>
      </div>
    </div>
  );
}
