"use client";

export default function JustMarriedSection() {
  return (
    <div
      className="relative w-full aspect-[4/3] bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage:
          "url(/placeholders/just_married.png)",
      }}
    >
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
        <div className="font-highspirited text-[58px] leading-none drop-shadow-lg">
          Just Married
        </div>
      </div>
    </div>
  );
}
