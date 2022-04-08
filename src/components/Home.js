import React from 'react';
import Image from '../images/image.gif';
import ItemBox from './ItemBox';

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
                    <ItemBox img = "https://www.cubesnjuliennes.com/wp-content/uploads/2020/08/Best-Mutton-Keema-Samosa-Recipe-1.jpg" name = "samosa1"/>
                    <ItemBox img = "https://www.cubesnjuliennes.com/wp-content/uploads/2020/08/Best-Mutton-Keema-Samosa-Recipe-1.jpg" name = "samosa2"/>
                    <ItemBox img = "https://www.cubesnjuliennes.com/wp-content/uploads/2020/08/Best-Mutton-Keema-Samosa-Recipe-1.jpg" name = "samosa3"/>
                    <ItemBox img = "https://www.cubesnjuliennes.com/wp-content/uploads/2020/08/Best-Mutton-Keema-Samosa-Recipe-1.jpg" name = "samosa4"/>
                    <ItemBox img = "https://www.cubesnjuliennes.com/wp-content/uploads/2020/08/Best-Mutton-Keema-Samosa-Recipe-1.jpg" name = "samosa5"/>
                    <ItemBox img = "https://www.cubesnjuliennes.com/wp-content/uploads/2020/08/Best-Mutton-Keema-Samosa-Recipe-1.jpg" name = "samosa6"/>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Home;