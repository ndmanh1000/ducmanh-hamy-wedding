"use client";

import { useEffect, useRef } from "react";

export default function MusicPlayer({ isPlaying, setIsPlaying }) {
  const audioRef = useRef(null);

  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.play().catch((err) => {
        console.log("Audio autoplay prevented, waiting for interaction:", err);
        setIsPlaying(false);
      });
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, setIsPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <audio ref={audioRef} src="/audio/Lễ Đường.mp3" loop preload="auto" />
      <button
        id="audioToggleBtn"
        onClick={togglePlay}
        className={`fixed bottom-5 right-4 z-40 md:right-[calc(50%-270px)] w-[50px] h-[50px] rounded-full border-none bg-black/60 text-white flex items-center justify-center cursor-pointer shadow-lg transition-all duration-300 hover:bg-black/85 hover:scale-105 active:scale-95 ${
          isPlaying ? "animate-spin-slow" : ""
        }`}
        aria-label={isPlaying ? "Tắt nhạc" : "Bật nhạc"}
      >
        {/* Music icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 16 16"
          className="w-6 h-6 text-white"
        >
          <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13s1.12-2 2.5-2 2.5.896 2.5 2zm9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2z" />
          <path fillRule="evenodd" d="M14 11V2h1v9h-1zM6 3v10H5V3h1z" />
          <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4V2.905z" />
        </svg>

        {/* Diagonal slash for paused state */}
        {!isPlaying && (
          <div className="absolute w-[36px] h-[3px] bg-white rounded rotate-45" />
        )}
      </button>
    </>
  );
}
