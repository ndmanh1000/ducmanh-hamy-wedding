"use client";

import { useState, useEffect } from "react";

const SAMPLE_WISHES = [
  { name: "Minh Tuấn", message: "Chúc mừng hai bạn! Chúc cho hai bạn mãi hạnh phúc bên nhau nhé 💕" },
  { name: "Lan Anh", message: "Chúc mừng hôn lễ! Mong hai bạn luôn yêu thương và trân trọng nhau 🌹" },
  { name: "Hùng Sơn", message: "Chúc mừng hai bạn! Chúc hai bạn một đời yêu thương và hạnh phúc trọn vẹn 🎉" },
];

export default function GuestbookSection() {
  const [wishes, setWishes] = useState(SAMPLE_WISHES);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [showAll, setShowAll] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Load from localStorage
  useEffect(() => {
    const loadWishes = () => {
      try {
        const saved = localStorage.getItem("wedding_wishes");
        if (saved) {
          const parsed = JSON.parse(saved);
          setWishes([...SAMPLE_WISHES, ...parsed]);
        }
      } catch {}
    };
    
    loadWishes();
    // Kích hoạt animation khi vào trang
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newWish = { name: name.trim(), message: message.trim() };
    const newWishes = [...wishes, newWish];
    setWishes(newWishes);

    // Save user-added wishes separately
    try {
      const saved = localStorage.getItem("wedding_wishes");
      const existing = saved ? JSON.parse(saved) : [];
      localStorage.setItem("wedding_wishes", JSON.stringify([...existing, newWish]));
    } catch {}

    setName("");
    setMessage("");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2000);
  };

  const displayed = showAll ? wishes : wishes.slice(0, 3);

  // Lấy chữ cái đầu để làm avatar
  const getInitials = (fullName) => {
    const parts = fullName.trim().split(/\s+/);
    if (parts.length >= 2) {
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    }
    return fullName.substring(0, 2).toUpperCase();
  };

  // Các biến thể màu gradient cho avatar
  const avatarColors = [
    "bg-gradient-to-br from-[#B96420] to-[#5C3D2E]",
    "bg-gradient-to-br from-[#5C3D2E] to-[#2B1D14]",
    "bg-gradient-to-br from-[#C9803D] to-[#B96420]",
    "bg-gradient-to-br from-[#7d5740] to-[#5C3D2E]",
  ];

  return (
    <div className="bg-paper py-12 px-5 relative overflow-hidden">
      {/* Hoa văn trang trí bay lơ lửng */}
      <div
        className="pointer-events-none absolute top-8 left-4 text-[#B96420]/20 text-[38px] animate-float select-none"
        aria-hidden="true"
      >
        ✿
      </div>
      <div
        className="pointer-events-none absolute top-28 right-5 text-[#5C3D2E]/20 text-[30px] animate-float select-none"
        style={{ animationDelay: "1s" }}
        aria-hidden="true"
      >
        ❀
      </div>
      <div
        className="pointer-events-none absolute bottom-16 left-8 text-[#B96420]/20 text-[28px] animate-float select-none"
        style={{ animationDelay: "0.5s" }}
        aria-hidden="true"
      >
        ✾
      </div>
      <div
        className="pointer-events-none absolute bottom-32 right-6 text-[#5C3D2E]/15 text-[34px] animate-float select-none"
        style={{ animationDelay: "1.5s" }}
        aria-hidden="true"
      >
        ✿
      </div>

      {/* Header */}
      <div
        className={`relative text-center mb-9 transition-all duration-700 ease-out ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        }`}
      >
        <div className="font-dancing text-[#5C3D2E] text-[48px] leading-none">
          Sổ lưu bút
        </div>
        <div className="flex items-center justify-center gap-2 mt-3 mb-4">
          <span className="h-px w-12 divider-shimmer" />
          <span
            className="text-[#B96420] text-[11px] animate-spin-slow inline-block"
            aria-hidden="true"
          >
            ✦
          </span>
          <span className="h-px w-12 divider-shimmer" />
        </div>
        <p className="font-lora italic text-neutral-500 text-[13px] leading-relaxed max-w-[300px] mx-auto">
          Cảm ơn bạn rất nhiều vì đã gửi những lời chúc mừng tốt đẹp nhất đến chúng tôi!
        </p>
      </div>

      {/* Wish form */}
      <div
        className={`relative mb-10 transition-all duration-700 ease-out ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
        style={{ transitionDelay: "150ms" }}
      >
        <form
          onSubmit={handleSubmit}
          className="relative bg-white/85 rounded-2xl px-6 pt-8 pb-6 shadow-[0_10px_30px_rgba(92,61,46,0.10)] border border-[#5C3D2E]/10"
        >
          {/* Góc trang trí */}
          <span className="pointer-events-none absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#B96420]/60 rounded-tl-2xl" />
          <span className="pointer-events-none absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#B96420]/60 rounded-tr-2xl" />
          <span className="pointer-events-none absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#B96420]/60 rounded-bl-2xl" />
          <span className="pointer-events-none absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#B96420]/60 rounded-br-2xl" />

          {/* Icon bút */}
          <div
            className="mx-auto mb-5 w-12 h-12 rounded-full flex items-center justify-center text-[20px] shadow-md animate-float"
            style={{ background: "linear-gradient(135deg,#B96420,#5C3D2E)" }}
            aria-hidden="true"
          >
            ✍️
          </div>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Nhập tên của bạn *"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-[#5C3D2E]/20 rounded-xl px-4 py-3 font-lora text-[14px] text-neutral-700 bg-white/70 focus:outline-none focus:border-[#B96420] focus:bg-white focus:shadow-[0_0_0_3px_rgba(185,100,32,0.12)] transition-all duration-300 placeholder:text-neutral-400"
            />
            <textarea
              placeholder="Nhập lời chúc của bạn *"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="w-full border border-[#5C3D2E]/20 rounded-xl px-4 py-3 font-lora text-[14px] text-neutral-700 bg-white/70 focus:outline-none focus:border-[#B96420] focus:bg-white focus:shadow-[0_0_0_3px_rgba(185,100,32,0.12)] transition-all duration-300 placeholder:text-neutral-400 resize-none"
            />
            <button
              type="submit"
              className="group relative w-full overflow-hidden text-white font-lora uppercase tracking-widest text-[13px] py-3.5 rounded-full shadow-md hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              style={{ background: "linear-gradient(90deg,#5C3D2E,#7d5740)" }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {submitted ? (
                  <>
                    <span className="animate-scale-in">✓</span>
                    <span>Đã gửi!</span>
                  </>
                ) : (
                  <>
                    <span>Gửi lời chúc</span>
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </>
                )}
              </span>
              {/* Hiệu ứng loé sáng khi hover */}
              <span
                className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[900ms] ease-out"
                style={{
                  background:
                    "linear-gradient(90deg,transparent,rgba(255,255,255,0.28),transparent)",
                }}
                aria-hidden="true"
              />
            </button>
          </div>
        </form>
      </div>

      {/* Wish list */}
      <div className="space-y-4 mb-6">
        {displayed.map((w, i) => (
          <div
            key={i}
            className={`group relative bg-white/75 backdrop-blur-sm border border-[#5C3D2E]/15 rounded-2xl p-5 shadow-md hover:shadow-xl hover:scale-[1.01] hover:border-[#B96420]/30 transition-all duration-300 ${
              mounted ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={{ animationDelay: `${(i + 3) * 120}ms` }}
          >
            <div className="flex items-start gap-4">
              {/* Avatar circle với gradient */}
              <div
                className={`flex-shrink-0 w-12 h-12 rounded-full ${
                  avatarColors[i % avatarColors.length]
                } text-white flex items-center justify-center font-lora font-bold text-[15px] shadow-md group-hover:scale-110 transition-transform duration-300`}
              >
                {getInitials(w.name)}
              </div>

              {/* Nội dung */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-lora font-bold text-[#5C3D2E] text-[15px]">
                    {w.name}
                  </span>
                  <span className="text-[#B96420] text-[10px]" aria-hidden="true">
                    ✦
                  </span>
                </div>
                <div className="font-lora text-neutral-600 text-[14px] leading-relaxed italic">
                  &ldquo;{w.message}&rdquo;
                </div>
              </div>
            </div>

            {/* Đường trang trí phía dưới */}
            <div className="mt-4 pt-3 border-t border-[#5C3D2E]/8 flex justify-end">
              <div className="flex gap-1.5 text-[#B96420]/30 text-[10px]" aria-hidden="true">
                <span>✿</span>
                <span>❀</span>
                <span>✿</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show more */}
      {wishes.length > 3 && !showAll && (
        <div
          className={`text-center transition-all duration-700 ease-out ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "500ms" }}
        >
          <button
            onClick={() => setShowAll(true)}
            className="group relative overflow-hidden border-2 border-[#5C3D2E] text-[#5C3D2E] bg-white/70 backdrop-blur-sm font-lora uppercase tracking-widest text-[12px] px-8 py-3 rounded-full hover:bg-[#5C3D2E] hover:text-white hover:shadow-lg transition-all duration-300"
          >
            <span className="relative z-10 flex items-center gap-2">
              Xem thêm lời chúc
              <span className="inline-block group-hover:translate-y-1 transition-transform duration-300">
                ↓
              </span>
            </span>
          </button>
        </div>
      )}
    </div>
  );
}
