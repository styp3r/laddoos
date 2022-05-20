import React, {useState} from 'react';

import ProductPageItemBox from './ProductPageItemBox';
import ItemList from './ItemList';
import FooterSection from "./FooterSection";

function Products() {

  const [currentItem, setCurrentItem] = useState("");
  
  function displayItems(data) {
    if(currentItem === ""){
      return <ProductPageItemBox key = {data.id} name={data.name} qty = {data.qty} img = {data.img} price={data.price} />;
    }
    if (currentItem === "cat1") {
      while (data.category === "sweets") {
        return <ProductPageItemBox key = {data.id} name={data.name} qty = {data.qty} img = {data.img} price={data.price} />;
      }
    }
    if (currentItem === "cat2") {
      while (data.category === "chaats") {
        return <ProductPageItemBox key = {data.id} name={data.name} qty = {data.qty} img = {data.img} price={data.price} />;
      }
    }
    if (currentItem === "cat3") {
      while (data.category === "snacks") {
        return <ProductPageItemBox key = {data.id} name={data.name} qty = {data.qty} img = {data.img} price={data.price} />;
      }
    }
    if (currentItem === "cat4") {
      while (data.category === "parathasAndCombos") {
        return <ProductPageItemBox key = {data.id} name={data.name} qty = {data.qty} img = {data.img} price={data.price} />;
      }
    }
    if (currentItem === "cat5") {
      while (data.category === "namkeen") {
        return <ProductPageItemBox key = {data.id} name={data.name} qty = {data.qty} img = {data.img} price={data.price} />;
      }
    }
    if (currentItem === "cat6") {
      while (data.category === "beverages") {
        return <ProductPageItemBox key = {data.id} name={data.name} qty = {data.qty} img = {data.img} price={data.price} />;
      }
    }
  }
  

  function handleClick(clickedItem) {
    setCurrentItem(clickedItem.target.id);
    console.log("clicked " + clickedItem.target.id);

    let clickedCategoryId = clickedItem.target.id;

    document.getElementById("cat1").style.backgroundColor = "#ffffff";
    document.getElementById("cat1").style.color = "#000000";
    document.getElementById("cat2").style.backgroundColor = "#ffffff";
    document.getElementById("cat2").style.color = "#000000";
    document.getElementById("cat3").style.backgroundColor = "#ffffff";
    document.getElementById("cat3").style.color = "#000000";
    document.getElementById("cat4").style.backgroundColor = "#ffffff";
    document.getElementById("cat4").style.color = "#000000";
    document.getElementById("cat5").style.backgroundColor = "#ffffff";
    document.getElementById("cat5").style.color = "#000000";
    document.getElementById("cat6").style.backgroundColor = "#ffffff";
    document.getElementById("cat6").style.color = "#000000";

    document.getElementById(clickedCategoryId).style.backgroundColor = "red";
    document.getElementById(clickedCategoryId).style.color = "#ffffff";
  }

  return(
    <div>
    <div id = "products">
      <div className = "categoryPane">
        <div onClick={handleClick} id = "cat1" name = "Sweets">Sweets</div>
        <div onClick={handleClick} id = "cat2" name = "Chaats">Chaats</div>
        <div onClick={handleClick} id = "cat3" name = "Snacks">Snacks</div>
        <div onClick={handleClick} id = "cat4" name = "Parathas & Combos">Parathas & Combos</div>
        <div onClick={handleClick} id = "cat5" name = "Namkeen">Namkeen</div>
        <div onClick={handleClick} id = "cat6" name = "Beverages">Beverages</div>
      </div>
      <div className = "listProductsView">
        <p className = "productPageTitle">Products</p>
        {ItemList.map(displayItems)}
      </div>
    </div>
    <FooterSection />
    </div>
  );
  }

  export default Products;