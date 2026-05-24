export type NavItem = {
  label: string;
  href: string;
};

export type Product = {
  title: string;
  description: string;
  image: string;
  category: string;
};

export const company = {
  name: "Soft Touch Global",
  tagline: "Premium Home Textile & Towel Supplier",
  description:
    "Soft Touch Global is a home textile sourcing company specializing in terry towels, bath towels, cotton towels, and premium home textile products for domestic and international markets. We are committed to delivering quality-driven sourcing solutions, smooth coordination, professional communication, and long-term business partnerships that help buyers grow with confidence",
  email: "info@softtouchglobal.com",
  phone: "+91 8383018814",
  whatsapp: "+91 8383018814",
  address:
    "27-A om vihar ph-1A uttam nagar New Delhi-110059",
};


// ✅ CLEAN NAVBAR (NO BLOG / NO VISION)
export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Contact Us", href: "/contact" },
];


// ✅ PRODUCT CATEGORIES WITH REAL IMAGES
export const productCategories: Product[] = [
  {
    title: "Bath Towels",
    description:
      "Soft, absorbent, and premium bath towels designed for hospitality, retail, and wholesale requirements.",
    image: "/images/products/bath.jpg",
    category: "Towels",
  },
  {
    title: "Hand Towels",
    description:
      "Compact and durable hand towels suitable for daily use, commercial spaces, and export supply.",
    image: "/images/products/hand.jpg",
    category: "Towels",
  },
  {
    title: "Terry Towels",
    description:
      "High-quality terry towels offering superior absorbency, comfort, and long-lasting performance.",
    image: "/images/products/terry.jpg",
    category: "Cotton Textile",
  },
  {
    title: "Cotton Towels",
    description:
      "Premium cotton towels crafted for softness, durability, and refined buyer presentation.",
    image: "/images/products/cotton.jpg",
    category: "Cotton Textile",
  },
  {
    title: "Textile Products",
    description:
      "A broader textile range supporting bulk sourcing, export requirements, and custom buyer needs.",
    image: "/images/products/textile.jpg",
    category: "Textile Range",
  },
];


// ✅ SIMPLE TRUST POINTS (NO OVER REPEAT)
export const trustPoints = [
  {
    title: "15+ Years Experience",
    description:
      "Extensive experience in towel and textile manufacturing and sourcing.",
  },
  {
    title: "Export & Domestic Supply",
    description:
      "Serving both Indian and international buyers with consistent product quality.",
  },
  {
    title: "Quality Assurance",
    description:
      "Focused on durability, absorbency, and finishing standards.",
  },
  {
    title: "Reliable Service",
    description:
      "Clear communication and dependable delivery for long-term partnerships.",
  },
];


// ✅ WHY CHOOSE US (SHORT & STRONG)
export const whyChooseUs = [
  "15+ years textile industry experience",
  "Specialization in terry & bath towels",
  "Export-ready supply and bulk order support",
  "Consistent quality and reliable service",
];

export const footerLinks = [
  { label: "Business Inquiry", href: "/contact" },
];