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
                09 giờ
              </div>
              <div className="w-px h-8 bg-[#6d0208]/30" />
              <div className="text-center">
                <div className="flex gap-1">
                  {["20", "09", "26"].map((n, i) => (
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
                Chủ nhật
              </div>
            </div>

            <p className="text-center font-lora italic text-neutral-500 text-[12px] mb-4">
              (Tức ngày 10 tháng 8 năm Bính Ngọ)
            </p>

            <div className="border-t border-[#6d0208]/10 pt-4">
              <div className="text-xs uppercase tracking-widest text-[#6d0208]/70 font-lora mb-1 text-center">
                Địa điểm
              </div>
              <div className="text-center font-lora font-semibold text-neutral-700 text-[14px] mb-1">
                Tư gia nhà trai
              </div>
              <div className="text-center text-neutral-500 text-[13px] leading-6">
                Khu 6, Vĩnh Lại, Bản Nguyên, Phú Thọ
                <br />
                
              </div>

              {/* Embedded map */}
              <div className="mt-4 rounded-lg overflow-hidden border border-[#6d0208]/15">
                <iframe
                  title="Bản đồ tư gia nhà trai - Khu 6, Vĩnh Lại, Bản Nguyên, Phú Thọ"
                  src="https://www.google.com/maps?q=21.2598025,105.3423005&hl=vi&z=16&output=embed"
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Map button */}
              <div className="mt-4 flex justify-center">
                <a
                  href="https://www.google.com/maps/place/khu+6+v%C4%A9nh+l%E1%BA%A1i+l%C3%A2m+thao+ph%C3%BA+th%E1%BB%8D/@21.2598025,105.3423005,1146m/data=!3m2!1e3!4b1!4m6!3m5!1s0x31348d0074bcc6cb:0xdf003758a935b816!8m2!3d21.2598025!4d105.3423005!16s%2Fg%2F11yfmtsbwm!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDgyNi4wIKXMDSoASAFQAw%3D%3D"
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

        {/* Event 2: Tiệc Thân Mật */}
        <div className="border border-[#6d0208]/20 rounded-lg overflow-hidden">
          <div className="bg-[#6d0208] text-white text-center py-2 font-lora text-xs uppercase tracking-widest">
            Tiệc Thân Mật Tại Nhà Trai
          </div>
          <div className="p-5 bg-white/60">
            {/* Time row */}
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="font-lora text-[#6d0208] text-[18px] font-semibold">
                15 giờ 30 phút
              </div>
              <div className="w-px h-8 bg-[#6d0208]/30" />
              <div className="flex gap-1">
                {["19", "09", "26"].map((n, i) => (
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
              (Tức ngày 9 tháng 8 năm Bính Ngọ)
            </p>

            <div className="border-t border-[#6d0208]/10 pt-4">
              <div className="text-xs uppercase tracking-widest text-[#6d0208]/70 font-lora mb-1 text-center">
                Địa điểm
              </div>
              
              <div className="text-center text-neutral-500 text-[13px] leading-6">
               Khu 6, Vĩnh Lại, Bản Nguyên, Phú Thọ
              </div>

              {/* Map button */}
              <div className="mt-4 flex justify-center">
                <a
                  href="https://www.google.com/maps/place/khu+6+v%C4%A9nh+l%E1%BA%A1i+l%C3%A2m+thao+ph%C3%BA+th%E1%BB%8D/@21.2598025,105.3423005,1146m/data=!3m2!1e3!4b1!4m6!3m5!1s0x31348d0074bcc6cb:0xdf003758a935b816!8m2!3d21.2598025!4d105.3423005!16s%2Fg%2F11yfmtsbwm!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDgyNi4wIKXMDSoASAFQAw%3D%3D"
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

        {/* Event 3: Tiệc Thân Mật Tại Nhà Gái */}
        <div className="border border-[#6d0208]/20 rounded-lg overflow-hidden">
          <div className="bg-[#6d0208] text-white text-center py-2 font-lora text-xs uppercase tracking-widest">
            Tiệc Thân Mật Tại Nhà Gái
          </div>
          <div className="p-5 bg-white/60">
            {/* Time row */}
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="font-lora text-[#6d0208] text-[18px] font-semibold">
                10 giờ
              </div>
              <div className="w-px h-8 bg-[#6d0208]/30" />
              <div className="flex gap-1">
                {["19", "09", "26"].map((n, i) => (
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
              (Tức ngày 9 tháng 8 năm Bính Ngọ)
            </p>

            <div className="border-t border-[#6d0208]/10 pt-4">
              <div className="text-xs uppercase tracking-widest text-[#6d0208]/70 font-lora mb-1 text-center">
                Địa điểm
              </div>

              <div className="text-center text-neutral-500 text-[13px] leading-6">
                Ngõ 69 Đốc Ngữ, Phường Nông Trang, Phú Thọ
              </div>

              {/* Embedded map */}
              {/* <div className="mt-4 rounded-lg overflow-hidden border border-[#6d0208]/15">
                <iframe
                  title="Bản đồ tư gia nhà gái - Ngõ 69 Đốc Ngữ, Phường Nông Trang, Phú Thọ"
                  src="https://www.google.com/maps?q=21.326645,105.372803&hl=vi&z=16&output=embed"
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div> */}

              {/* Map button */}
              <div className="mt-4 flex justify-center">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=21.326645%2C105.372803"
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
