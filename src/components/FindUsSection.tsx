import React from 'react';
import { MapPin, Clock, Phone, ExternalLink, Navigation } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData.ts';

export const FindUsSection: React.FC = () => {
  return (
    <section
      className="py-16 md:py-24 bg-[#0d0c0a] border-t border-[#1e1b16]"
      id="find-us"
      style={{ scrollMarginTop: '80px' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <span className="text-[11px] font-bold tracking-[0.25em] text-[#d69f34] uppercase block mb-2">
            PLAN YOUR VISIT
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-3 tracking-tight">
            Find us in Eshwar Nagar.
          </h2>
          <p className="text-sm sm:text-base text-[#a9a193] leading-relaxed">
            Right on NH169A, next to Pavithra Building. Call ahead for parcel takeaway, bulk orders, or table availability.
          </p>
        </div>

        <div className="space-y-4 mb-8">
          <div className="bg-[#14120f] border border-[#27231c] rounded-2xl p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-[#3d362a] transition-all">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#231e16] border border-[#3b3323] flex items-center justify-center text-[#f3b43f] flex-shrink-0 mt-0.5 shadow-sm">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white mb-1">Exact address</h3>
                <p className="text-xs text-[#cfc8bc] mb-1">{RESTAURANT_INFO.address}</p>
                <p className="text-[11px] text-[#82796c]">{RESTAURANT_INFO.landmark}</p>
              </div>
            </div>
            <a
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#f3b43f] hover:underline self-start md:self-center whitespace-nowrap"
              href={RESTAURANT_INFO.googleMapsUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>Open in Google Maps</span>
              <span className="text-sm">→</span>
            </a>
          </div>

          <div className="bg-[#14120f] border border-[#27231c] rounded-2xl p-5 sm:p-6 hover:border-[#3d362a] transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#17231a] border border-[#263e2c] flex items-center justify-center text-emerald-400 shadow-sm">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-semibold text-white">Opening hours</h3>
              </div>
              <span className="text-[11px] px-2.5 py-1 rounded-full bg-[#1e2a20] text-emerald-300 font-semibold border border-[#2c4832]">
                Tue–Sun
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-2 border-t border-[#23201a]">
              <div>
                <span className="text-[#b2aa9d] block mb-1 font-medium">Monday</span>
                <p className="text-white font-medium">Closed</p>
                <p className="text-[#8e8577] text-[11px]">Weekly Rest Day</p>
              </div>
              <div>
                <span className="text-[#b2aa9d] block mb-1 font-medium">Tuesday–Sunday</span>
                <p className="text-white font-semibold">12:00 PM–4:00 PM (Lunch)</p>
                <p className="text-white font-semibold">7:00 PM–11:00 PM (Dinner)</p>
              </div>
            </div>
          </div>

          <div className="bg-[#14120f] border border-[#27231c] rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-[#3d362a] transition-all">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#261d18] border border-[#402d24] flex items-center justify-center text-[#e57d59] shadow-sm">
                <Phone className="w-5 h-5 fill-current" />
              </div>
              <div>
                <h3 className="text-xs text-[#8c8476]">Call the hotel</h3>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-0.5">
                  <a
                    className="text-sm sm:text-base font-semibold text-white tracking-wide hover:text-[#f3b43f] transition-colors"
                    href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                  >
                    {RESTAURANT_INFO.phone}
                  </a>
                  <span className="text-[#595144]">•</span>
                  <a
                    className="text-sm sm:text-base font-semibold text-white tracking-wide hover:text-[#f3b43f] transition-colors"
                    href={`tel:${RESTAURANT_INFO.phone2Raw}`}
                  >
                    +91 {RESTAURANT_INFO.phone2Display}
                  </a>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 self-start sm:self-auto">
              <a
                className="px-3.5 py-1.5 rounded-full border border-[#3d372c] hover:border-[#f3b43f] text-xs font-semibold text-white transition-all bg-[#1a1814] active:scale-95"
                href={`tel:${RESTAURANT_INFO.phoneRaw}`}
              >
                Call 1
              </a>
              <a
                className="px-3.5 py-1.5 rounded-full border border-[#3d372c] hover:border-[#f3b43f] text-xs font-semibold text-[#f3b43f] transition-all bg-[#1a1814] active:scale-95"
                href={`tel:${RESTAURANT_INFO.phone2Raw}`}
              >
                Call 2
              </a>
            </div>
          </div>
        </div>

        <div
          className="relative bg-[#171512] border border-[#2b261f] rounded-3xl overflow-hidden shadow-2xl h-[420px] sm:h-[460px] flex flex-col justify-between p-4 sm:p-5 select-none group"
          data-purpose="map-representation"
        >
          <svg
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            height="100%"
            width="100%"
            viewBox="0 0 1000 500"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern id="gmap-grid-react" patternUnits="userSpaceOnUse" width="40" height="40">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#221e18" strokeWidth="0.6" />
              </pattern>
            </defs>
            <rect fill="#181512" height="100%" width="100%" />
            <rect fill="url(#gmap-grid-react)" height="100%" width="100%" />
            <path
              d="M 120 40 C 220 70 320 140 430 180 C 560 220 700 210 880 190"
              fill="none"
              stroke="#252b24"
              strokeWidth="40"
              strokeLinecap="round"
              opacity="0.5"
            />
            <circle cx="240" cy="120" r="65" fill="#1c261e" opacity="0.6" />
            <circle cx="840" cy="360" r="80" fill="#1c261e" opacity="0.5" />
            <path
              d="M -20 310 Q 180 320 380 290 T 780 230 T 1020 180"
              fill="none"
              stroke="#2e2a22"
              strokeWidth="22"
            />
            <path
              d="M -20 310 Q 180 320 380 290 T 780 230 T 1020 180"
              fill="none"
              stroke="#d99f38"
              strokeWidth="12"
              strokeLinecap="round"
            />
            <path
              d="M -20 310 Q 180 320 380 290 T 780 230 T 1020 180"
              fill="none"
              stroke="#fef08a"
              strokeWidth="2.5"
              strokeDasharray="14 10"
            />
            <path d="M 510 -10 L 490 280 L 470 510" fill="none" stroke="#383329" strokeWidth="12" />
            <path d="M 510 -10 L 490 280 L 470 510" fill="none" stroke="#4a4234" strokeWidth="7" />
            <path d="M 180 -10 L 220 315 L 230 510" fill="none" stroke="#332e26" strokeWidth="8" />
            <path d="M 820 -10 L 760 235 L 720 510" fill="none" stroke="#332e26" strokeWidth="8" />
            <path d="M 220 315 C 320 350 400 390 470 420" fill="none" stroke="#2e2922" strokeWidth="6" />
            <path d="M 490 280 Q 640 290 760 235" fill="none" stroke="#2e2922" strokeWidth="6" />
            <path d="M 490 190 Q 620 130 780 120" fill="none" stroke="#29251e" strokeWidth="5" />
            <path d="M 320 40 L 490 130" fill="none" stroke="#29251e" strokeWidth="5" />
            <text x="110" y="295" fill="#f3b43f" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="bold" letterSpacing="1.5">
              NH 169A / UDUPI-AGUMBE RD
            </text>
            <text x="810" y="215" fill="#bdae95" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="600">
              NH 169A
            </text>
            <text x="496" y="80" fill="#8c8476" fontFamily="Inter, sans-serif" fontSize="9" transform="rotate(87, 496, 80)">
              SARALEBETTU RD
            </text>
            <g opacity="0.85">
              <circle cx="240" cy="110" r="3" fill="#73a378" />
              <text x="250" y="114" fill="#9d9486" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="500">
                Manipal Institute of Technology (MIT)
              </text>
            </g>
            <g opacity="0.85">
              <circle cx="350" cy="190" r="3" fill="#d69f34" />
              <text x="360" y="194" fill="#cfc7b9" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="500">
                Fortune Valley View Manipal
              </text>
            </g>
            <g opacity="0.85">
              <circle cx="630" cy="150" r="3" fill="#e0664b" />
              <text x="640" y="154" fill="#a9a193" fontFamily="Inter, sans-serif" fontSize="9.5">
                Hadiqa Arabic Bistro
              </text>
            </g>
            <g opacity="0.85">
              <circle cx="750" cy="90" r="3" fill="#73a378" />
              <text x="760" y="94" fill="#8c8476" fontFamily="Inter, sans-serif" fontSize="9.5">
                Dr. TMA Pai Polytechnic
              </text>
            </g>
            <g opacity="0.85">
              <circle cx="310" cy="370" r="3" fill="#d69f34" />
              <text x="320" y="374" fill="#8e8576" fontFamily="Inter, sans-serif" fontSize="9.5">
                Hakuna Matata
              </text>
            </g>
            <g opacity="0.85">
              <circle cx="600" cy="330" r="3" fill="#bdae95" />
              <text x="610" y="334" fill="#8c8476" fontFamily="Inter, sans-serif" fontSize="9">
                ND Sankalpa Apartments
              </text>
            </g>
            <g opacity="0.85">
              <circle cx="710" cy="380" r="3" fill="#e0664b" />
              <text x="720" y="384" fill="#8c8476" fontFamily="Inter, sans-serif" fontSize="9.5">
                The Mill Manipal
              </text>
            </g>
            <g opacity="0.9">
              <circle cx="420" cy="270" r="3" fill="#f3b43f" />
              <text x="330" y="262" fill="#d4cdbf" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="600">
                Pavithra Building / ALN Layout
              </text>
            </g>
          </svg>

          <div className="relative z-10 bg-[#161411]/95 backdrop-blur-md border border-[#332c23] rounded-2xl p-3.5 sm:p-4 max-w-sm shadow-2xl">
            <div className="flex items-start justify-between gap-3 mb-1.5">
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">
                  {RESTAURANT_INFO.nameEnglish}
                </h4>
                <span className="text-[11px] text-[#bdae95] block font-medium mt-0.5">
                  {RESTAURANT_INFO.nameKannada}
                </span>
              </div>
              <div className="flex items-center gap-1.5 flex-shrink-0">
                <a
                  className="p-1.5 rounded-full bg-[#231e16] hover:bg-[#302b22] text-[#f3b43f] transition-all"
                  href={RESTAURANT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Open in Google Maps"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  className="w-7 h-7 rounded-full bg-blue-600 hover:bg-blue-500 flex items-center justify-center text-white text-xs shadow-md transition-all"
                  href={RESTAURANT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Directions"
                >
                  <Navigation className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
            <p className="text-[11px] text-[#a49d90] mb-2 leading-normal">
              {RESTAURANT_INFO.address}
            </p>
            <div className="flex items-center justify-between pt-2 border-t border-[#26221c]">
              <div className="flex items-center gap-1.5 text-xs text-[#f3b43f]">
                <span className="font-bold text-white">{RESTAURANT_INFO.rating}</span>
                <span className="text-amber-400">★★★★★</span>
                <span className="text-[#8e8576] text-[10px]">({RESTAURANT_INFO.reviewCount})</span>
              </div>
              <a
                className="text-[11px] font-semibold text-[#f3b43f] hover:underline"
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Directions →
              </a>
            </div>
          </div>

          <div className="absolute left-[49%] top-[56%] -translate-x-1/2 -translate-y-full z-10 flex flex-col items-center pointer-events-none">
            <div className="relative flex items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center shadow-2xl border-2 border-white animate-bounce">
                <MapPin className="w-5 h-5 fill-current" />
              </div>
              <div className="absolute -bottom-1 w-2.5 h-2.5 bg-red-600 rotate-45 border-r-2 border-b-2 border-white" />
            </div>
            <div className="mt-1.5 px-3 py-1 rounded-full bg-[#14120f]/95 text-[11px] font-bold text-white backdrop-blur-md border border-[#f3b43f]/60 shadow-xl whitespace-nowrap flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Hotel Manipal Donne Biriyani
            </div>
          </div>

          <div className="relative z-10 flex items-end justify-between text-[9px] text-[#807769]">
            <div className="bg-black/70 backdrop-blur px-2.5 py-1 rounded font-semibold text-[10px] text-zinc-300 border border-white/10">
              Google
            </div>
            <div className="bg-black/70 backdrop-blur px-2.5 py-1 rounded text-[9px] text-zinc-400 border border-white/10">
              Keyboard shortcuts • Map data ©2026 Terms • Eshwar Nagar, Manipal
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
