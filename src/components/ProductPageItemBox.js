
function ProductPageItemBox(props){

    return(
        <div id = "productPageItemBox">
        <img width = "100%" height= "150" style = {{borderRadius: "1rem 1rem 0 0", objectFit: "cover"}} src = {props.img} />
            <p className = "ppName">{props.name}</p>
            <p className = "ppQP"><span className = "ppQ">{props.qty}</span> Rs.{props.price}</p>
        </div>
    );
}

export default ProductPageItemBox;