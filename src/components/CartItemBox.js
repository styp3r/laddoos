function CartItemBox(props){
    return(
        <div id = "cartItemBox">
            <p>{props.name}</p>
            <p>{props.price}</p>
        </div>
    );
}

export default CartItemBox;