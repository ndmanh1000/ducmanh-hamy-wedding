"use client";

export default function CeremonyDetails() {
  return (
    <div className="bg-paper py-10 px-5">
      <div className="space-y-6">
        {/* Event 1: Lễ Thành Hôn */}
        <div className="border border-[#6d0208]/20 rounded-lg overflow-hidden">
          <div className="bg-[#6d0208] text-white text-center py-2 font-lora text-xs uppercase tracking-widest">
            Lễ Thành Hôn
          </div>
          <div className="p-5 bg-white/60">
            {/* Time row */}
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="font-lora text-[#6d0208] text-[18px] font-semibold">
                09 giờ 30
              </div>
              <div className="w-px h-8 bg-[#6d0208]/30" />
              <div className="text-center">
                <div className="flex gap-1">
                  {["02", "05", "26"].map((n, i) => (
                    <div
                      key={i}
                      className="font-lora text-[#6d0208] font-bold text-[20px] leading-none"
                    >
                      {n}
                      {i < 2 && (
                        <span className="text-[#6d0208]/50 mx-0.5">/</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-px h-8 bg-[#6d0208]/30" />
              <div className="font-lora text-neutral-600 text-[14px]">
                Thứ Bảy
              </div>
            </div>

            <p className="text-center font-lora italic text-neutral-500 text-[12px] mb-4">
              (Tức ngày 16 tháng 3 năm Bính Ngọ)
            </p>

            <div className="border-t border-[#6d0208]/10 pt-4">
              <div className="text-xs uppercase tracking-widest text-[#6d0208]/70 font-lora mb-1 text-center">
                Địa điểm
              </div>
              <div className="text-center font-lora font-semibold text-neutral-700 text-[14px] mb-1">
                Tư gia nhà trai
              </div>
              <div className="text-center text-neutral-500 text-[13px] leading-6">
                Số nhà 36A, Ngõ 152 Nguyễn Đình Hoàn
                <br />
                Phường Nghĩa Đô, TP. Hà Nội
              </div>
            </div>
          </div>
        </div>

        {/* Event 2: Tiệc Thân Mật */}
        <div className="border border-[#6d0208]/20 rounded-lg overflow-hidden">
          <div className="bg-[#6d0208] text-white text-center py-2 font-lora text-xs uppercase tracking-widest">
            Tiệc Thân Mật
          </div>
          <div className="p-5 bg-white/60">
            {/* Time row */}
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="font-lora text-[#6d0208] text-[18px] font-semibold">
                11 giờ 00
              </div>
              <div className="w-px h-8 bg-[#6d0208]/30" />
              <div className="flex gap-1">
                {["02", "05", "26"].map((n, i) => (
                  <div
                    key={i}
                    className="font-lora text-[#6d0208] font-bold text-[20px] leading-none"
                  >
                    {n}
                    {i < 2 && (
                      <span className="text-[#6d0208]/50 mx-0.5">/</span>
                    )}
                  </div>
                ))}
              </div>
              <div className="w-px h-8 bg-[#6d0208]/30" />
              <div className="font-lora text-neutral-600 text-[14px]">
                Thứ Bảy
              </div>
            </div>

            <p className="text-center font-lora italic text-neutral-500 text-[12px] mb-4">
              (Tức ngày 16 tháng 3 năm Bính Ngọ)
            </p>

            <div className="border-t border-[#6d0208]/10 pt-4">
              <div className="text-xs uppercase tracking-widest text-[#6d0208]/70 font-lora mb-1 text-center">
                Địa điểm
              </div>
              <div className="text-center font-lora font-semibold text-neutral-700 text-[14px] mb-1">
                Khách sạn HACINCO
              </div>
              <div className="text-center text-neutral-500 text-[13px] leading-6">
                Số 110 Thái Thịnh, Đống Đa, Hà Nội
              </div>

              {/* Map button */}
              <div className="mt-4 flex justify-center">
                <a
                  href="https://maps.app.goo.gl/mGi7z6oV9tHEVinP6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#6d0208] text-white font-lora text-xs uppercase tracking-widest px-5 py-2 rounded-full hover:bg-[#8a0210] transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.079 3.43-4.794 3.43-8.367a8.25 8.25 0 00-16.5 0c0 3.573 1.486 6.288 3.43 8.367a19.58 19.58 0 002.683 2.282 16.975 16.975 0 001.144.742zM21.75 12a9.75 9.75 0 11-19.5 0 9.75 9.75 0 0119.5 0z"
                      clipRule="evenodd"
                    />
                    <path d="M12 12.75a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" />
                  </svg>
                  Chỉ đường
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
