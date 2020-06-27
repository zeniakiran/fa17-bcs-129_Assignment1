function getIdOfImg(){
    var clickedId= event.srcElement.id;
    var elem= document.getElementById(clickedId);
    var clickedImage = elem.src;
    var parentId = elem.parentNode.id;
    price= document.getElementById(parentId).innerText;
    localStorage.setItem("price", price);
    localStorage.setItem("source", clickedImage);
    window.open("WebAssignmentPage3.html");
}













/*function fun(){
    window.open("webPage.html");
    var clickedId= event.srcElement.id;
    var clickedImage = document.getElementById(clickedId).src;
    var x = clickedImage;
    console.log(x);
    //var x =typeof clickedImage;
   // alert(x);
   fun1(x);
}



function fun1(r){
    
    console.log(r);
    var div = document.getElementById("divWebPage");
    var img = document.createElement("img");
    img.setAttribute("src", r);
    div.appendChild(img);
}

*/