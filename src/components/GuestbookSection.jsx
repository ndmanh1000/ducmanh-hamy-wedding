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

  return (
    <div className="bg-paper py-10 px-5">
      {/* Header */}
      <div className="text-center mb-7">
        <div className="font-dancing text-[#6d0208] text-[42px] leading-none">
          Sổ lưu bút
        </div>
        <div className="w-16 h-px bg-[#6d0208]/40 mx-auto mt-3 mb-3" />
        <p className="font-lora italic text-neutral-500 text-[13px] leading-relaxed max-w-[280px] mx-auto">
          Cảm ơn bạn rất nhiều vì đã gửi những lời chúc mừng tốt đẹp nhất đến chúng tôi!
        </p>
      </div>

      {/* Wish form */}
      <form onSubmit={handleSubmit} className="mb-8 space-y-3">
        <input
          type="text"
          placeholder="Nhập tên của bạn *"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-[#6d0208]/20 rounded px-4 py-2.5 font-lora text-[14px] text-neutral-700 bg-white/70 focus:outline-none focus:border-[#6d0208]/50 placeholder:text-neutral-400"
        />
        <textarea
          placeholder="Nhập lời chúc của bạn *"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={3}
          className="w-full border border-[#6d0208]/20 rounded px-4 py-2.5 font-lora text-[14px] text-neutral-700 bg-white/70 focus:outline-none focus:border-[#6d0208]/50 placeholder:text-neutral-400 resize-none"
        />
        <button
          type="submit"
          className="w-full bg-[#6d0208] text-white font-lora uppercase tracking-widest text-[13px] py-2.5 rounded hover:bg-[#8a0210] transition-colors"
        >
          {submitted ? "✓ Đã gửi!" : "Gửi lời chúc"}
        </button>
      </form>

      {/* Wish list */}
      <div className="space-y-3">
        {displayed.map((w, i) => (
          <div
            key={i}
            className="bg-white/70 border border-[#6d0208]/10 rounded-lg p-4"
          >
            <div className="font-lora font-semibold text-[#6d0208] text-[14px] mb-1">
              {w.name}
            </div>
            <div className="font-lora text-neutral-600 text-[13px] leading-relaxed italic">
              &ldquo;{w.message}&rdquo;
            </div>
          </div>
        ))}
      </div>

      {/* Show more */}
      {wishes.length > 3 && !showAll && (
        <div className="mt-4 text-center">
          <button
            onClick={() => setShowAll(true)}
            className="border border-[#6d0208] text-[#6d0208] font-lora uppercase tracking-widest text-[12px] px-6 py-2 rounded-full hover:bg-[#6d0208] hover:text-white transition-colors"
          >
            Xem thêm lời chúc
          </button>
        </div>
      )}
    </div>
  );
}
