function CategoriesItembox(props){
    return(
        <div id = "categoriesItemBox">
            <div className = "catBoxContainer">
                <img width= "100%" height = "100%" style = {{borderRadius: "1rem", objectFit: "cover"}} src = {props.img} />
            </div>
            <p className = "catBoxTitle">{props.name}</p>
        </div>
    );
}

export default CategoriesItembox;