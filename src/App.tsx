/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Phone } from 'lucide-react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { MenuSection } from './components/MenuSection.tsx';
import { WhyDonneSection } from './components/WhyDonneSection.tsx';
import { FindUsSection } from './components/FindUsSection.tsx';
import { Footer } from './components/Footer.tsx';
import { ItemModal } from './components/ItemModal.tsx';
import { MenuItem, RESTAURANT_INFO } from './data/menuData.ts';

export default function App() {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0d0c0a] text-[#ede7de] flex flex-col selection:bg-[#f3b43f] selection:text-black">
      {/* Sticky Header Navigation */}
      <Header onNavigate={scrollToSection} />

      {/* Hero Showcase Section */}
      <Hero onExploreMenu={() => scrollToSection('menu')} />

      {/* Military Kitchen Board / Menu Section */}
      <MenuSection onSelectItem={(item) => setSelectedItem(item)} />

      {/* The Story & Craft of Donne Biriyani */}
      <WhyDonneSection onBrowseMenu={() => scrollToSection('menu')} />

      {/* Location, Directions, and Hours */}
      <FindUsSection />

      {/* Footer */}
      <Footer />

      {/* Item Detail & Order Modal */}
      <ItemModal item={selectedItem} onClose={() => setSelectedItem(null)} />

      {/* Mobile Floating Action Call Button */}
      <div className="fixed bottom-6 right-6 z-40 md:hidden">
        <a
          href={`tel:${RESTAURANT_INFO.phoneRaw}`}
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-[#f3b43f] text-black font-semibold text-xs shadow-2xl hover:bg-[#e4a42e] transition-transform active:scale-95"
          aria-label="Call restaurant"
        >
          <Phone className="w-4 h-4 fill-current" />
          <span>Call Hotel</span>
        </a>
      </div>
    </div>
  );
}
