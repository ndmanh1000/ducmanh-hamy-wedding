"use client";

const GALLERY = [
  "/placeholders/gallery_rings.png",
  "/placeholders/hero.png",
  "/placeholders/just_married.png",
  "/placeholders/timeline_bg.png",
  "/placeholders/footer.png",
  "/placeholders/groom.png",
  "/placeholders/bride.png",
  "/placeholders/gallery_rings.png",
  "/placeholders/hero.png",
  "/placeholders/just_married.png",
];

export default function MemoriesGallery() {
  return (
    <div className="bg-paper py-10 px-4">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="font-dancing text-[#6d0208] text-[46px] leading-none">
          Our Memories
        </div>
        <div className="w-16 h-px bg-[#6d0208]/40 mx-auto mt-3" />
      </div>

      {/* Top 3-image collage */}
      <div className="flex items-end gap-2 mb-2 h-[220px]">
        <div className="flex-1 h-[180px]">
          <img
            src={GALLERY[0]}
            alt="wedding memory"
            className="w-full h-full object-cover rounded"
          />
        </div>
        <div className="flex-1 h-[220px]">
          <img
            src={GALLERY[2]}
            alt="wedding memory"
            className="w-full h-full object-cover rounded"
          />
        </div>
        <div className="flex-1 h-[180px]">
          <img
            src={GALLERY[4]}
            alt="wedding memory"
            className="w-full h-full object-cover rounded"
          />
        </div>
      </div>

      {/* 2-column grid of remaining photos */}
      <div className="grid grid-cols-2 gap-2 mt-2">
        {GALLERY.slice(3).map((src, i) => (
          <div key={i} className="aspect-square overflow-hidden rounded">
            <img
              src={src}
              alt="wedding memory"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
