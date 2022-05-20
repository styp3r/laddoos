import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

function StoreLocationBox(props){
    return(
        <div className = "locDisplayBox">
            <div className = "boxText">{props.name}</div>
            <div className = "boxAddress"><FontAwesomeIcon icon={faLocationDot} /> {props.address}</div>
            <div className = "shopPhone"><FontAwesomeIcon icon={faPhone} /> {props.shopPhone}</div>
            <img className = "shopImg" src = {props.shopImg}/>
        </div>
    );
}

export default StoreLocationBox;