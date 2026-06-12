"use client";

export default function FooterSection() {
  return (
    <>
      {/* Footer photo with quote */}
      <div
        className="relative w-full aspect-[4/3] bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage:
            "url(/placeholders/footer.png)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-10 left-6 right-6 z-10 text-white">
          <div className="font-highspirited text-[38px] leading-tight drop-shadow-lg">
            In you
          </div>
          <div className="font-lora italic text-[18px] leading-loose text-white/90">
            I&apos;ve found my home
            <br />
            my heart
            <br />
            and my forever!
          </div>
        </div>
      </div>

      {/* Branding footer */}
      <div className="bg-[#6d0208] py-4 text-center">
        <p className="font-lora text-white/70 text-[12px] tracking-wide">
          Thiệp cưới online &amp; sự kiện &mdash; Miu Wedding
        </p>
      </div>
    </>
  );
}
