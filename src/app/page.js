"use client";

import { useState } from "react";
import EnvelopeCover from "@/components/EnvelopeCover";
import MusicPlayer from "@/components/MusicPlayer";
import SaveTheDateHero from "@/components/SaveTheDateHero";
import QuoteSection from "@/components/QuoteSection";
import CoupleCards from "@/components/CoupleCards";
import ParentsInvitation from "@/components/ParentsInvitation";
import CeremonyDetails from "@/components/CeremonyDetails";
import JustMarriedSection from "@/components/JustMarriedSection";
import CalendarCountdown from "@/components/CalendarCountdown";
import TimelineSection from "@/components/TimelineSection";
import MemoriesGallery from "@/components/MemoriesGallery";
import GuestbookSection from "@/components/GuestbookSection";
import GiftSection from "@/components/GiftSection";
import FooterSection from "@/components/FooterSection";

export default function WeddingPage() {
  const [isOpened, setIsOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleOpen = () => {
    setIsOpened(true);
    setIsPlaying(true);
  };

  return (
    <main className="relative min-h-screen bg-neutral-900 flex justify-center">
      {/* Card container — max 575px, centred */}
      <div className="w-full max-w-[575px] min-h-screen bg-white shadow-2xl overflow-hidden relative">

        {/* ── Envelope Cover (sits on top until opened) ── */}
        {!isOpened && <EnvelopeCover onOpen={handleOpen} />}

        {/* ── Main content (always rendered so images preload) ── */}
        <div className={`transition-opacity duration-1000 ${isOpened ? "opacity-100" : "opacity-0"}`}>

          {/* 1. Hero */}
          <SaveTheDateHero isOpened={isOpened} />

          {/* 2. Quote */}
          <QuoteSection />

          {/* 3. Couple Cards */}
          <CoupleCards />

          {/* 4. Parents & Invitation */}
          <ParentsInvitation />

          {/* 5. Ceremony Details */}
          <CeremonyDetails />

          {/* 6. Just Married */}
          <JustMarriedSection />

          {/* 7. Calendar & Countdown */}
          <CalendarCountdown />

          {/* 8. Timeline */}
          <TimelineSection />

          {/* 9. Gallery */}
          <MemoriesGallery />

          {/* 10. Guestbook */}
          <GuestbookSection />

          {/* 11. Gift */}
          <GiftSection />

          {/* 12. Footer */}
          <FooterSection />
        </div>
      </div>

      {/* ── Floating music player (always visible after open) ── */}
      {isOpened && (
        <MusicPlayer isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
      )}
    </main>
  );
}
