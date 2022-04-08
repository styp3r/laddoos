import React from 'react';
import Image from '../images/image.gif';

function Home(){
    return(
       <div id = "homePage">
        <div id = "heroSection">
            <div className = "heroText">
                <div className = "heroTextContent">
                    <h1 className = "heroSubText1">Authentic Indian Sweets For Every Occasion</h1>
                    <p className = "heroSubText2">Sweets are a symbol of spreading happiness with your loved ones and what better way than to do it with ones that melt on your taste buds!</p>
                </div>
            </div>
            <div className = "heroVideo">
                <div className = "vidBorder">
                    <img src = {Image}/>
                </div>
            </div>
        </div>
        <div id = "productsMiniView">
            <div className = "productsText"></div>
        </div>
       </div>
    );
}

export default Home;