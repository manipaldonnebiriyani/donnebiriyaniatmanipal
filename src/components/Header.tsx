import React, { useState } from 'react';
import { Phone, Navigation, Menu as MenuIcon, X } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData.ts';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    onNavigate(sectionId);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0e0d0b]/95 backdrop-blur-md border-b border-[#25211b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Zone */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3.5 group cursor-pointer"
        >
          <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center bg-[#1a1714] border border-[#383228] flex-shrink-0 shadow-sm">
            <img
              src="/assets/logo.png"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  'https://lh3.googleusercontent.com/aida-public/AB6AXuCuUF0-S-thvnT4q5Pm2Pudv0xR06jS9M6y3ixdAZny-jETeD1q7KN61jqNPhXSyf30GGCHD-eH5nHSuGkQAIyBm8kFBcQVNe1TOVgJpkOqs7x6igS4_rgARVt2Xsx3mjNZaY5WXR3doWVUzhoUu-hudEakqiwb4i-R7vmO89O6_vvst2ruKJbmSuNq2lFO5QSejIE5FA3N7LgRyNW4CK06Rger3vtxryBb5xxOcIIovR-H_xqLH5QfJ4nhRP8-0ENo-z0';
              }}
              alt="Hotel Manipal Donne Biriyani Logo"
              className="w-full h-full object-contain p-0.5"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-wide text-white leading-tight font-serif">
              {RESTAURANT_INFO.nameKannada}
            </span>
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#a69e90] font-medium">
              {RESTAURANT_INFO.shortName}
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold tracking-wider text-[#d0c9bc]">
          <button
            onClick={() => handleNavClick('menu')}
            className="hover:text-[#f3b43f] transition-colors cursor-pointer py-1"
          >
            MENU
          </button>
          <button
            onClick={() => handleNavClick('our-donne')}
            className="hover:text-[#f3b43f] transition-colors cursor-pointer py-1"
          >
            OUR DONNE
          </button>
          <button
            onClick={() => handleNavClick('find-us')}
            className="hover:text-[#f3b43f] transition-colors cursor-pointer py-1"
          >
            FIND US
          </button>
        </nav>

        {/* Action Buttons with Both Caller Numbers */}
        <div className="hidden sm:flex items-center gap-2">
          <a
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#3b352b] text-xs font-medium text-[#e4ded4] hover:bg-[#201d18] hover:border-[#52493c] transition-all"
            href={`tel:${RESTAURANT_INFO.phoneRaw}`}
            title={`Call ${RESTAURANT_INFO.phone}`}
          >
            <Phone className="w-3.5 h-3.5 text-[#f3b43f] fill-current" />
            <span>82968 21532</span>
          </a>
          <a
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#3b352b] text-xs font-medium text-[#e4ded4] hover:bg-[#201d18] hover:border-[#52493c] transition-all"
            href={`tel:${RESTAURANT_INFO.phone2Raw}`}
            title={`Call ${RESTAURANT_INFO.phone2}`}
          >
            <Phone className="w-3.5 h-3.5 text-[#f3b43f] fill-current" />
            <span>9164181813</span>
          </a>
          <button
            onClick={() => handleNavClick('find-us')}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#366839] hover:bg-[#3f7a43] text-white text-xs font-medium transition-all shadow-sm cursor-pointer ml-1"
          >
            <Navigation className="w-3.5 h-3.5" />
            <span>Directions</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex sm:hidden items-center gap-2">
          <a
            className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-[#3b352b] text-[#f3b43f] bg-[#1a1714]"
            href={`tel:${RESTAURANT_INFO.phoneRaw}`}
            title={`Call ${RESTAURANT_INFO.phone}`}
          >
            <Phone className="w-3.5 h-3.5 fill-current" />
          </a>
          <a
            className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-[#3b352b] text-[#f3b43f] bg-[#1a1714]"
            href={`tel:${RESTAURANT_INFO.phone2Raw}`}
            title={`Call ${RESTAURANT_INFO.phone2}`}
          >
            <Phone className="w-3.5 h-3.5 fill-current" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-[#d0c9bc] p-1.5 rounded-lg border border-[#383228] bg-[#1a1714] cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#25211b] bg-[#12100d] px-4 pt-3 pb-5 space-y-3">
          <div className="flex flex-col space-y-2 text-sm font-medium text-[#ded8cc]">
            <button
              onClick={() => handleNavClick('menu')}
              className="text-left py-2 px-3 rounded-lg hover:bg-[#1f1b16] hover:text-[#f3b43f] transition-colors cursor-pointer"
            >
              Menu
            </button>
            <button
              onClick={() => handleNavClick('our-donne')}
              className="text-left py-2 px-3 rounded-lg hover:bg-[#1f1b16] hover:text-[#f3b43f] transition-colors cursor-pointer"
            >
              Why Donne Biriyani
            </button>
            <button
              onClick={() => handleNavClick('find-us')}
              className="text-left py-2 px-3 rounded-lg hover:bg-[#1f1b16] hover:text-[#f3b43f] transition-colors cursor-pointer"
            >
              Find Us / Timings
            </button>
          </div>
          <div className="pt-2 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <a
                href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-[#3b352b] text-xs font-semibold text-[#f3b43f] bg-[#1a1714]"
              >
                <Phone className="w-3.5 h-3.5 fill-current" />
                <span>82968 21532</span>
              </a>
              <a
                href={`tel:${RESTAURANT_INFO.phone2Raw}`}
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-[#3b352b] text-xs font-semibold text-[#f3b43f] bg-[#1a1714]"
              >
                <Phone className="w-3.5 h-3.5 fill-current" />
                <span>9164181813</span>
              </a>
            </div>
            <button
              onClick={() => handleNavClick('find-us')}
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#366839] text-xs font-semibold text-white cursor-pointer"
            >
              <Navigation className="w-4 h-4" />
              Directions
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
