import ItemList from './ItemList';
import BestSellerItemBox from './BestSellerItemBox';

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
        <button className = "viewAllArrow">&#8250;</button>
    </div>);
}

export default BestSellerSection;