import CategoriesItembox from "./CategoriesItemBox";
import CategoryList from "./CategoryList";

function CategoriesSection() {

    function getCategories(cat) {
        return <CategoriesItembox key={cat.id} img={cat.img} name={cat.name} />
    }

    return (
        <div className="categoriesSection">
            <div className="categoriesContainer">
            <p className = "catSectionTitle">Our Categories</p>
                {CategoryList.map(getCategories)}
            </div>
        </div>
    );
}

export default CategoriesSection;