function CategoriesItembox(props){
    return(
        <div id = "categoriesItemBox">
            <img width= "90%" height = "160" style = {{borderRadius: "1rem", margin: "0.5rem", objectFit: "cover"}} src = {props.img} />
            <p className = "catBoxTitle">{props.name}</p>
        </div>
    );
}

export default CategoriesItembox;