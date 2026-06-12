"use client";

const TIMELINE = [
  {
    time: "09:00",
    label: "Tiếp đón Khách mời",
    icon: "/templates/wedding/002/images/icon-tl2.png",
  },
  {
    time: "09:30",
    label: "Lễ Thành Hôn",
    icon: "/templates/wedding/002/images/icon-tl3.png",
  },
  {
    time: "11:00",
    label: "Tiệc thân mật",
    icon: "/templates/wedding/002/images/icon-tl4.png",
  },
];

export default function TimelineSection() {
  return (
    <div
      className="relative py-14 px-6 bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage:
          "url(/placeholders/timeline_bg.png)",
      }}
    >
      {/* Dark red overlay */}
      <div className="absolute inset-0 bg-[#6d0208]/80" />

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="font-highspirited text-white text-[52px] leading-none">
            Timeline
          </div>
        </div>

        {/* Timeline items */}
        <div className="flex flex-col gap-0">
          {TIMELINE.map((item, i) => (
            <div key={i} className="flex items-start gap-5">
              {/* Left: time */}
              <div className="w-16 text-right shrink-0">
                <span className="font-lora text-white/80 text-[15px]">
                  {item.time}
                </span>
              </div>

              {/* Center: line + dot */}
              <div className="flex flex-col items-center shrink-0">
                <div
                  className="w-10 h-10 rounded-full bg-white/10 border border-white/40 flex items-center justify-center"
                >
                  <img src={item.icon} alt="" className="w-6 h-6 object-contain" />
                </div>
                {i < TIMELINE.length - 1 && (
                  <div className="w-px h-14 bg-white/30 my-1" />
                )}
              </div>

              {/* Right: label */}
              <div className="pt-2">
                <div className="font-lora text-white text-[15px] leading-snug">
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
