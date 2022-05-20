import Map from './Map';
import LocAddressList from './LocAddressList';
import StoreLocationBox from './StoreLocationBox';

function LocationSection(){

    function getStoreAddress(storeAdd){
        return <StoreLocationBox name = {storeAdd.name} address = {storeAdd.address} shopPhone = {storeAdd.shopPhone} shopImg = {storeAdd.shopImg}/>;
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
                <p className = "locSectionTitle">Our Locations</p>
                <div className = "locBoxesContainer">
                    {LocAddressList.map(getStoreAddress)}
                    <div className = "comingSoonBox"><p className = "comingSoonLocBoxText">We are expanding! &nbsp; More outlets coming soon!</p></div>
                </div>
                <a href = "http://localhost:3000/contact"><button className = "contactUsBtn">Contact Us</button></a>
            </div>
        </div>
    </div>
    );
}

export default LocationSection;