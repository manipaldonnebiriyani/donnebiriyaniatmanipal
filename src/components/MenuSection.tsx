import React, { useState, useMemo } from 'react';
import { Search, Package, Sparkles } from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS, MenuItem } from '../data/menuData.ts';

interface MenuSectionProps {
  onSelectItem: (item: MenuItem) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onSelectItem }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      if (activeCategory !== 'all' && item.category !== activeCategory) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchTitle = item.title.toLowerCase().includes(q);
        const matchDesc = item.description.toLowerCase().includes(q);
        const matchKeywords = item.searchKeywords.toLowerCase().includes(q);
        const matchBadge = item.badge.toLowerCase().includes(q);
        return matchTitle || matchDesc || matchKeywords || matchBadge;
      }
      return true;
    });
  }, [activeCategory, searchQuery]);

  const displayedCategories = useMemo(() => {
    if (activeCategory === 'all') {
      return MENU_CATEGORIES;
    }
    return MENU_CATEGORIES.filter((cat) => cat.id === activeCategory);
  }, [activeCategory]);

  return (
    <main className="py-16 md:py-24 bg-[#0d0c0a]" id="menu" style={{ scrollMarginTop: '80px' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="text-[11px] font-bold tracking-[0.25em] text-[#d69f34] uppercase block mb-2">
            THE KITCHEN BOARD
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-3 tracking-tight">
            Natti military menu
          </h2>
          <p className="text-sm sm:text-base text-[#a9a193] max-w-2xl leading-relaxed mb-4">
            Clear, honest pricing. Slow-cooked aromas, generous portions, and the kind of food that makes you reach for one more spoonful.
          </p>
          <div className="flex flex-wrap items-center gap-3 text-xs text-[#e1dbcf] font-medium">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1c1914] border border-[#302b22] text-[#d6cfc3] text-[11px]">
              <Package className="w-3.5 h-3.5 text-[#f3b43f]" />
              <span>Parcel charges ₹10 extra</span>
            </div>
          </div>
        </div>

        <div className="bg-[#14120f] border border-[#26221c] rounded-2xl p-3 sm:p-4 mb-12 shadow-sm">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 lg:pb-0 custom-scroll">
              <button
                onClick={() => setActiveCategory('all')}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === 'all'
                    ? 'bg-[#f3b43f] text-black shadow-sm'
                    : 'text-[#b5ada0] hover:text-white hover:bg-[#201d18]'
                }`}
              >
                All items
              </button>
              <button
                onClick={() => setActiveCategory('biriyani')}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  activeCategory === 'biriyani'
                    ? 'bg-[#f3b43f] text-black font-semibold shadow-sm'
                    : 'text-[#b5ada0] hover:text-white hover:bg-[#201d18]'
                }`}
              >
                Donne Biriyani Specials
              </button>
              <button
                onClick={() => setActiveCategory('starters')}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  activeCategory === 'starters'
                    ? 'bg-[#f3b43f] text-black font-semibold shadow-sm'
                    : 'text-[#b5ada0] hover:text-white hover:bg-[#201d18]'
                }`}
              >
                Naati Starters & Kebabs
              </button>
              <button
                onClick={() => setActiveCategory('curries')}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  activeCategory === 'curries'
                    ? 'bg-[#f3b43f] text-black font-semibold shadow-sm'
                    : 'text-[#b5ada0] hover:text-white hover:bg-[#201d18]'
                }`}
              >
                Military Curries & Gravies
              </button>
              <button
                onClick={() => setActiveCategory('breads')}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  activeCategory === 'breads'
                    ? 'bg-[#f3b43f] text-black font-semibold shadow-sm'
                    : 'text-[#b5ada0] hover:text-white hover:bg-[#201d18]'
                }`}
              >
                Breads & Sides
              </button>
            </div>

            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#7c7365]" />
              <input
                className="w-full pl-9 pr-4 py-2 text-xs bg-[#1a1713] border border-[#302b23] rounded-full text-[#e8e2d8] placeholder-[#6b6255] focus:outline-none focus:border-[#f3b43f] transition-colors"
                placeholder="Search the menu..."
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="space-y-14">
          {displayedCategories.map((category) => {
            const items = filteredItems.filter((i) => i.category === category.id);
            if (items.length === 0) return null;

            return (
              <section key={category.id} className="menu-category-section">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between border-l-2 border-[#d69f34] pl-3.5 mb-6 gap-1">
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-white">{category.title}</h3>
                    <p className="text-xs sm:text-sm text-[#9e9687]">{category.description}</p>
                  </div>
                  <span className="text-[10px] tracking-[0.2em] font-mono uppercase text-[#73a378] font-semibold">
                    {category.tag}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {items.map((item) => (
                    <article
                      key={item.id}
                      onClick={() => onSelectItem(item)}
                      className="menu-card rounded-2xl p-5 flex flex-col justify-between cursor-pointer group hover:shadow-xl hover:border-[#4a4135] transition-all"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <h4 className="text-base font-semibold text-white flex items-center gap-2 group-hover:text-[#f3b43f] transition-colors">
                              {item.title}
                              {item.subtitle && (
                                <span className="text-xs text-[#9e9687] font-normal">
                                  {item.subtitle}
                                </span>
                              )}
                              {item.isVeg && (
                                <span
                                  className="w-2 h-2 rounded-full bg-emerald-500 inline-block"
                                  title="Vegetarian"
                                />
                              )}
                            </h4>
                          </div>
                          <div
                            className={`flex-shrink-0 overflow-hidden bg-[#1a1714] shadow-sm border border-[#2c2720] ${
                              item.id === 'mutton-donne-biryani' ? 'w-10 h-10 rounded-lg' : 'w-9 h-9 rounded-full'
                            }`}
                          >
                            <img
                              src={item.imageUrl}
                              alt={item.title}
                              className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-300"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                        </div>

                        <p className="text-xs text-[#a9a193] leading-relaxed mb-4">
                          {item.description}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-[#23201a] flex items-center justify-between text-[11px]">
                        <span className="tracking-wide text-[#bdae95] uppercase font-semibold">
                          {item.badge}
                        </span>
                        <span className="text-[#f3b43f] text-[10px] font-medium opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                          <Sparkles className="w-3 h-3" />
                          View Details
                        </span>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            );
          })}

          {filteredItems.length === 0 && (
            <div className="text-center py-16 px-4 bg-[#14120f] border border-[#25211b] rounded-2xl">
              <p className="text-base font-serif text-white mb-2">No menu items match your filter</p>
              <p className="text-xs text-[#8e8577] mb-4">
                Try clearing your search query or reset the category filters.
              </p>
              <button
                onClick={() => {
                  setActiveCategory('all');
                  setSearchQuery('');
                }}
                className="px-4 py-2 rounded-full bg-[#f3b43f] text-black text-xs font-semibold cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};
