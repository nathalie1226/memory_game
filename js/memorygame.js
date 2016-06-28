
var arrImages=[
    {name:"baby1",src:"./images/puki1.jpg"},
    {name:"baby2",src:"./images/puki1.jpg"},
    {name:"baby3",src:"./images/puki7.jpg"},
    {name:"baby4",src:"./images/puki7.jpg"},
    {name:"baby5",src:"./images/puki3.jpg"},
    {name:"baby6",src:"./images/puki3.jpg"},
    {name:"baby7",src:"./images/puki4.jpg"},
    {name:"baby8",src:"./images/puki4.jpg"},
    {name:"baby9",src:"./images/puki8.jpg"},
    {name:"baby10",src:"./images/puki8.jpg"},
    {name:"baby11",src:"./images/puki6.jpg"},
    {name:"baby12",src:"./images/puki6.jpg"},
];
 function returnImage(clickEvent){
 var btn=clickEvent.target;
     var img=document.getElementById("baby1").style.display="block";
 }

function backToBackground (clickEvent){
   var btn=clickEvent.target;
    var img=document.getElementById("baby1").style.display="none";
}

 // var back= document.getElementsByClassName("card");
 // for (var j=0;j<back.length;j++){
 // back[j].addEventListener("click",randomPictures);
 // }


function randomPictures(){
    for (var i=0;i<arrImages.length;i++){
        var ranNum= Math.floor((Math.random() * 12) + 1);
        var divNum=document.getElementById(ranNum);
      while (divNum.getElementsByTagName('img').length >0) {
           ranNum = Math.floor((Math.random() * 12) + 1);
           divNum = document.getElementById(ranNum);
       }
            var newImg=document.createElement('img');
            newImg.id=arrImages[i].name;
            newImg.src=arrImages[i].src;
            newImg.className="babyPic";
            newImg.style.display="none";
            divNum.appendChild(newImg);

    }
}

document.getElementById("button").addEventListener("click",showAll);
function showAll(){
    var arr=document.getElementsByClassName("babyPic");
    for (var i=0;i<arr.length;i++){
        arr[i].style.display="block";
    }
}

function checkIfSame (target1,target2){
    if (!(target1.target.src === target2.target.src)){
        target1.backToBackground();
        target2.backToBackground();
    }
}

window.onload(randomPictures());