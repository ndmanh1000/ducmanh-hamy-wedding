"use client";

const TIMELINE = [
  {
    time: "08:00",
    label: "Tiếp đón Khách mời",
    icon: "/templates/wedding/002/images/icon-tl2.png",
  },
  {
    time: "09:00",
    label: "Lễ Thành Hôn",
    icon: "/templates/wedding/002/images/icon-tl3.png",
  },
  {
    time: "10:00",
    label: "Tiệc thân mật",
    icon: "/templates/wedding/002/images/icon-tl4.png",
  },
];

export default function TimelineSection() {
  return (
    <div className="flex flex-col">
      {/* Background image section */}
      <img
        src="/assets/images/bin5.webp"
        alt="Wedding timeline"
        className="w-full h-auto"
      />

      {/* Content section below image */}
      <div className="py-14 px-6 bg-slate-50">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="font-highspirited text-slate-800 text-[52px] leading-none">
            Lịch trình
          </div>
        </div>

        {/* Timeline items */}
        <div className="flex flex-col gap-0 max-w-md mx-auto">
          {TIMELINE.map((item, i) => (
            <div key={i} className="flex items-start gap-5">
              {/* Left: time */}
              <div className="w-16 text-right shrink-0">
                <span className="font-lora text-slate-600 text-[15px]">
                  {item.time}
                </span>
              </div>

              {/* Center: line + dot */}
              <div className="flex flex-col items-center shrink-0">
                <div
                  className="w-10 h-10 rounded-full bg-slate-200 border border-slate-300 flex items-center justify-center"
                >
                  <img src={item.icon} alt="" className="w-6 h-6 object-contain" />
                </div>
                {i < TIMELINE.length - 1 && (
                  <div className="w-px h-14 bg-slate-300 my-1" />
                )}
              </div>

              {/* Right: label */}
              <div className="pt-2">
                <div className="font-lora text-slate-700 text-[15px] leading-snug">
                  {item.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
