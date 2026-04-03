import { Helmet } from "react-helmet-async";

import BannerBottom from "../home/BannerBottom";
import BlogPart from "../home/BlogPart";
import Review from "../home/Review";
import TrustBadges from "../home/TrustBadges";
import Banner from "/src/components/home/Banner";
import NewArrivals from "/src/components/home/NewArrivals";

const Home = () => {
  return (
    <>
      {/* ✅ React Helmet - SEO & Meta Tags */}
      <Helmet>
        <title>Bee eCommerce - Best Online Shopping in Bangladesh</title>
        <meta 
          name="description" 
          content="Shop latest fashion, electronics, gadgets, beauty products and more at Bee eCommerce. Best prices, fast delivery & secure payment." 
        />
        
        <meta name="keywords" content="online shopping, bangladesh, fashion, electronics, gadgets, beauty, bee ecommerce" />
        
        {/* Open Graph / Social Media Tags */}
        <meta property="og:title" content="Bee eCommerce - Best Online Shopping in Bangladesh" />
        <meta 
          property="og:description" 
          content="Shop latest fashion, electronics, gadgets, beauty products and more at Bee eCommerce." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/" />
        <meta property="og:image" content="https://yourwebsite.com/og-image-home.jpg" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Bee eCommerce - Best Online Shopping" />
        <meta name="twitter:description" content="Shop latest products at best price in Bangladesh" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://yourwebsite.com/" />
      </Helmet>

      {/* তোমার কম্পোনেন্টস */}
      <Banner />
      <BannerBottom />
      <NewArrivals />
      <Review />
      <BlogPart />
      <TrustBadges />
    </>
  );
};

export default Home;