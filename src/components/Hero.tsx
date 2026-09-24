import React, { useState, useEffect, useRef } from 'react';
import { Phone, ArrowRight, Star, Clock } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData.ts';
const CHEF_FRAMES = [
  "/assets/Frame 1 Left Profile — 0°.png",
  "/assets/Frame 2 3:4 Left — 45°.png",
  "/assets/Frame 3 Front — 90°.png",
  "/assets/Frame 4 3:4 Right — 135°.png",
  "/assets/Frame 5 Right Profile — 180° 2.png"
];
interface HeroProps {
  onExploreMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu }) => {
  const [chefRotateY, setChefRotateY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef<{ clientX: number; initialAngle: number }>({ clientX: 0, initialAngle: 0 });
  const handlePointerDown = (e: React.PointerEvent<HTMLElement>) => {
    setIsDragging(true);
    dragStartRef.current = { clientX: e.clientX, initialAngle: chefRotateY };
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch (_) {}
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    if (rect.width <= 0) return;

    if (isDragging) {
      // Dragging gesture: dragging left turns chef left, dragging right turns chef right
      const deltaX = e.clientX - dragStartRef.current.clientX;
      // 160px drag = 30deg horizontal rotation
      const newAngle = dragStartRef.current.initialAngle + (deltaX / 160) * 30;
      const clampedAngle = Math.max(-35, Math.min(35, newAngle));
      setChefRotateY(clampedAngle);
    } else {
      // Hover / touch position across the Hero section:
      // Left edge (0.0) -> -32deg (rotates left)
      // Center (0.5)    ->   0deg (faces center)
      // Right edge (1.0) -> +32deg (rotates right)
      const x = (e.clientX - rect.left) / rect.width;
      const clampedX = Math.max(0, Math.min(1, x));
      const angle = (clampedX - 0.5) * 64; // -32deg to +32deg
      setChefRotateY(angle);
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLElement>) => {
    setIsDragging(false);
    try {
      if (e.currentTarget.hasPointerCapture(e.pointerId)) {
        e.currentTarget.releasePointerCapture(e.pointerId);
      }
    } catch (_) {}
    setChefRotateY(0);
  };

  const handlePointerLeave = () => {
    if (!isDragging) {
      setChefRotateY(0);
    }
  };

  const handlePointerCancel = () => {
    setIsDragging(false);
    setChefRotateY(0);
  };

  return (
    <section
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerLeave}
      onPointerCancel={handlePointerCancel}
      style={{ touchAction: 'pan-y' }}
      className="relative pt-12 pb-16 md:pt-24 md:pb-28 overflow-hidden border-b border-[#211e19] select-none"
    >   
{/* Dynamic Rotating Chef Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
          {(() => {
            const currentAngle = chefRotateY; 
            let frameIndex = 2; 

            if (currentAngle <= -20) {
              frameIndex = 0; 
            } else if (currentAngle > -20 && currentAngle <= -6) {
              frameIndex = 1; 
            } else if (currentAngle > -6 && currentAngle < 6) {
              frameIndex = 2; 
            } else if (currentAngle >= 6 && currentAngle < 20) {
              frameIndex = 3; 
            } else if (currentAngle >= 20) {
              frameIndex = 4; 
            }
              // using standard inline property forces
              const isMobileOrTablet = typeof window !== 'undefined' && window.innerWidth < 1024;
              const shiftAmount = isMobileOrTablet ? (window.innerWidth < 640 ? '80px' : '160px') : '0px';
              
            return (
              <img 
                src={CHEF_FRAMES[frameIndex]} 
                alt="Interactive Rotating Chef" 
                className="h-[65vh] md:h-[80vh] object-contain select-none pointer-events-none translate-x-[24%] sm:translate-x-[36%] md:translate-x-0 transition-transform duration-200"
              />
            );
          })()}
        </div>         
      {/* Atmospheric Gradients */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#0d0c0a] via-[#0d0c0a]/80 to-transparent sm:w-3/4 md:w-2/3 pointer-events-none" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#0d0c0a] via-transparent to-[#0d0c0a]/50 pointer-events-none" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#0e0d0b]/70 via-transparent to-[#0d0c0a] pointer-events-none" />
      <div className="absolute left-10 top-1/3 w-[450px] h-[350px] bg-[#f3b43f]/10 rounded-full blur-3xl pointer-events-none z-[1]" />
      <div className="absolute right-8 top-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-[#f3b43f]/15 rounded-full blur-[100px] pointer-events-none z-[1]" />

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          {/* Text Block (Status Pill + H1 Heading + Description Paragraph) */}
          <div className="hero-text-block max-w-2xl mb-7">
            {/* Top Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1b1914]/90 backdrop-blur-md border border-[#383227] text-[11px] font-semibold tracking-wider text-[#d4cdbf] mb-5 shadow-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-sm shadow-emerald-400/50" />
              <span>OPEN TUE–SUN</span>
              <span className="text-[#645c50]">•</span>
              <span className="text-[#cfc7b9]">MANIPAL, KARNATAKA</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white leading-[1.12] mb-4 drop-shadow-md">
              Authentic Naati Donne Biriyani{' '}
              <span className="bg-gradient-to-r from-[#f3b43f] via-[#ffd680] to-[#f3b43f] bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(243,180,63,0.3)]">
                in Manipal.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#ded8cb] leading-relaxed max-w-xl drop-shadow-sm font-normal">
              Fragrant jeera samba rice, hand-ground green masala, and generous portions served in traditional areca-leaf donnes.
            </p>
          </div>

          {/* Social Proof Tags */}
          <div className="flex flex-wrap items-center gap-2.5 mb-8">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#171512]/85 backdrop-blur-md border border-[#383126] text-xs text-[#e4ded4] shadow-sm">
              <Star className="w-3.5 h-3.5 text-[#f3b43f] fill-[#f3b43f]" />
              <span className="font-medium">{RESTAURANT_INFO.rating} rated on Google</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#171512]/85 backdrop-blur-md border border-[#383126] text-xs text-[#e4ded4] shadow-sm">
              <span className="text-emerald-400">🍃</span>
              <span className="font-medium">Served in natural donnes</span>
            </span>
          </div>

          {/* Call CTAs Row with Chef Mascot positioned to the right side of the buttons */}
          <div className="flex flex-row items-center gap-6 sm:gap-10 mb-8">
            {/* Left: Call Buttons */}
            <div className="flex flex-wrap items-center gap-3.5">
              <a
                className="inline-flex items-center gap-2.5 px-5 sm:px-6 py-3.5 rounded-xl bg-[#f3b43f] hover:bg-[#e4a42e] text-black font-bold text-sm transition-all shadow-xl shadow-[#f3b43f]/25 active:scale-98"
                href={`tel:${RESTAURANT_INFO.phoneRaw}`}
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Call {RESTAURANT_INFO.phone}</span>
              </a>
              <a
                className="inline-flex items-center gap-2.5 px-5 sm:px-6 py-3.5 rounded-xl bg-[#f3b43f] hover:bg-[#e4a42e] text-black font-bold text-sm transition-all shadow-xl shadow-[#f3b43f]/25 active:scale-98"
                href={`tel:${RESTAURANT_INFO.phone2Raw}`}
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Call 9164181813</span>
              </a>
            </div>
                {/* Quality Seal Badge */}
                <div className="mt-1.5 relative z-20 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#16130f]/95 border border-[#483c27] shadow-lg backdrop-blur-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f3b43f] animate-pulse" />
                  <span className="text-[10px] font-semibold tracking-wide text-[#f3b43f]">
                    Naati Dum Special
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Menu Link & Slider Navigation */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <button
              onClick={onExploreMenu}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#f3b43f] hover:text-[#ffd680] hover:underline underline-offset-4 cursor-pointer group transition-colors"
            >
              <span>View the full menu</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
      {/* Floating Bottom Info Bar */}
      <div className="relative z-20 mt-12 border-t border-[#383126] bg-[#12100d]/95 backdrop-blur-md py-4 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 text-sm">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#1c1914] border border-[#3d362a] shadow-sm">
              <Clock className="w-4 h-4 text-[#f3b43f]" />
              <span className="text-white font-bold tracking-wide">Lunch 12–4 PM</span>
            </span>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#1c1914] border border-[#3d362a] shadow-sm">
              <Clock className="w-4 h-4 text-[#f3b43f]" />
              <span className="text-white font-bold tracking-wide">Dinner 7–11 PM</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#1c1914] border border-[#3d362a] shadow-sm">
              <span className="w-2 h-2 rounded-full bg-red-400" />
              <span className="text-white font-semibold">Monday closed</span>
            </span>
          </div>
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-[#241e15] border border-[#443722] font-bold tracking-wider text-[#f3b43f] uppercase text-xs shadow-sm self-start sm:self-auto">
            {RESTAURANT_INFO.pricingNote}
          </div>
        </div>
      </div>
    </section>
  );
};
