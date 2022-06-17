
let newArrival=[
    {
        newImage: "https://gloimg.gbtcdn.com/soa/gb/item/6882689955441864704/16548/goods_thumb_220-v1/d585179323c5.jpg",
        newProductName: "Laptop Car Charger Adapter With USB Port for Magsafe2",
        newPrice: "$31.00",
        btn: "fa-solid fa-cart-shopping",
        newCart: "Cart"
    },
    {
        newImage: "https://gloimg.gbtcdn.com/soa/gb/item/6878025592978206720/16553/goods_thumb_220-v1/a5e183b72eb6.jpg",
        newProductName: "XT9 Mini WiFi FPV with 4K ESC HD Dual Camera Optical Flow",
        newPrice: "$35.99",
        btn: "fa-solid fa-cart-shopping",
        newCart: "Cart"
    },
    {
        newImage: "https://gloimg.gbtcdn.com/soa/gb/store/6878025592978206720/16553/goods_thumb_220-v1/bad7de278e59.jpg",
        newProductName: "Inflatable Floating Bed Water Backrest Lounger PVC Deck",
        newPrice: "$39.99",
        btn: "fa-solid fa-cart-shopping",
        newCart: "Cart"
    },
    {
        newImage: "https://gloimg.gbtcdn.com/soa/gb/store/6933482338412326912/16551/goods_thumb_220-v1/6f33bf36f8e7.jpg",
        newProductName: "Electric Gooseneck Kettle Hot Water Kettle 100% Stainless",
        newPrice: "$119.99",
        btn: "fa-solid fa-cart-shopping",
        newCart: "Cart"
    },
    {
        newImage: "https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16551/goods_thumb_220-v1/c13cdeecbe0d.jpg",
        newProductName: "Xiaomi Redmi 9A Global ROM 4GB of RAM 64GB / 128GB",
        newPrice: "$148.00",
        btn: "fa-solid fa-cart-shopping",
        newCart: "Cart"
    },
    {
        newImage: "https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16551/goods_thumb_220-v1/ca62cec7e518.jpg",
        newProductName: "Sink Colander Baskets Pack of 2 Wash Vegetables and Fruits",
        newPrice: " $28.00 ",
        btn: "fa-solid fa-cart-shopping",
        newCart: "Cart"
    },
    {
        newImage: "https://gloimg.gbtcdn.com/soa/gb/item/6878391336429613056/16553/goods_thumb_220-v1/a32163ea9522.jpg",
        newProductName: "Xiaomi Mijia Mini Fascia Gun Muscle Electric Massager",
        newPrice: "$79.99",
        btn: "fa-solid fa-cart-shopping",
        newCart: "Cart"
    },
    {
        newImage: "https://gloimg.gbtcdn.com/soa/gb/item/6898654298117435392/16549/goods_img_big-v1/d87e35c0597d.jpg",
        newProductName: "Lenovo Tab P11 Global Firmware Xiaoxin Pad 11 inch",
        newPrice: "$309.80",
        btn: "fa-solid fa-cart-shopping",
        newCart: "Cart"
    },
    {
        newImage: "https://gloimg.gbtcdn.com/soa/gb/store/6878025592978206720/16553/goods_thumb_220-v1/d3f86c375a7c.jpg",
        newProductName: "CflyAi Faith 2S GPS Drone 5G 5KM WiFi FPV with 4K HD",
        newPrice: " $329.99 ",
        btn: "fa-solid fa-cart-shopping",
        newCart: "Cart"
    },
    {
        newImage: "https://gloimg.gbtcdn.com/soa/gb/item/6878025592978206720/16553/goods_thumb_220-v1/bfa7a57705ba.jpg",
        newProductName: "Double Floating Boat Inflatable Floating Bed Floating Boat",
        newPrice: "$117.99",
        btn: "fa-solid fa-cart-shopping",
        newCart: "Cart"
    },
   
];

newArrival.map(function (elem, index, arr){
    let box=document.createElement("div");

    let productImage=document.createElement("img");
    productImage.setAttribute("src", elem.newImage);

    let productName=document.createElement("p");
    productName.innerText=elem.newProductName;

    let productPrice=document.createElement("h3");
    productPrice.innerText=elem.newPrice;

    let cartIcon=document.createElement("i");
    cartIcon.innerHTML=elem.btn;

    let cartName=document.createElement("p");
    cartName.innerText=elem.newCart;

    box.append(productImage, productName, productPrice, cartIcon, cartName);
    document.querySelector("#container").append(box);


})