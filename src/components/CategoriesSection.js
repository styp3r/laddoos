import CategoriesItembox from "./CategoriesItemBox";
import ItemList from "./ItemList";

function CategoriesSection(){

    function getCategories(cat){
        return <CategoriesItembox key = {cat.id} img = {cat.img} name = {cat.name}/>
    }

    return(
        <div className = "categoriesSection">
            <div className = "categoriesContainer">
                {ItemList.map(getCategories)}
            </div>
        </div>
    );
}

export default CategoriesSection;