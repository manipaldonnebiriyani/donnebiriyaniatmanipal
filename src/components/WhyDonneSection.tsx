import React from 'react';
import { ArrowRight, Utensils, Flame, Leaf } from 'lucide-react';

interface WhyDonneSectionProps {
  onBrowseMenu: () => void;
}

export const WhyDonneSection: React.FC<WhyDonneSectionProps> = ({ onBrowseMenu }) => {
  return (
    <section
      className="py-16 md:py-24 bg-[#0a0907] border-t border-[#1e1b16]"
      id="our-donne"
      style={{ scrollMarginTop: '80px' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-[11px] font-bold tracking-[0.25em] text-[#73a378] uppercase block mb-2">
            WHY THE DONNE MATTERS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-4 tracking-tight">
            A little cup. A lot of character.
          </h2>
          <p className="text-sm sm:text-base text-[#a9a193] leading-relaxed mb-6">
            Unlike layered northern biryanis, Karnataka-style naati biriyani is a unified harmony of short-grain rice, fiery green chilli, pounded mint, and native spices. It is served in a natural areca-leaf donne that holds the steam — and the aroma — right till the last bite.
          </p>
          <button
            onClick={onBrowseMenu}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#3b352b] text-xs font-medium text-[#ded8cc] hover:border-[#f3b43f] hover:text-[#f3b43f] transition-all cursor-pointer group"
          >
            <span>Browse the menu</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-[#14120f] border border-[#27231c] rounded-2xl p-6 relative group hover:border-[#423a2d] transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#262016] border border-[#3d3322] flex items-center justify-center text-[#f3b43f] mb-5 shadow-sm">
              <Utensils className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-serif font-bold text-white mb-2">
              Jeera samba rice
            </h3>
            <p className="text-xs text-[#9d9486] leading-relaxed">
              Short, delicate grains that absorb meat juices and green masala deep to the core.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#14120f] border border-[#27231c] rounded-2xl p-6 relative group hover:border-[#423a2d] transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#2b1b17] border border-[#482820] flex items-center justify-center text-[#e0664b] mb-5 shadow-sm">
              <Flame className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-serif font-bold text-white mb-2">
              Fresh green marinade
            </h3>
            <p className="text-xs text-[#9d9486] leading-relaxed">
              Mint, coriander, green chilli, and ginger-garlic ground fresh for every bold batch.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#14120f] border border-[#27231c] rounded-2xl p-6 relative group hover:border-[#423a2d] transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#16251b] border border-[#23432d] flex items-center justify-center text-[#55c76c] mb-5 shadow-sm">
              <Leaf className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-serif font-bold text-white mb-2">
              The areca-leaf donne
            </h3>
            <p className="text-xs text-[#9d9486] leading-relaxed">
              A traditional leaf vessel that traps aromatic steam while you eat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
