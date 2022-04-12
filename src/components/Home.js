import React from 'react';
import Image from '../images/image.gif';
import Sweets from '../images/sweets.jpg';
import Chaats from '../images/chaats.jpg';
import Combo from '../images/combo.jpg';
import Namkeen from '../images/namkeen.jpg';
import Paratha from '../images/paratha.jpg';
import Beverages from '../images/badamMilk.JPG';
import ItemBox from './ItemBox';
import Bg from '../images/bgSubs.png';

function Home(){
    return(
       <div id = "homePage">

        <div id = "heroSection">
            <div className = "heroText">
                <div className = "heroTextContent">
                    <h1 className = "heroSubText1">Authentic Indian Sweets For Every Occasion</h1>
                    <p className = "heroSubText2">Sweets are a symbol of spreading happiness with your loved ones and what better way than to do it with sweets that melt on your taste buds!</p>
                    <p className = "scrollDownText">Scroll Down</p>
                </div>
            </div>
            <div className = "heroVideo">
                <div className = "vidBorder">
                    <img src = {Image}/>
                </div>
            </div>
        </div>

        <div id = "productsSection">
            <div className = "productsText">
                <div className = "prodTextContent">
                    <div className = "prodSubText1">PRODUCTS</div>
                    <div className = "prodSubText2">The Best Quality Food With Superb Taste</div>
                </div>
            </div>
            <div className = "productDisplay">
                <div className = "prodListContainer">
                    <ItemBox img = {Sweets} name = "Sweets"/>
                    <ItemBox img = {Chaats} name = "Chaats & Snacks"/>
                    <ItemBox img = {Namkeen} name = "Namkeen"/>
                    <ItemBox img = {Paratha} name = "Parathas & Puris"/>
                    <ItemBox img = {Combo} name = "Special Combos"/>
                    <ItemBox img = {Beverages} name = "Beverages"/>
                </div>
                <button className = "viewAllBtn">View All</button>
            </div>
        </div>

        <div id = "aboutSection">
            <img className = "bg" src = {Bg} />
            <h3 className = "homeAboutHeading">ABOUT US</h3>
            <p className = "homeAboutText">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        </div>
    );
}

export default Home;