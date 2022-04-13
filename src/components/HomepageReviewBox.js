import React from 'react';

function HomepageReviewBox(props){
    return(
        <div id = "reviewBox">
            <div className = "profilePic">
                <img src = "https://writestylesonline.com/wp-content/uploads/2018/11/Three-Statistics-That-Will-Make-You-Rethink-Your-Professional-Profile-Picture-1024x1024.jpg" width = "100" height = "100"/>
            </div>
            <div className = "reviewText">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
        </div>
    );
}

export default HomepageReviewBox;