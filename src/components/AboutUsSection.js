import AboutUsBg from '../images/aboutUsBg.png';

function AboutUsSection(){
    return(
        <div className = "aboutSection">
            <img style = {{opacity: 0.3}} width = "80%" height = "85%" src = {AboutUsBg}></img>
            <div className = "aboutSectionTextContainer">
                <h2 className = "aboutUsHeading">About Us</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                <button>Read More</button>
            </div>
        </div>
    );
}

export default AboutUsSection;