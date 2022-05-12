import LaddooVid from '../images/laddooVid.mp4';

function HeroSection(){
    return(
        <div className = "heroSection">
          <div className = "heroArt">
            <video id = "heroVideo" autoPlay muted loop>
              <source src = {LaddooVid} type = "video/mp4"></source>
              Your browser does not support this video type
            </video>
          </div>
          <div className = "heroText">
            <div className = "heroTextContainer">
              <h1 className = "heroTitle">We Bring You True Authentic Indian Sweets and Chaats</h1>
              <p className = "heroSubTitle">Food that leaves you wanting more is the best kind of food, and we love making it! Explore our menu to see what we have in store for you now!</p>
              <a href = "http://localhost:3000/products"><button>See Our Menu</button></a>
            </div>
          </div>
        </div>
    );
}

export default HeroSection;