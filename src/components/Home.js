import React from 'react';
import Image from '../images/image.gif';
import Sweets from '../images/sweets.jpg';
import Chaats from '../images/chaats.jpg';
import Combo from '../images/combo.jpg';
import Namkeen from '../images/namkeen.jpg';
import Paratha from '../images/paratha.jpg';
import Beverages from '../images/badamMilk.JPG';
import ItemBox from './ItemBox';
import Bg from '../images/bgSubs.png';
import Feature from '../images/featureImg.jpg';
import ReviewBox from './HomepageReviewBox';

function Home(){
    return(
       <div id = "homePage">

        <div id = "heroSection">
            <div className = "heroText">
                <div className = "heroTextContent">
                    <h1 className = "heroSubText1">Authentic Indian Sweets For Every Occasion</h1>
                    <p className = "heroSubText2">Sweets are a symbol of spreading happiness with your loved ones and what better way than to do it with sweets that melt on your taste buds!</p>
                </div>
            </div>
            <div className = "heroVideo">
                <div className = "vidBorder">
                    <img src = {Image}/>
                </div>
            </div>
        </div>

        <div id = "productsSection">
            <div className = "productsTextContainer">
                <div className = "prodText">
                    <div className = "prodSubText1">OUR PRODUCTS</div>
                    <div className = "prodSubText2">The Best Quality Food With Superb Taste</div>
                    <button className = "viewAllBtn">View All</button>
                </div>
            </div>
            <div className = "productDisplayContainer">
                <div className = "prodDisplay">
                    <ItemBox img = "https://www.cubesnjuliennes.com/wp-content/uploads/2020/08/Best-Mutton-Keema-Samosa-Recipe-1.jpg" name = "samosa1"/>
                    <ItemBox img = "https://www.cubesnjuliennes.com/wp-content/uploads/2020/08/Best-Mutton-Keema-Samosa-Recipe-1.jpg" name = "samosa2"/>
                    <ItemBox img = "https://www.cubesnjuliennes.com/wp-content/uploads/2020/08/Best-Mutton-Keema-Samosa-Recipe-1.jpg" name = "samosa3"/>
                    <ItemBox img = "https://www.cubesnjuliennes.com/wp-content/uploads/2020/08/Best-Mutton-Keema-Samosa-Recipe-1.jpg" name = "samosa4"/>
                    <ItemBox img = "https://www.cubesnjuliennes.com/wp-content/uploads/2020/08/Best-Mutton-Keema-Samosa-Recipe-1.jpg" name = "samosa5"/>
                    <ItemBox img = "https://www.cubesnjuliennes.com/wp-content/uploads/2020/08/Best-Mutton-Keema-Samosa-Recipe-1.jpg" name = "samosa6"/>
                </div>
            </div>
        </div>

        <div id = "aboutSection">
            <img className = "bg" src = {Bg} />
            <h3 className = "homeAboutHeading">ABOUT US</h3>
            <p className = "homeAboutText">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>

        <div id = "whyUsSection">
            <div className = "whyUsText">
                <div className = "whyUsTextContent">
                    <div className = "whySubText1">WHY US?</div>
                    <div className = "whySubText2">It's Not Just About The Food, It's About The Experience</div>
                    <img className = "featureImg" src = {Feature}/>
                </div>
            </div>
            <div className = "benefitsList">
                <div className = "benefitsListContainer">
                <ul className = "listOfbenefits">
                    <li className = "benefitHeading1">&#x1F4AF; Best Quality</li>
                    <li className = "benefitText1">We try to make products of the best quality so that you can enjoy true, authentic and tasty Indian food.</li>
                    <li className = "benefitHeading2">&#x1F957; Large Selection Of Products</li>
                    <li className = "benefitText2">We have an inventory of 100+ products and the list keeps growing so there is always something for everyone.</li>
                    <li className = "benefitHeading3">&#x1F44D; Customer Satisfaction</li>
                    <li className = "benefitText3">We serve 1000+ happy customers on a daily basis and we always acknowledge and work on feedbacks so that we can provide you with the best possible experience!</li>
                </ul>
                </div>
            </div>
        </div>

        <div id = "reviewsSection">
        <div className = "reviewsHeading">TESTIMONIALS</div>
            <div className = "reviewsList">
                <ReviewBox />
                <ReviewBox />
                <ReviewBox />
            </div>
        </div>

        <div id = "offerSection"></div>

        <div id = "footerSection">
            <div className = "footerLeft">
                <p className = "footerHeader">Laddoos</p>
                <p className = "address">Regd. Office : Hemkund, BMP no. 10, 14th D Cross, behind GR Regency Apartments, Byrasandra, GM Palya, New Thippasandra post, Bangalore 560075</p>
            </div>
            <div className = "footerRight">
                <p>Copyright &#169; Xyka Hotels India Pvt. Ltd. 2022</p>
                <p>All Rights Reserved</p>
            </div>
        </div>
        </div>
    );
}

export default Home;