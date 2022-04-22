import Map from './Map';

function LocationSection(){
    return (
    <div className = "locationsSection">
        <div className = "mapView">
            <div className = "mapViewContainer">
                <Map/>
            </div>
        </div>
        <div className = "locationsText">
            <div className = "locationsTextContainer">
                <h1>Our Locations</h1>
                <p>Lorem Ipsum</p>
                <button>Contact Us</button>
            </div>
        </div>
    </div>
    );
}

export default LocationSection;