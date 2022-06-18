let img= document.querySelector("pic");

let btns= document.querySelectorAll("button");
let imgNum=0;
let imgArray= [
    "https://uidesign.gbtcdn.com/GB/image/8823/Father1190X420en.jpg?imbypass=true",
    "https://uidesign.gbtcdn.com/GB/image/9534/Smart+Watches+PC+1190X420+EN.jpg",
    "https://uidesign.gbtcdn.com/GB/image/8823/1190X420-en1.jpg",
    "https://uidesign.gbtcdn.com/GB/image/8823/1190X420.jpg",
]
btns[1].addEventListener("click",
function() {
    if (imgNum===0) {
        imgNum=imgArray.length-1;
    } else {
        imgNum--;
    }
    pic.setAttribute("src",imgArray[imgNum]);
})

btns[2].addEventListener("click",
function() {
    if (imgNum===imgArray.length-1) {
        imgNum=0;
    } else {
        imgNum++;
    }
    pic.setAttribute("src",imgArray[imgNum]);
})