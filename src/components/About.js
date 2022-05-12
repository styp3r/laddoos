import FooterSection from "./FooterSection";

function About() {
  return(
    <div id = "about">
    <h3 className = "aboutUsPageTitle">About Laddoos</h3>
      <div className = "aboutUsPageHeader">
        <div className = "aboutUsPageImg">
          <img src = "https://www.burgerking.in/static/media/home-of-the-whopper.33b5f485.jpg" width = "500" height = "300"/>
        </div>
        <div className = "aboutUsPageText">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
      </div>

      <div className = "infoGraphics">
        {/*Insert graphic images here */}
        <img className = "info1"/>
        <img className = "info2"/>
        <img className = "info3"/>
      </div>
      <FooterSection />
    </div>
  );
  }

  export default About;