let im= document.querySelector("img");

let btn= document.querySelectorAll("btn");
let imgNum=0;
let imgArray= [
    "https://uidesign.gbtcdn.com/GB/image/8823/Father1190X420en.jpg?imbypass=true",
    "https://uidesign.gbtcdn.com/GB/image/9534/Smart+Watches+PC+1190X420+EN.jpg",
    "https://uidesign.gbtcdn.com/GB/image/8823/1190X420-en1.jpg",
    "https://uidesign.gbtcdn.com/GB/image/8823/1190X420.jpg",
]
btn[0].addEventListener("click",
function() {
    if (imgNum===0) {
        imgNum=imgArray.length-1;
    } else {
        imgNum--;
    }
    im.setAttribute("src",imgArray[imgNum]);
})

btn[1].addEventListener("click",
function() {
    if (imgNum===imgArray.length-1) {
        imgNum=0;
    } else {
        imgNum++;
    }
    im.setAttribute("src",imgArray[imgNum]);
})