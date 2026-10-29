export interface Amenity {
  title: string;
  description: string;
  icon: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image?: string;
}

export interface Plot {
  size: string;
  dimensions?: string;
  price: number;
  category: string;
}

export interface PaymentTier {
  size: string;
  dimensions?: string;
  totalPrice: number;
  downPayment: number;
  monthlyInstallment: number | null;
  paymentMode: string;
}

export interface NewsItem {
  title: string;
  date: string;
  excerpt: string;
}

export const basePath = '';

export const societyData = {
  name: "Zahoor Orchards",
  tagline: "Where Nature Meets Luxury Living",
  description:
    "Zahoor Orchards is a premier housing society located in the heart of nature, offering a perfect blend of modern amenities and serene living. Spread across lush green landscapes, our community is designed for families seeking peace, security, and a vibrant neighborhood.",

  aboutDetails: `Situated in a prime location with excellent connectivity, Zahoor Orchards offers meticulously planned residential plots, parks, and community spaces. Our vision is to create a self-sustained community where every resident enjoys a high quality of life with access to top-tier facilities.

With wide roads, modern sewerage, and 24/7 security, we ensure a safe and comfortable environment for your family. The society is developed with modern infrastructure standards and eco-friendly practices.`,

  phone: "0333 8073719",
  email: "info@zahoororchards.com",
  address: "Main Office, Zahoor Orchards, Madhrianwala Bypass, Hafizabad",
  mapUrl: "https://maps.app.goo.gl/fHTe6VDyBv4uGgUBA",
  facebook: "https://www.facebook.com/zahoororchards/",
  instagram: "https://www.instagram.com/zahoororchards/",
  tiktok: "https://www.tiktok.com/@zahoororchards",

  amenities: [
    { title: "Parks & Landscaped Greenery", description: "Beautifully planned parks, family recreation areas and landscaped green spaces.", icon: "park" },
    { title: "Open Spaces", description: "Dedicated open areas that bring breathing room, greenery and a more spacious community environment.", icon: "open-space" },
    { title: "100-Foot Main Boulevard", description: "A grand 100-foot-wide main road, supported by internal roads at least 30 feet wide.", icon: "road" },
    { title: "Underground Sewerage", description: "An underground sewerage network designed for a cleaner, more organized community.", icon: "sewerage" },
    { title: "Sports Complex", description: "A dedicated sports and recreation destination for an active community lifestyle.", icon: "sports" },
    { title: "24/7 Hospital", description: "Hospital facilities available around the clock for residents and their families.", icon: "hospital" },
    { title: "24/7 Security", description: "Security personnel on duty around the clock.", icon: "security" },
    { title: "Jamia Masjid", description: "A spacious community mosque within the society.", icon: "mosque" },
  ] as Amenity[],

  paymentPlans: [
    { size: "3 Marla", totalPrice: 2400000, downPayment: 800000, monthlyInstallment: 65000, paymentMode: "24 monthly installments" },
    { size: "5 Marla", dimensions: "25 × 45 ft", totalPrice: 4000000, downPayment: 1350000, monthlyInstallment: 110000, paymentMode: "24 monthly installments" },
    { size: "10 Marla", dimensions: "35 × 65 ft", totalPrice: 8000000, downPayment: 2650000, monthlyInstallment: 220000, paymentMode: "24 monthly installments" },
    { size: "1 Kanal", dimensions: "50 × 90 ft", totalPrice: 16000000, downPayment: 16000000, monthlyInstallment: null, paymentMode: "Full payment only" },
  ] as PaymentTier[],

  premiumNote:
    "Prices are based on PKR 8 Lac per Marla. Installment plans are available only in AA and BB Blocks. A and B Blocks are cash-only. A 10% additional charge applies to park-facing, corner, and main boulevard plots. Installments begin in December 2026. The down payments and monthly installments are rounded figures. The final installment will be adjusted to reconcile the total plot price. Confirm plot-specific availability with the sales office.",

  management: [
    { name: "Dr Muzaffar Ali Sheikh", role: "Founder" },
    { name: "Zafar Chishti", role: "CEO" },
    { name: "Mian Amjad Bashir", role: "Director & Managing Partner" },
    { name: "Muhammad Nawaz Baloch", role: "Director" },
    { name: "Sheikh Tahir Hafeez", role: "Director" },
    { name: "Zubair Chishti", role: "Director" },
    { name: "Ashar Ali Sheikh", role: "Director" },
    { name: "Abdullah Ali Hussain", role: "Director" },
    { name: "Muhammad Ahad Mughal", role: "Director" },
    { name: "Mian Abid", role: "Director" },
  ] as TeamMember[],

  plots: [
    { size: "3 Marla", price: 2400000, category: "Residential" },
    { size: "5 Marla", dimensions: "25 × 45 ft", price: 4000000, category: "Residential" },
    { size: "10 Marla", dimensions: "35 × 65 ft", price: 8000000, category: "Residential" },
    { size: "1 Kanal", dimensions: "50 × 90 ft", price: 16000000, category: "Residential" },
  ] as Plot[],

  news: [
    { title: "Inauguration Ceremony of Main Gate", date: "March 15, 2026", excerpt: "The grand inauguration of the main entrance gate was held with distinguished guests." },
    { title: "New Park Development Completed", date: "February 10, 2026", excerpt: "The central park with walking tracks and children's play area is now open." },
    { title: "Road Paving Underway", date: "January 5, 2026", excerpt: "Internal road network paving is in progress. Block A and B completed." },
  ] as NewsItem[],

  galleryImages: [
    "/images/ad_0.jpg",
    "/images/ad_1.jpg",
    "/images/ad_2.jpg",
    "/images/ad_3.jpg",
    "/images/ad_4.jpg",
    "/images/ad_5.jpg",
  ],
};

export const sectionLabels = [
  "Home", "About", "Why Zahoor Orchards", "Amenities", "Gallery", "Plots", "Payment Plan",
  "Management", "News", "Contact",
];
