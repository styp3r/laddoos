function ItemBox(props){
    return(
        <div id = "itemBox">
            <div className = "itemImgContainer">
                <img className = "itemImg" src = {props.img} width = "150" height = "150"/>
            </div>
            <p className = "itemName">{props.name}</p>
        </div>
    );
}

export default ItemBox;