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


// Footer Data
export const footerData = {
  contact: {
    address: "House #12, Road #5, Dhanmondi, Dhaka-1205, Bangladesh",
    phones: ["+880 1711-223344", "+880 9613-800800"],
    email: "support@beemart.bd",
  },
  socialLinks: [
    { platform: "Facebook", icon: "FaFacebookF", url: "https://facebook.com/beemartbd" },
    { platform: "Instagram", icon: "FaInstagram", url: "https://instagram.com/beemartbd" },
    { platform: "LinkedIn",  icon: "FaLinkedinIn", url: "https://linkedin.com/company/beemart" },
    { platform: "Twitter",   icon: "FaTwitter", url: "https://x.com/beemartbd" },
  ],
  accountsLinks: [
    { label: "My Account", path: "/my-account" },
    { label: "Search",     path: "/search" },
    { label: "Wishlist",   path: "/wishlist" },
    { label: "Sign In",    path: "/login" },
    { label: "Checkout",   path: "/checkout" },
  ],
  quickLinks: [
    { label: "Register",   path: "/register" },
    { label: "My Account", path: "/my-account" },
    { label: "Wishlist",   path: "/wishlist" },
    { label: "Checkout",   path: "/checkout" },
  ],
  newsletter: {
    title: "Newsletters",
    description: "Subscribe to our newsletter for exclusive offers, new arrivals & exciting updates straight to your inbox!",
    placeholder: "Enter your email address",
    buttonText: "Subscribe",
  },
};