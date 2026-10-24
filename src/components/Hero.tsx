import React, { useState } from 'react';
import { Phone, Star, Clock } from 'lucide-react';

const RESTAURANT_INFO = {
  phone: "9164181813",
  phoneRaw: "9164181813",
  phone2Raw: "9164181813",
  rating: "4.8",
  pricingNote: "Affordable & Quality Food"
};

const CHEF_FRAMES = [
  "/donnebiriyaniatmanipal/assets/Frame 1 Left Profile — 0°.png",
  "/donnebiriyaniatmanipal/assets/Frame 2 3:4 Left — 45°.png",
  "/donnebiriyaniatmanipal/assets/Frame 3 Front — 90°.png",
  "/donnebiriyaniatmanipal/assets/Frame 4 3:4 Right — 135°.png",
  "/donnebiriyaniatmanipal/assets/Frame 5 Right Profile — 180° 2.png"
];

interface HeroProps {
  onExploreMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu }) => {
  const [chefRotateY, setChefRotateY] = useState(0);
  const [isPointerDown, setIsPointerDown] = useState(false);
  const [startX, setStartX] = useState(0);

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsPointerDown(true);
    setStartX(e.clientX);
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isPointerDown) return;
    const deltaX = e.clientX - startX;
    setChefRotateY((prev) => {
      let next = prev + deltaX * 0.5;
      if (next < -40) next = -40;
      if (next > 40) next = 40;
      return next;
    });
    setStartX(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsPointerDown(false);
    (e.target as HTMLElement).releasePointerCapture(e.pointerId);
  };

  const handlePointerLeave = () => {
    setIsPointerDown(false);
  };

  const handlePointerCancel = () => {
    setIsPointerDown(false);
  };

  return (
    <section
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerLeave}
      onPointerCancel={handlePointerCancel}
      style={{ touchAction: 'pan-y' }}
      className="relative pt-12 pb-16 md:pt-24 md:pb-28 overflow-hidden border-b border-[#211e1d]"
    >
      {/* Main Responsive Grid Layout Wrapper */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 grid grid-cols-1 md:grid-cols-12 gap-8 items-center w-full">
        
        {/* Left Column: Content */}
        <div className="col-span-1 md:col-span-7 text-left flex flex-col items-start order-1 md:order-1">
          {/* Top Status Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1b1918] border border-[#f3b43f]/10 mb-7">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-sm shadow-emerald-400/50" />
            <span className="text-[10px] font-semibold tracking-wide text-[#f3b43f]">OPEN TUE–SUN</span>
            <span className="text-[#645c58]">•</span>
            <span className="text-[10px] font-medium text-[#cfc7b9]">MANIPAL, KARNATAKA</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-serif font-bold text-[#f3b43f] leading-tight max-w-2xl mb-6">
            Authentic Naati Donne Biriyani{' '}
            <span className="bg-gradient-to-r from-[#f3b43f] via-[#ffd680] to-[#f3b43f] bg-clip-text text-transparent">
              in Manipal.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-[#ded8cb] leading-relaxed max-w-xl drop-shadow-sm mb-8">
            Fragrant jeera samba rice, hand-ground green masala, and generous portions served in traditional areca-leaf donnes.
          </p>

          {/* Social Proof Tags */}
          <div className="flex flex-wrap items-center gap-2.5 mb-8">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#1b1918] border border-[#f3b43f]/10 text-xs text-[#cfc7b9]">
              <Star className="w-3.5 h-3.5 text-[#f3b43f] fill-[#f3b43f]" />
              <span className="font-medium text-[#f3b43f]">{RESTAURANT_INFO.rating}</span> rated on Google
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#1b1918] border border-[#f3b43f]/10 text-xs text-[#cfc7b9]">
              <span className="text-emerald-400">✓</span> Served in natural donnes
            </span>
          </div>

        {/* Call CTA Row */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-8 w-full sm:w-auto">
            <a
              className="inline-flex items-center justify-center gap-2.5 px-5 sm:px-6 py-3.5 rounded-xl bg-[#f3b43f] hover:bg-[#e0a230] text-black font-semibold text-sm transition-all duration-200 shadow-lg shadow-[#f3b43f]/10 hover:shadow-[#f3b43f]/20 hover:-translate-y-0.5 active:translate-y-0 w-full sm:w-auto"
              href="tel:8296821532"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Call 8296821532</span>
            </a>
            <a
              className="inline-flex items-center justify-center gap-2.5 px-5 sm:px-6 py-3.5 rounded-xl bg-[#1b1918] hover:bg-[#262321] border border-[#f3b43f]/20 text-[#f3b43f] font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 w-full sm:w-auto"
              href="tel:9164181813"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Call 9164181813</span>
            </a>
          </div>

        {/* Right Column: Rotating Chef Mascot */}
        <div className="col-span-1 md:col-span-5 flex flex-col items-center justify-center md:items-end md:justify-end order-2 md:order-2 w-full">
          {(() => {
            const currentAngle = chefRotateY;
            let frameIndex = 2;

            if (currentAngle <= -20) frameIndex = 0;
            else if (currentAngle > -20 && currentAngle <= -6) frameIndex = 1;
            else if (currentAngle > -6 && currentAngle < 6) frameIndex = 2;
            else if (currentAngle >= 6 && currentAngle < 20) frameIndex = 3;
            else if (currentAngle >= 20) frameIndex = 4;

            return (
              <img
                src={CHEF_FRAMES[frameIndex]}
                alt="Interactive Chef"
                className="h-[35vh] sm:h-[45vh] md:h-[50vh] lg:h-[60vh] object-contain select-none pointer-events-none transition-all duration-300"
              />
            );
          })()}
          {/* Quality Seal Badge */}
          <div className="mt-4 relative z-20 inline-flex items-center justify-center gap-1.5 px-4 py-1.5 rounded-full bg-[#f3b43f] animate-pulse w-fit mx-auto md:mr-16">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f3b43f] animate-pulse" />
            <span className="text-[10px] font-semibold tracking-wide text-black">
              Naati Dum Special
            </span>
          </div>
        </div>
      </div>
     </div>

      {/* Floating Bottom Info Bar */}
      <div className="relative z-20 mt-12 border-t border-[#38312d] bg-[#211e1d]/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 py-3 text-sm">
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 text-sm">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#1b1918] text-[#cfc7b9]">
              <Clock className="w-4 h-4 text-[#f3b43f]" />
              <span className="text-white font-bold tracking-wide">Lunch 12–4 PM</span>
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#1b1918] text-[#cfc7b9]">
              <Clock className="w-4 h-4 text-[#f3b43f]" />
              <span className="text-white font-bold tracking-wide">Dinner 7–11 PM</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1b1918] text-[#cfc7b9]">
              <span className="w-2 h-2 rounded-full bg-red-400" />
              <span className="text-white font-bold tracking-wide">Monday closed</span>
            </span>
          </div>
          <div className="inline-flex items-center px-3 py-1.5 rounded-lg bg-[#241e15] border border-[#f3b43f]/20 text-[#cfc7b9]">
            {RESTAURANT_INFO.pricingNote}
          </div>
        </div>
      </div>
    </section>
  );
};
