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
  dimensions: string;
  price: string;
  category: string;
}

export interface PaymentTier {
  size: string;
  dimensions: string;
  totalPrice: string;
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
  address: "Main Office, Zahoor Orchards,\\nMadhrianwala Bypass, 52110",
  mapUrl: "https://maps.app.goo.gl/fHTe6VDyBv4uGgUBA",
  facebook: "https://www.facebook.com/zahoororchards/",
  instagram: "https://www.instagram.com/zahoororchards/",
  tiktok: "https://www.tiktok.com/@zahoororchards",

  amenities: [
    { title: "Parks & Green Spaces", description: "Beautifully landscaped parks, children's play areas and open gym.", icon: "park" },
    { title: "24/7 Security", description: "Trained security personnel round the clock.", icon: "security" },
    { title: "Wide Roads", description: "30-60 ft wide carpeted roads with street lights.", icon: "road" },
    { title: "Underground Sewerage", description: "Modern underground sewerage system for the entire society.", icon: "plumbing" },
    { title: "Jamia Masjid", description: "A spacious mosque within walking distance.", icon: "mosque" },
    { title: "Hospital", description: "A hospital offering a wide variety of health facilities.", icon: "hospital" },
  ] as Amenity[],

  paymentPlans: [
    { size: "5 Marla", dimensions: "25 × 45 ft", totalPrice: "PKR 40 Lac" },
    { size: "10 Marla", dimensions: "35 × 65 ft", totalPrice: "PKR 80 Lac" },
    { size: "1 Kanal", dimensions: "50 × 90 ft", totalPrice: "PKR 160 Lac" },
  ] as PaymentTier[],

  premiumNote:
    "These are general residential base prices. Please contact the sales office to confirm plot-specific pricing and availability.",

  management: [
    { name: "Dr Muzaffar Ali Sheikh", role: "Founder" },
    { name: "Zafar Chishti", role: "CEO" },
    { name: "Mian Amjab Bashir", role: "Director" },
    { name: "Muhammad Nawaz Baloch", role: "Director" },
    { name: "Sheikh Tahir Hafeez", role: "Director" },
    { name: "Zubair Chishti", role: "Director" },
    { name: "Ashar Ali Sheikh", role: "Director" },
    { name: "Abdullah Ali Hussain", role: "Director" },
    { name: "Muhammad Ahad Mughal", role: "Director" },
    { name: "Mian Abid", role: "Director" },
  ] as TeamMember[],

  plots: [
    { size: "5 Marla", dimensions: "25 × 45 ft", price: "PKR 40 Lac", category: "Residential" },
    { size: "10 Marla", dimensions: "35 × 65 ft", price: "PKR 80 Lac", category: "Residential" },
    { size: "1 Kanal", dimensions: "50 × 90 ft", price: "PKR 160 Lac", category: "Residential" },
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
  "Home", "About", "Amenities", "Gallery", "Plots", "Payment Plan",
  "Management", "News", "Contact",
];
