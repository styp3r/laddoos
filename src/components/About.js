import FooterSection from "./FooterSection";
import LaddoosAbout from '../images/shopPics/vtrShop.jpg';
import FreshFood from '../images/freshFood.png';
import LargeProducts from '../images/largeProducts.png';
import HealthInfo from '../images/healthInfo.png';
import OfferSection from './OfferSection';


function About() {
  return(
    <div id = "about">
    <p className = "aboutUsPageTitle">About Laddoos</p>
      <div className = "aboutUsPageHeader">
        <div className = "aboutUsPageImg">
          <img style = {{objectFit: "fill", borderRadius: "1rem"}} src = {LaddoosAbout} width = "500" height = "300"/>
        </div>
        <div className = "aboutUsPageText">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
      </div>

      <div className = "infoGraphics">
        <img src = {FreshFood} className = "info1"/>
        <img src = {LargeProducts} className = "info2"/>
        <img src = {HealthInfo} className = "info3"/>
      </div>

      <OfferSection />
      <FooterSection />
    </div>
  );
  }

  export default About;