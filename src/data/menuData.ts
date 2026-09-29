export interface MenuItem {
  id: string;
  category: 'biriyani' | 'starters' | 'curries' | 'breads';
  title: string;
  subtitle?: string;
  description: string;
  badge: string;
  isVeg: boolean;
  imageUrl: string;
  searchKeywords: string;
}

export interface MenuCategory {
  id: 'biriyani' | 'starters' | 'curries' | 'breads';
  title: string;
  description: string;
  tag: string;
}

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: 'biriyani',
    title: 'Donne Biriyani Specials',
    description: 'Steaming hot rice, native green masala, and the unmistakable aroma of a fresh donne.',
    tag: 'SIGNATURE DUM IN ARECA LEAF',
  },
  {
    id: 'starters',
    title: 'Naati Starters & Kebabs',
    description: 'Hot, crispy, and tossed in native coastal Karnataka military-hotel spices.',
    tag: 'FRESHLY FRIED & TAWA TOSSED',
  },
  {
    id: 'curries',
    title: 'Military Curries & Gravies',
    description: 'Rich gravies made for spooning over rice or mopping up with a flaky parotta.',
    tag: 'SIMMERED IN HANDI',
  },
  {
    id: 'breads',
    title: 'Breads & Sides',
    description: 'Layered breads and hearty sides to complete your military-hotel plate.',
    tag: 'FRESH OFF THE TAWA',
  },
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'mutton-donne-biryani',
    category: 'biriyani',
    title: 'Mutton Donne Biryani',
    description: 'Tender juicy mutton slow-cooked with jeera samba rice and military spices.',
    badge: 'CHEF SPECIAL · HIGH',
    isVeg: false,
    imageUrl: '/assets/food/mutton_donne_biriyani_1789898545816-BHUuOluv.jpg',
    searchKeywords: 'mutton donne biryani juicy bone-in native spices ghee half full meat tender',
  },
  {
    id: 'chicken-donne-biryani',
    category: 'biriyani',
    title: 'Chicken Donne Biryani',
    description: 'Authentic military-style chicken biriyani made with hand-ground mint and coriander masala.',
    badge: 'BESTSELLER · MEDIUM-HIGH',
    isVeg: false,
    imageUrl: '/assets/food/chicken_donne_biriyani_1789898891630-BEHa-d7v.jpg',
    searchKeywords: 'chicken donne biryani tender jeera samba rice mint coriander half full bestseller',
  },
  {
    id: 'chicken-kebab-biryani',
    category: 'biriyani',
    title: 'Chicken Kebab Biryani',
    description: 'Fragrant donne biriyani rice served with succulent spiced fried chicken kebabs.',
    badge: 'CHEF SPECIAL · HIGH',
    isVeg: false,
    imageUrl: '/assets/food/chicken_kebab_biriyani_1789899190664-D0Sartea.jpg',
    searchKeywords: 'chicken kebab biryani fragrant donne biryani rice succulent spiced fried kebabs full',
  },
  {
    id: 'egg-donne-biryani',
    category: 'biriyani',
    title: 'Egg Donne Biryani',
    description: 'Spiced boiled eggs paired with hot aromatic donne biriyani rice.',
    badge: 'POPULAR · MEDIUM',
    isVeg: false,
    imageUrl: '/assets/food/egg_donne_biriyani_1789899333085-DFBPVymi.jpg',
    searchKeywords: 'egg donne biryani spiced boiled eggs aromatic biryani rice full popular',
  },
  {
    id: 'kuska-rice',
    category: 'biriyani',
    title: 'Kuska Rice',
    subtitle: '(Biryani Rice)',
    description: 'Aromatic donne dum rice infused with herbs and native spices (comfort classic).',
    badge: 'COMFORT CLASSIC · MEDIUM',
    isVeg: true,
    imageUrl: '/assets/food/kuska_donne_rice_1789899463434-DaWYfAZ_.jpg',
    searchKeywords: 'kuska rice biryani rice aromatic donne dum rice veg vegetarian herbs native spices half full',
  },
  {
    id: 'chicken-kebab',
    category: 'starters',
    title: 'Chicken Kebab',
    description: 'Crispy chicken chunks marinated with ginger, garlic, crushed chilli, and curry leaves.',
    badge: 'MUST TRY · HIGH',
    isVeg: false,
    imageUrl: '/assets/food/chicken_kebab_military_1789899672048-D8LhsSs_.jpg',
    searchKeywords: 'chicken kebab crispy chunks ginger garlic crushed chilli curry leaves half full',
  },
  {
    id: 'chicken-pepper-dry',
    category: 'starters',
    title: 'Chicken Pepper Dry',
    description: 'Pan-roasted chicken tossed with freshly cracked black pepper and curry leaves.',
    badge: 'SPICY HIT · VERY HIGH',
    isVeg: false,
    imageUrl: '/assets/food/chicken_pepper_dry_1789899778957-BoV9Mnwe.jpg',
    searchKeywords: 'chicken pepper dry pan-roasted malnad black pepper curry leaves half full spicy',
  },
  {
    id: 'kshatriya-pepper-kebab',
    category: 'starters',
    title: 'Kshatriya / Pepper Kebab',
    description: 'Signature spicy crispy fried kebab tossed with crushed pepper and native herbs.',
    badge: 'SIGNATURE SPECIAL · HIGH',
    isVeg: false,
    imageUrl: '/assets/food/kshatriya_pepper_kebab_1789899686448-Bp9r1twp.jpg',
    searchKeywords: 'kshatriya pepper kebab signature spicy crispy fried kebab native herbs full',
  },
  {
    id: 'mutton-chops',
    category: 'curries',
    title: 'Mutton Chops / Mutton Masala',
    description: 'Rich, slow-simmered tender mutton coated in thick rustic masala paste.',
    badge: 'NAATI FEAST · HIGH',
    isVeg: false,
    imageUrl: '/assets/food/mutton_chops_curry_1789899884591-NzM5VWHi.jpg',
    searchKeywords: 'mutton chops mutton masala rich slow-simmered tender mutton thick rustic masala paste half full gravy',
  },
  {
    id: 'chicken-masala',
    category: 'curries',
    title: 'Chicken Masala',
    description: 'Slow-cooked country chicken curry in rich roasted onion and tomato gravy.',
    badge: 'RICH & HEARTY · HIGH',
    isVeg: false,
    imageUrl: '/assets/food/chicken_masala_curry_1789900053454-CryYoe0i.jpg',
    searchKeywords: 'chicken masala slow-cooked country chicken curry rich roasted onion tomato gravy half full curry',
  },
  {
    id: 'chapathi',
    category: 'breads',
    title: 'Chapathi (2 pieces)',
    description: 'Fresh handmade whole-wheat flatbreads cooked soft without excess oil.',
    badge: 'HOMESTYLE · MILD',
    isVeg: true,
    imageUrl: '/assets/food/chapathi_homestyle_1789900269639-DBLJKsj0.jpg',
    searchKeywords: 'chapathi 2 pieces handmade whole-wheat flatbreads soft veg roti bread',
  },
  {
    id: 'parotta',
    category: 'breads',
    title: 'Parotta (2 pieces)',
    description: 'Golden, layered griddled parotta that tears into buttery-soft flakes.',
    badge: 'FLAKY LAYERED · MILD',
    isVeg: true,
    imageUrl: '/assets/food/flaky_layered_parotta_1789900765761-BnPSH71I.jpg',
    searchKeywords: 'kerala parotta 2 pieces golden layered griddled parotta flaky veg bread',
  },
];

export const HERO_SLIDES = [
  {
    url: '/assets/food/donne_biriyani_leaf_1789753858824-CA9QJmAE.jpg',
    label: 'Naati Donne Biriyani & Kebabs',
  },
  {
    url: '/assets/food/donne_biriyani_circle_1789753879982-JSOANyiD.jpg',
    label: 'Authentic 6-Variety Feast Platter',
  },
  {
    url: '/assets/food/donne_biriyani_table_1789753808731-CJQ--nDh.jpg',
    label: 'Jeera Samba Dum Donne Biriyani',
  },
];

export const RESTAURANT_INFO = {
  nameKannada: 'ಹೋಟೆಲ್ ಮಣಿಪಾಲ್ ದೊನ್ನೆ ಬಿರಿಯಾನಿ',
  nameEnglish: 'Hotel Manipal Donne Biriyani',
  shortName: 'Manipal Donne Biriyani',
  phone: '+91 82968 21532',
  phoneRaw: '+918296821532',
  phone2: '+91 91641 81813',
  phone2Raw: '+919164181813',
  phone2Display: '9164181813',
  address: 'NH169A, next to Pavithra Building, Eshwar Nagar, Manipal, Karnataka 576104',
  landmark: 'Opposite Pavithra Building in ALN Layout',
  googleMapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Hotel+Manipal+Donne+Biriyani+NH169A+Eshwar+Nagar+Manipal+Karnataka',
  rating: '4.5',
  reviewCount: '248 reviews',
  pricingNote: '₹300–₹350 FOR TWO',
  parcelFee: 'Parcel charges ₹10 extra',
};
