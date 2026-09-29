import React from 'react';
import { Phone, Navigation } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData.ts';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#080706] border-t border-[#1a1713] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-[#1b1814]">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center bg-[#1a1714] border border-[#383228] flex-shrink-0">
              <img
                src="/assets/footer_logo.png"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  if (!target.dataset.triedBackup) {
                    target.dataset.triedBackup = '1';
                    target.src = '/assets/logo.png';
                  } else if (!target.dataset.triedCdn) {
                    target.dataset.triedCdn = '1';
                    target.src =
                      'https://lh3.googleusercontent.com/aida-public/AB6AXuCvp0myUJveIWcN5tffjGHo477vSTuZI_urcllcVnEtLmYMjYSdLCL6g6Lms1GfgvzblLaCctJlRt7oXDlBxQ3xNnkvebURXZpX0V7MVGww5AtSd__EozKuYVyHjlLEz9uIli-E1HY59EzBL5YZznVcCUkOhKrs3iL1GEvoCn78wjj5FRLOvzKO1PF5hCPt9hYcAziPZWvGUN8lKqnzXDaOlizsP8J1n19SuF3cZcD9iuSZUz4gZgImsqCPq6tj-8eKnFM';
                  }
                }}
                alt="Hotel Manipal Donne Biriyani Logo"
                className="w-full h-full object-contain p-1"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <h3 className="text-base sm:text-lg font-serif font-bold text-white tracking-wide">
                {RESTAURANT_INFO.nameKannada}
              </h3>
              <p className="text-[11px] tracking-[0.2em] uppercase text-[#8e8576] font-medium mt-0.5">
                {RESTAURANT_INFO.nameEnglish.toUpperCase()}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-[#cfc7ba]">
            <a
              className="inline-flex items-center gap-2 hover:text-[#f3b43f] transition-colors"
              href={`tel:${RESTAURANT_INFO.phoneRaw}`}
            >
              <Phone className="w-4 h-4 text-[#f3b43f] fill-current" />
              <span>{RESTAURANT_INFO.phone}</span>
            </a>
            <a
              className="inline-flex items-center gap-2 hover:text-[#f3b43f] transition-colors"
              href={`tel:${RESTAURANT_INFO.phone2Raw}`}
            >
              <Phone className="w-4 h-4 text-[#f3b43f] fill-current" />
              <span>+91 {RESTAURANT_INFO.phone2Display}</span>
            </a>
            <a
              className="inline-flex items-center gap-1.5 hover:text-[#f3b43f] transition-colors"
              href={RESTAURANT_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Navigation className="w-4 h-4 text-emerald-400" />
              <span>Directions</span>
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6e6659]">
          <p>Menu prices and timings are subject to change. Please call the hotel to confirm today’s specials.</p>
          <p className="text-[11px]">Eshwar Nagar, Manipal • Open Tuesday to Sunday</p>
        </div>
      </div>
    </footer>
  );
};
