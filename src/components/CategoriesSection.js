import CategoriesItembox from "./CategoriesItemBox";
import CategoriesList from "./CategoriesList";

function CategoriesSection(){

    function getCategories(cat){
        return <CategoriesItembox key = {cat.id} img = {cat.img} name = {cat.name}/>
    }

    return(
        <div className = "categoriesSection">
            <div className = "categoriesContainer">
                {CategoriesList.map(getCategories)}
            </div>
        </div>
    );
}

export default CategoriesSection;