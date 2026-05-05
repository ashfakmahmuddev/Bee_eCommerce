// Header Nav Link
export const mainNavLinks = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Shop",
    path: "/shop",
  },
  {
    label: "Blog",
    path: "/blog",
  },
  {
    label: "About us",
    path: "/about",
  },
  {
    label: "Contact",
    path: "/contact",
  },
];

// পরে চাইলে conditional nav যোগ করতে পারো
export const getNavLinks = (isLoggedIn = false) => {
  let links = [...mainNavLinks];

  if (isLoggedIn) {
    links.push({
      label: "Dashboard",
      path: "/dashboard",
    });
    links.push({
      label: "Profile",
      path: "/profile",
    });
  }

  return links;
};

// Banner Data
import bannerImgOne from "../assets/bannerImgOne.png";
// import bannerImgTwo from "../assets/bannerImgTwo.png";
// import bannerImgThree from "../assets/bannerImgThree.png";

export const bannerSlides = [
  {
    img: bannerImgOne,
    title: "Furniture Gallery",
    subtitle: "welcome to our",
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
  },
  {
    img: bannerImgOne,
    title: "Modern Collection 2025",
    subtitle: "Discover the latest",
    desc: "New arrivals with premium quality wood and stylish designs for your dream home.",
  },
  {
    img: bannerImgOne,
    title: "Summer Sale is Live!",
    subtitle: "Up to 50% off",
    desc: "Limited time offer on selected furniture items. Grab yours before it's gone!",
  },
];

// Products Data
import productOne from "../assets/p1.png";
import productTwo from "../assets/p2.png";
import productThree from "../assets/p3.png";
import productFour from "../assets/p4.png";

export const products = [
  {
    id: 1,
    image: productOne,
    title: "Modern Chair",
    price: 4500, // discounted / final selling price
    originalPrice: 6000, // original price (discount দেখাবে)
  },
  {
    id: 2,
    image: productTwo,
    title: "Elegant Watch",
    price: 5000,
    originalPrice: 5000, // কোনো discount নেই
  },
  {
    id: 3,
    image: productThree,
    title: "Luxury Leather Sofa",
    price: 8500,
    originalPrice: 10000,
  },
  {
    id: 4,
    image: productFour,
    title: "Modern Chair (Grey)",
    price: 3800,
    originalPrice: 4500,
  },
  {
    id: 5,
    image: productTwo,
    title: "Elegant Watch (Black)",
    price: 4800,
    originalPrice: 5200,
  },
  {
    id: 6,
    image: productOne,
    title: "Modern Chair (White)",
    price: 4500,
    originalPrice: 4500, // no discount
  },
  {
    id: 7,
    image: productFour,
    title: "Modern Chair (Blue)",
    price: 4200,
    originalPrice: 4800,
  },
  {
    id: 8,
    image: productThree,
    title: "Leather Sofa (Brown)",
    price: 9200,
    originalPrice: 12000,
  },
  {
    id: 9,
    image: productOne,
    title: "Modern Chair",
    price: 4500, // discounted / final selling price
    originalPrice: 6000, // original price (discount দেখাবে)
  },
  {
    id: 10,
    image: productTwo,
    title: "Elegant Watch",
    price: 5000,
    originalPrice: 5000, // কোনো discount নেই
  },
  {
    id: 11,
    image: productThree,
    title: "Luxury Leather Sofa",
    price: 8500,
    originalPrice: 10000,
  },
  {
    id: 12,
    image: productFour,
    title: "Modern Chair (Grey)",
    price: 3800,
    originalPrice: 4500,
  },
  {
    id: 13,
    image: productTwo,
    title: "Elegant Watch (Black)",
    price: 4800,
    originalPrice: 5200,
  },
  {
    id: 14,
    image: productOne,
    title: "Modern Chair (White)",
    price: 4500,
    originalPrice: 4500, // no discount
  },
  {
    id: 15,
    image: productFour,
    title: "Modern Chair (Blue)",
    price: 4200,
    originalPrice: 4800,
  },
  {
    id: 16,
    image: productThree,
    title: "Leather Sofa (Brown)",
    price: 9200,
    originalPrice: 12000,
  },
];

// Footer Data
export const footerData = {
  contact: {
    address: "House #12, Road #5, Dhanmondi, Dhaka-1205, Bangladesh",
    phones: ["+880 1711-223344", "+880 9613-800800"],
    email: "support@beemart.bd",
  },
  socialLinks: [
    {
      platform: "Facebook",
      icon: "FaFacebookF",
      url: "https://facebook.com/beemartbd",
    },
    {
      platform: "Instagram",
      icon: "FaInstagram",
      url: "https://instagram.com/beemartbd",
    },
    {
      platform: "LinkedIn",
      icon: "FaLinkedinIn",
      url: "https://linkedin.com/company/beemart",
    },
    { platform: "Twitter", icon: "FaTwitter", url: "https://x.com/beemartbd" },
  ],
  accountsLinks: [
    { label: "My Account", path: "/my-account" },
    { label: "Search", path: "/search" },
    { label: "Wishlist", path: "/wishlist" },
    { label: "Sign In", path: "/login" },
    { label: "Checkout", path: "/checkout" },
  ],
  quickLinks: [
    { label: "Register", path: "/register" },
    { label: "My Account", path: "/my-account" },
    { label: "Wishlist", path: "/wishlist" },
    { label: "Checkout", path: "/checkout" },
  ],
  newsletter: {
    title: "Newsletters",
    description:
      "Subscribe to our newsletter for exclusive offers, new arrivals & exciting updates straight to your inbox!",
    placeholder: "Enter your email address",
    buttonText: "Subscribe",
  },
};

// Reviews Data
import reviewOne from "/src/assets/reviewOne.png";
import reviewTwo from "/src/assets/reviewTwo.png";

export const reviews = [
  {
    image: reviewTwo,
    text: "Really amazing service! The product quality is excellent and the delivery was super fast. I would recommend it to everyone.",
    name: "Humayra Tabassum",
  },
  {
    image: reviewOne,
    text: "Great value for money with top-notch product quality. Customer support was very helpful too. Will definitely buy again!",
    name: "Taj Ibne Masud",
  },
  {
    image: reviewTwo,
    text: "The team understood my needs perfectly. Delivery was on time, and the packaging was flawless. Best experience ever!",
    name: "Sadia Afrin",
  },
  {
    image: reviewOne,
    text: "Affordable prices with premium quality. The support team responds very quickly. I'll definitely shop again.",
    name: "Fahim Chowdhury",
  },
];

import blogPartOne from "/src/assets/blogPartOne.png"
import blogPartTwo from "/src/assets/blogPartTwo.png"
import blogPartThree from "/src/assets/blogPartThree.png"

// BlogData Data
export const blogPartData = [
  {
    id: 1,
    date: "17 Aug 2025",
    title: "How to setup your reading room?",
    image: blogPartOne,
    slug: "how-to-setup-reading-room",
    link: "/blog/how-to-setup-reading-room",
  },
  {
    id: 2,
    date: "12 Jul 2025",
    title: "Set your furniture on your room",
    image: blogPartTwo,
    slug: "minimalist-living-room-ideas",
    link: "/blog/minimalist-living-room-ideas",
  },
  {
    id: 3,
    date: "05 Jun 2025",
    title: "Blue and white combination",
    image: blogPartThree,
    slug: "best-indoor-plants-low-light",
    link: "/blog/best-indoor-plants-low-light",
  },
];
import TrustBadgesOne from "/src/assets/TrustBadgesOne.png"
import TrustBadgesTwo from "/src/assets/TrustBadgesTwo.png"
import TrustBadgesThree from "/src/assets/TrustBadgesThree.png"
import TrustBadgesFour from "/src/assets/TrustBadgesFour.png"

// TrustBadges Data
export const trustBadges = [
  {
    id: 1,
    title: "FREE SHIPPING",
    description: "Free shipping on all UK orders",
    icon: TrustBadgesOne,
  },
  {
    id: 2,
    title: "FREE EXCHANGE",
    description: "30 days return on all items",
    icon: TrustBadgesTwo,
  },
  {
    id: 3,
    title: "PREMIUM SUPPORT",
    description: "We support online 24 hours a day",
    icon: TrustBadgesThree,
  },
  {
    id: 4,
    title: "BLACK FRIDAY",
    description: "Shocking discount on every Friday",
    icon: TrustBadgesFour,
  },
];
