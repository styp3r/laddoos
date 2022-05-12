import ContactPageBG from '../images/contactPageBg.png';
import FooterSection from "./FooterSection";

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
                  <div className = "locationOpt">location</div>
                  <div className = "emailOpt">email</div>
                  <div className = "phoneOpt">phone</div>
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