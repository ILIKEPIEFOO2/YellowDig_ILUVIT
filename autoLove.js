var posts = document.getElementsByClassName("article tab-key ");
var content;
var likeAbleButtons;
var loveIt;
var num_of_loves = 0;
for ( post of posts ){
    content = post.getElementsByClassName("article-content")[0];
    likeAbleButtons = content.getElementsByClassName("zf-multi-like-btns")[0];
    loveIt = likeAbleButtons.getElementsByTagName("li")[0];
    //console.log(getComputedStyle(loveIt).backgroundColor);
    if( !loveIt.className.toString().includes("multi-like-active") ){
        console.log("Found post without a love it...");
        loveIt.click();
        num_of_loves+=1;
    }
}
console.log("Finished loving "+num_of_loves+" posts.");
