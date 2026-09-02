"use client";

import { useState, useEffect } from "react";

const WEDDING_DATE = new Date("2026-09-20T09:30:00+07:00");

const DAYS = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];

function buildCalendar(year, month) {
  const firstDay = new Date(year, month - 1, 1);
  const lastDay = new Date(year, month, 0);
  // 0=Sun,1=Mon,...6=Sat — adjust so Mon=0
  let startDow = firstDay.getDay(); // 0=Sun
  startDow = startDow === 0 ? 6 : startDow - 1; // Mon=0
  const cells = [];
  for (let i = 0; i < startDow; i++) cells.push(null);
  for (let d = 1; d <= lastDay.getDate(); d++) cells.push(d);
  return cells;
}

function pad(n) {
  return String(n).padStart(2, "0");
}

export default function CalendarCountdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const diff = WEDDING_DATE - now;
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const cells = buildCalendar(2026, 9);

  return (
    <div className="bg-paper py-10 px-5">
      {/* Header */}
      <div className="text-center mb-6 relative">
        <span className="font-lora text-[72px] text-[#5C3D2E]/10 leading-none select-none absolute left-1/2 -translate-x-1/2 -top-2">
          2026
        </span>
        <span className="font-dancing text-[#5C3D2E] text-[52px] relative z-10">
          Tháng Chín
        </span>
      </div>

      {/* Calendar grid */}
      <div className="max-w-[320px] mx-auto mb-8">
        <div className="grid grid-cols-7 mb-1">
          {DAYS.map((d) => (
            <div
              key={d}
              className="font-lora text-center text-[11px] text-neutral-500 uppercase"
            >
              {d}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-y-1">
          {cells.map((day, idx) => (
            <div
              key={idx}
              className={`relative flex items-center justify-center h-8 rounded-full font-lora text-[13px] ${
                day === 20
                  ? "bg-[#5C3D2E] text-white font-bold"
                  : day
                  ? "text-neutral-700"
                  : ""
              }`}
            >
              {day === 20 && (
                <span className="absolute -top-1 left-1/2 -translate-x-1/2 text-[10px]">
                  ❤️
                </span>
              )}
              {day || ""}
            </div>
          ))}
        </div>
      </div>

      {/* Countdown */}
      <div className="text-center">
        <p className="font-lora italic text-neutral-500 text-[13px] mb-4">
          Chúng mình sẽ cùng chia sẻ một mái nhà và cuộc sống bên nhau trong
        </p>
        <div className="flex justify-center items-center gap-2">
          {[
            { label: "Ngày", value: timeLeft.days },
            { label: "Giờ", value: timeLeft.hours },
            { label: "Phút", value: timeLeft.minutes },
            { label: "Giây", value: timeLeft.seconds },
          ].map((item, i) => (
            <div key={item.label} className="flex items-center gap-2">
              <div className="flex flex-col items-center">
                <div className="font-lora text-[32px] font-bold text-[#5C3D2E] leading-none w-14 text-center">
                  {pad(item.value)}
                </div>
                <div className="font-lora text-[10px] uppercase tracking-widest text-neutral-500 mt-1">
                  {item.label}
                </div>
              </div>
              {i < 3 && (
                <div className="font-lora text-[28px] text-[#5C3D2E]/60 leading-none mb-4">
                  :
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
