// import SubBanner from "../home/SubBanner";
// import SubBanner from "../home/SubBanner";
import BannerBottom from "../home/BannerBottom";
import BlogPart from "../home/BlogPart";
import Review from "../home/Review";
import TrustBadges from "../home/TrustBadges";
import Banner from "/src/components/home/Banner";
import NewArrivals from "/src/components/home/NewArrivals";


const Home = () => {
  return (
    <>
    <Banner/>
    <BannerBottom/>
    <NewArrivals/>
    <Review/>
    <BlogPart/>
    <TrustBadges/>
    </>
  );
};

export default Home;
