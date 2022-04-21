function BestSellerItemBox(props){
    return(
        <div id = "bestSellerItemBox">
        <img width = "100%" height= "120" style = {{borderRadius: "1rem 1rem 0 0", objectFit: "cover"}} src = {props.img} />
            <p className = "bsName">{props.name}</p>
            {/*<p className = "bsQP"><span className = "bsQ">{props.qty}</span> Rs.{props.price}</p>*/}
        </div>
    );
}

export default BestSellerItemBox;