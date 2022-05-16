import Map from './Map';
import LocationList from './LocationList';

function LocationSection(){

    function getStoreLocations(storeLoc){
        return (null);
    }

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
                <a href = "http://localhost:3000/contact"><button>Contact Us</button></a>
                {/*LocationList.map(getStoreLocations)*/}
            </div>
        </div>
    </div>
    );
}

export default LocationSection;