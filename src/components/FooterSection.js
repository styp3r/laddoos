import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faAmazon } from '@fortawesome/free-brands-svg-icons';
import ZomatoIcon from '../images/zomatoIcon.png';
import SwiggyIcon from '../images/swiggyIcon.png';

function FooterSection(){
    return(
        <div className = "footerSection">
            <div className = "footerLeft">
                <div className = "footerLeftContent">
                <a href = "http://localhost:3000/"><p className = "footerLogo">Laddoos</p></a>
                    <p className = "regdAddress">Regd. Office: Hemkund, BMP No. 10, 14th D Cross, Behind GR Regency Apartments, Byrasandra, GM Palya, New Thippasandra Post, Bangalore 560075</p>
                </div>
            </div>
            <div className = "footerRight">
                <div className = "footerRightContent">
                    <p className = "socialLinks"><FontAwesomeIcon className = "instagramIcon" icon={faInstagram} /> <FontAwesomeIcon className = "facebookIcon" icon={faFacebook} /> <img width = "40" height = "40" src = {SwiggyIcon}/> <img width = "40" height = "40" src = {ZomatoIcon}/> <FontAwesomeIcon className = "amazonIcon" icon={faAmazon} /></p>
                    <p className = "copyright">Copyright &copy; Xyka Hotels India Private Limited</p>
                </div>
            </div>
        </div>
    );
}

export default FooterSection;