let productCont= document.getElementById("newContainer")

let cartNewArrivalLs= JSON.parse(localStorage.getItem("newCart")) || [];
let totalPrice=0;



function displayProduct(cartNewArrivalLs){
    
  
     totalPrice=0;
     
    cartNewArrivalLs.forEach(function(elem){
        
        totalPrice+= +elem.newPrice;
        // productCont.innerHTML="";


       let trCart=document.createElement("tr");
      

       
       let tdCart1=document.createElement("td");


       let cartDiv=document.createElement("div");
       let cartImage=document.createElement("img");
       cartImage.setAttribute("src", elem.newImage);

       let cartPara=document.createElement("p");
       cartPara.innerText=elem.newProductName;

       cartDiv.append(cartImage, cartPara);
       tdCart1.append(cartDiv);


       let tdCart2=document.createElement("td");
       tdCart2.innerText=elem.newPrice;


       let tdCart3=document.createElement("td");
       tdCart3.innerText=elem.newPrice;



       let deletetCart=document.createElement("button");
       deletetCart.innerText="Delete";
       deletetCart.addEventListener("click", function(){
        
        Delete(elem.newProductID); 
       })

       trCart.append(tdCart1, tdCart2, tdCart3, deletetCart);
       document.querySelector("tbody").append(trCart);

    })

    
}

displayProduct(cartNewArrivalLs);

function Delete(id){
   
    // console.log(id);
    let deleted=cartNewArrivalLs.filter(function(el){
        window.location.reload();
        return el.newProductID != id;
        
    })
    // console.log(deleted)
   
    cartNewArrivalLs=deleted;
    localStorage.setItem("newCart", JSON.stringify(cartNewArrivalLs));  
    displayProduct(cartNewArrivalLs); 
}


let totalCartBox=document.createElement("div");

let subTotalBox=document.createElement("div");

let subTotal=document.createElement("p");
subTotal.innerText="Your Total :"

let totalHead=document.createElement("h2");
totalHead.innerText=totalPrice;





subTotalBox.append(subTotal, totalHead);
totalCartBox.append(subTotalBox);
document.querySelector("#newContainer").append(totalCartBox);












































// let main_footer = document.querySelector("#footer_main_aj")

// let f4_data = [
//     {
//         mh: "Company Information",
//         sh1: "About Us",
//         sh2: "Privacy Policy",
//         sh3: " Terms and Conditions",
//         sh4: "Intellectual Property Policy",
//         sh5: "Testimonials",
//         sh6: "Contact Us",
//         sh7: "Report Security Issue",
//         sh8: "Sell on Gearbest",
//         sh9: "Cookies Policy",
//         sh10: "Top Brands",
//         sh11: "Gearbest Official Blog",
//         sh12: "Top Searches"

//     },

//     {
//         mh: "Customer Service",
//         sh1: "Shipping Information",
//         sh2: "My Favorites",
//         sh3: "FAQ For Newsletter Subscription",
//         sh4: "My Points",
//         sh5: "Warranty and Return",
//         sh6: "Payment Methods",
//         sh7: "Deposit Expansion",
//         sh8: "FAQ & Support",
//         sh9: "Sitemap",
//         sh10: "Gearbest Wallet Instruction",
//         sh11: "FAQs about COVID-19",
//         sh12: "",


//     },

//     {
//         mh: "Other Business",
//         sh1: "Partnership Programs",
//         sh2: "Associate Program",
//         sh3: "",
//         sh4: "",
//         sh5: "",
//         sh6: "",
//         sh7: "",
//         sh8: "",
//         sh9: "",
//         sh10: "",
//         sh11: "",
//         sh12: "",
//     },

// ]

// display_footer_4()
// function display_footer_4() {
//     f4_data.forEach(function (elem) {
//         let footer_4 = document.querySelector("#footer-4")
//         let f4_boxes = document.querySelector("#cont_boxes")
//         let tbody = document.createElement("div")
//         // console.log(elem)
//         let th = document.createElement("h3")
//         th.innerText = elem.mh

//         let td1 = document.createElement("a")
//         td1.href = "https://www.gearbest.com/"
//         td1.innerText = elem.sh1

//         let td2 = document.createElement("a")
//         td2.innerText = elem.sh2
//         td2.href = "https://www.gearbest.com/"

//         let td3 = document.createElement("a")
//         td3.innerText = elem.sh3
//         td3.href = "https://www.gearbest.com/"

//         let td4 = document.createElement("a")
//         td4.innerText = elem.sh4
//         td4.href = "https://www.gearbest.com/"

//         let td5 = document.createElement("a")
//         td5.innerText = elem.sh5
//         td5.href = "https://www.gearbest.com/"

//         let td6 = document.createElement("a")
//         td6.innerText = elem.sh6
//         td6.href = "https://www.gearbest.com/"

//         let td7 = document.createElement("a")
//         td7.innerText = elem.sh7
//         td7.href = "https://www.gearbest.com/"

//         let td8 = document.createElement("a")
//         td8.innerText = elem.sh8
//         td8.href = "https://www.gearbest.com/"

//         let td9 = document.createElement("a")
//         td9.innerText = elem.sh9
//         td9.href = "https://www.gearbest.com/"

//         let td10 = document.createElement("a")
//         td10.innerText = elem.sh10
//         td10.href = "https://www.gearbest.com/"

//         let td11 = document.createElement("a")
//         td11.innerText = elem.sh11
//         td11.href = "https://www.gearbest.com/"

//         let td12 = document.createElement("a")
//         td12.innerText = elem.sh12
//         td12.href = "https://www.gearbest.com/"

//         let pd1 = document.createElement("p")
//         pd1.append(td1)

//         let pd2 = document.createElement("p")
//         pd2.append(td2)

//         let pd3 = document.createElement("p")
//         pd3.append(td3)

//         let pd4 = document.createElement("p")
//         pd4.append(td4)

//         let pd5 = document.createElement("p")
//         pd5.append(td5)

//         let pd6 = document.createElement("p")
//         pd6.append(td6)

//         let pd7 = document.createElement("p")
//         pd7.append(td7)

//         let pd8 = document.createElement("p")
//         pd8.append(td8)

//         let pd9 = document.createElement("p")
//         pd8.append(td9)

//         let pd10 = document.createElement("p")
//         pd10.append(td10)

//         let pd11 = document.createElement("p")
//         pd11.append(td11)

//         let pd12 = document.createElement("p")
//         pd12.append(td12)



//         tbody.append(th, pd1, pd2, pd3, pd4, pd5, pd6, pd7, pd8, td9, pd10, pd11, pd12)
//         f4_boxes.append(tbody)
//         footer_4.append(f4_boxes)
//         main_footer.append(footer_4)
//     })
// }

// display_footer_5()
// function display_footer_5() {
//     let f5_data = [
//         { image: "https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/money.png" },
//         { image: "https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/m.png" },
//         { image: "https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/rese.png" },
//         { image: "https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/paypal.png" },
//         { image: "https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/visa.png" },
//         { image: "https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/a.png" },

//         { image: "https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/ww.png" },

//         { image: "https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/jcb.png" },

//         { image: "https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/dic.png" },

//         { image: "https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/ya.png" },

//         { image: "https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/d.png" },

//         { image: "https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/qiwi.png" },

//         { image: "https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/oxxo.png" },

//         { image: "https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/webmoney.png" },

//         { image: "https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/bo.png" },

//         { image: "https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/postepay.png" },

//         { image: "https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/giropay.png" },

//         { image: "https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/sofort.png" },

//         { image: "https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/p.png" },

//         { image: "https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/pago.png" },

//         { image: "https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/eps.png" },

//         { image: "https://uidesign.gbtcdn.com/GB/image/others/20190222_7819/Visa-Logo.png" },

//         { image: "https://uidesign.gbtcdn.com/GB/image/others/20190222_7819/m-Logo.png" },
//     ]

//     f5_data.forEach(function (elem) {
//         let img = document.createElement("img")
//         img.src = elem.image

//         let box_f5 = document.querySelector("#footer-5")

//         box_f5.append(img)
//         main_footer.append(box_f5)

//     })

// }

// display_lastfooter()
// function display_lastfooter() {
//     td = document.createElement("p")
//     td.innerText = "Copyright © 2014-2022 Gearbest.com. All Rights Reserved."
//     let box = document.querySelector("#last_footer")
//     box.append(td)
//     main_footer.append(box)
// }