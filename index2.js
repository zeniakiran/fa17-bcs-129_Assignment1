
function creatingImageElem(){
    var clickedImage = localStorage.getItem("source");
    var price = localStorage.getItem("price");
    var myImg= document.getElementById("myImg");
    myImg.setAttribute("src",clickedImage);
    var mySpan = document.getElementById("span");
    mySpan.innerHTML=price;
}



