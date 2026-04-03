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
      {/* ==================== SEO Meta Tags ==================== */}
      <Helmet>
        <title>Bee eCommerce | Best Online Shopping in Bangladesh</title>
        <meta
          name="description"
          content="Shop latest electronics, fashion, gadgets, home essentials & more at Bee eCommerce. Best prices, fast delivery & secure payment in Bangladesh."
        />
        
        {/* Open Graph (Facebook, WhatsApp, Instagram) */}
        <meta property="og:title" content="Bee eCommerce | Best Online Shopping in Bangladesh" />
        <meta property="og:description" content="Shop latest electronics, fashion, gadgets & more at unbeatable prices." />
        <meta property="og:image" content="https://yourwebsite.com/og-image-home.jpg" /> {/* তোমার অ্যাকচুয়াল ছবির লিংক দিবে */}
        <meta property="og:url" content="https://yourwebsite.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Bee eCommerce | Best Online Shopping in Bangladesh" />
        <meta name="twitter:description" content="Shop latest electronics, fashion, gadgets & more at unbeatable prices." />
        <meta name="twitter:image" content="https://yourwebsite.com/og-image-home.jpg" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://yourwebsite.com/" />
      </Helmet>

      {/* ==================== Page Content ==================== */}
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