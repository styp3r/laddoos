import ContactPageBG from '../images/contactPageBg.png';
import FooterSection from "./FooterSection";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

function Contact(){
    return(
        <div id = "contact">
          <img id = "contactPageBg" src = {ContactPageBG}/>
          
          <div id = "contactFormContainer">
            <div id = "contactForm">
              <div className = "inputContactBoxes">
              <div className = "contactFormText">
                <h1>GET IN TOUCH</h1>
                <p>We are always happy to make valuable new contacts</p>
              </div>
              <div className = "contactOptions">
                  <div className = "locationOpt"><FontAwesomeIcon icon={faLocationDot} />
                  <p>Hello</p>
                  </div>
                  <div className = "emailOpt"><FontAwesomeIcon icon={faEnvelope} />
                  <p>laddoos@ymail.com</p>
                  </div>
                  <div className = "phoneOpt"><FontAwesomeIcon icon={faPhone} />
                  <p>+91 72590 31520</p>
                  </div>
                </div>
              <div className = "inputContainers">
                <div className = "nameEmailInputContainer">
                  <input id = "nameInput" type = "text" placeholder='Name'/>
                  <input id = "emailInput" type = "email" placeholder='Email'/>
                </div>
                <div className = "messageInputContainer">
                  <textarea id = "messageInput" type = "text" placeholder='Message'/>
                </div>
                </div>
                <button id = "submitMessageBtn">Submit</button>
              </div>
            </div>
          </div>
          <FooterSection/>
        </div>
      );
}

export default Contact;