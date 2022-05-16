import ItemList from './ItemList';
import BestSellerItemBox from './BestSellerItemBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';

function BestSellerSection(){

    function getBestSellerItems(getBestItem){
        if(getBestItem.bestseller === true){
            return <BestSellerItemBox key = {getBestItem.id} name = {getBestItem.name} qty = {getBestItem.qty} price = {getBestItem.price} img = {getBestItem.img}/>
        }
    }
     
    return(
    <div className = "bestSellerSection">
        <div className = "bestSellerSectionText">
        <div className = "bsTextContainer">
            <p className = "bestSellerTitle">Our Best Sellers</p>
            <p className = "bestSellerSubTitle">Our customers loved these from our menu and I'm sure you will too!</p>
        </div>
        </div>
        <div className = "bestSellerContainer">
            {ItemList.map(getBestSellerItems)}
        </div>
        <a href = "http://localhost:3000/products"><FontAwesomeIcon className = "viewAllArrow" icon={faCircleChevronRight} /></a>
    </div>);
}

export default BestSellerSection;