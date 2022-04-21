import HeroSection from "./HeroSection";
import BestSellerSection from "./BestSellerSection";
import AboutUsSection from "./AboutUsSection";
import CategoriesSection from "./CategoriesSection";
import LocationSection from "./LocationSection";
import OfferSection from "./OfferSection";
import FooterSection from "./FooterSection";

function Home() {
    return(
      <div id = "home">
        <HeroSection/>
        <BestSellerSection/>
        <AboutUsSection/>
        <CategoriesSection/>
        <LocationSection/>
        <OfferSection/>
        <FooterSection/>
      </div>
    );
  }

  export default Home;