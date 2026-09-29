import React, { useEffect } from 'react';
import { X, Phone, Flame, Package, Sparkles } from 'lucide-react';
import { MenuItem, RESTAURANT_INFO } from '../data/menuData.ts';

interface ItemModalProps {
  item: MenuItem | null;
  onClose: () => void;
}

export const ItemModal: React.FC<ItemModalProps> = ({ item, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (item) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-[#14120f] border border-[#383125] rounded-3xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 border border-white/20 text-white flex items-center justify-center transition-all cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative h-56 sm:h-64 w-full bg-[#1c1914] overflow-hidden">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#14120f] via-transparent to-black/40" />
          <div className="absolute bottom-4 left-5 flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-[#14120f]/90 border border-[#f3b43f]/60 text-xs font-semibold text-[#f3b43f] backdrop-blur-md">
              {item.badge}
            </span>
            {item.isVeg ? (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/50 text-[11px] font-medium text-emerald-300 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Vegetarian
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-red-950/80 border border-red-500/50 text-[11px] font-medium text-red-300 backdrop-blur-md">
                <Flame className="w-3 h-3" />
                Military Non-Veg
              </span>
            )}
          </div>
        </div>

        <div className="p-6">
          <div className="mb-4">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-1">
              {item.title}
            </h3>
            {item.subtitle && (
              <p className="text-xs text-[#a49a88]">{item.subtitle}</p>
            )}
          </div>

          <p className="text-sm text-[#b8b0a2] leading-relaxed mb-6">
            {item.description}
          </p>

          <div className="space-y-3 mb-6 bg-[#1a1714] border border-[#2d2820] rounded-2xl p-4 text-xs text-[#cfc7b9]">
            <div className="flex items-center gap-2 text-[#d6cfc3]">
              <Sparkles className="w-4 h-4 text-[#f3b43f] flex-shrink-0" />
              <span>Served piping hot in traditional organic areca-leaf donne.</span>
            </div>
            <div className="flex items-center gap-2 text-[#d6cfc3]">
              <Package className="w-4 h-4 text-[#f3b43f] flex-shrink-0" />
              <span>Parcel and takeaway available (₹10 parcel charge applies).</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-2.5">
            <a
              href={`tel:${RESTAURANT_INFO.phoneRaw}`}
              className="w-full sm:flex-1 inline-flex items-center justify-center gap-1.5 py-3 rounded-xl bg-[#f3b43f] hover:bg-[#de9f2e] text-black font-semibold text-xs sm:text-sm transition-all shadow-lg shadow-[#f3b43f]/15"
            >
              <Phone className="w-3.5 h-3.5 fill-current" />
              <span>Call 82968 21532</span>
            </a>
            <a
              href={`tel:${RESTAURANT_INFO.phone2Raw}`}
              className="w-full sm:flex-1 inline-flex items-center justify-center gap-1.5 py-3 rounded-xl bg-[#f3b43f] hover:bg-[#de9f2e] text-black font-semibold text-xs sm:text-sm transition-all shadow-lg shadow-[#f3b43f]/15"
            >
              <Phone className="w-3.5 h-3.5 fill-current" />
              <span>Call 9164181813</span>
            </a>
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-3 rounded-xl border border-[#3d372c] hover:bg-[#201c17] text-xs font-semibold text-[#ded8cc] transition-all cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
