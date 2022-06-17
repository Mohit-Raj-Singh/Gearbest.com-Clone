let product = [
  { image: "https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16487/goods_thumb_220-v1/9bd2c3157fee.jpg", head: "Smartphone S22 Ultra 5G Cellular 6.8 Inch 6800mAh", price: "$129.50",RRP: "RRP: $239.80" },
  { image: "https://gloimg.gbtcdn.com/soa/gb/item/6878402251153666048/16516/goods_thumb_220-v3/015537dd4004.jpg", head: "New 2022 Xiaomi Mijia Electric Shaver 2 Floating Head Portable", price: "$20.99999",RRP: "RRP: $239.80" },
  { image: "https://gloimg.gbtcdn.com/soa/gb/item/6878024886355423232/16453/goods_thumb_220-v1/066e93a396fc.jpg", head: "Xiaomi YOupin Robot Vacuum Cleaner Smart Cellphones APP", price: "$119.0000",RRP:  "RRP: $239.80" },
  { image: "https://gloimg.gbtcdn.com/soa/gb/item/6917171477716594688/16520/goods_thumb_220-v1/ff833b42be00.jpg", head: "Nylon Canvas Strap Wrist Band Replacement For XIaomi MI", price: "$11.05000",RRP:  "RRP: $239.80" },
  { image: "https://gloimg.gbtcdn.com/soa/gb/item/6878400698325856256/16414/goods_thumb_220-v3/738b2172af87.jpg", head: "NextTool Rechargeable Flashlight 5000mAh", price: "$32.99", RRP: "RRP:$46.24" },
  { image: "https://gloimg.gbtcdn.com/soa/gb/store/6878400698325856256/16426/goods_thumb_220-v1/5061a825237f.jpg", head: "Portable Automatic Soap Dispense 320ml Foam Hand", price: "$19.99", RRP: "RRP:$25.99" },
  { image: "https://gloimg.gbtcdn.com/soa/gb/item/6934083223668584448/16546/goods_thumb_220-v1/251094d549e1.jpg", head: "MoreFine M6 11th Pocket PC Windows 10 Intel", price: "$218.11", RRP: "RRP:$327.99" },
  { image: "https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16539/goods_thumb_220-v1/7a6e1bdf0f46.jpg", head: "Haylou RS4 smart watches Global version Blood Oxygen", price: "$47.99",RRP: "RRP:$69.00" },
  { image: "https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16535/goods_thumb_220-v1/d22b84141728.jpg", head: "MINGDA Magician Pro 3D Printer Auto Levelling Double", price: "$635.00", RRP: "RRP:$899.00" },
  { image: "https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16434/goods_thumb_220-v1/0424fc2439a4.jpg", head: "QIDI TECH X-plus 3D Printer Large SIze Intelligent Industrial", price: "$679.00", RRP: "RRP:$859.99" },
  { image: "https://gloimg.gbtcdn.com/soa/gb/item/6878402251153666048/16514/goods_thumb_220-v3/e8fab8f96c7a.jpg", head: "Original Xiaomi Mi Backpack 10L Urban Leisure Chets", price: "$6.99", RRP: "RRP:$31.00" },
  { image: "https://gloimg.gbtcdn.com/soa/gb/item/6878402251153666048/16417/goods_thumb_220-v3/21ff9307e5ee.jpg", head: "Smart Watch Men 400Mah Big Battery Music Play Fitness", price: "$33.99", RRP: "RRP:$70.00" },
  { image: "https://gloimg.gbtcdn.com/soa/gb/item/6878024886355423232/16423/goods_thumb_220-v2/f90c9abe33fb.jpg", head: "H96 Max RK3318 Smart TV Box Android 11 4G 64GB 32G 4K", price: "$45.00", RRP: "RRP:$79.99" },
  { image: "https://gloimg.gbtcdn.com/soa/gb/item/6878402251153666048/16416/goods_thumb_220-v1/7479afecf81b.jpg", head: "Lenovo X3 Bluetooth Earphone Bone Conduction Wireless", price: "$19.90", RRP: "RRP:$43.20" },
  { image: "https://gloimg.gbtcdn.com/soa/gb/item/6878026654363611136/16417/goods_thumb_220-v1/a9512fe0485a.jpg", head: "Q8 Wireless Bluetooth Earphones LED Digital Display", price: "$17.84", RRP: "RRP:$22.30" },
  { image: "https://gloimg.gbtcdn.com/soa/gb/item/6878026654363611136/16417/goods_thumb_220-v1/859fc9cb431a.jpg", head: "M32B Wireless Bluetooth Earbud Sports Earphones In Ear", price: "$15.84", RRP: "RRP:$519.00" },
  { image: "https://gloimg.gbtcdn.com/soa/gb/item/6878026654363611136/16417/goods_thumb_220-v1/9e2bd69876b9.jpg", head: "DT7 Plus Smart Watch Series 7 Two Buttons NFC GPS Tracker", price: "$29.77", RRP: "RRP:$39.70" },
  { image: "https://gloimg.gbtcdn.com/soa/gb/item/6878028664286670848/16425/goods_thumb_220-v1/dbbcdadb0d1f.jpg", head: "i1000 tws Wireless Bluetooth Headset 5.0 Pop-Up Wireless", price: "$795.00", RRP: "RRP:$36.00" },
  { image: "https://gloimg.gbtcdn.com/soa/gb/store/6900386065325158400/16467/goods_thumb_220-v1/d7e25b62c349.jpg", head: "NIUBILITY B20 Electric Moped Bicycle Foding Bike 350W Motor", price: "$795.00", RRP: "RRP:$1009.00" },
  { image: "https://gloimg.gbtcdn.com/soa/gb/item/6901174613791928320/16471/goods_thumb_220-v1/da3fb455c7ea.jpg", head: "T900 PRO MAX New Fashion Mens Womens Sports Smart", price: "$17.68", RRP: "RRP:$24.99" },
  { image: "https://gloimg.gbtcdn.com/soa/gb/item/6901174613791928320/16469/goods_thumb_220-v1/3cb0b549bb5d.jpg", head: "Wireless Bone Conduction Bluetooth 5.1 Stereo For Home", price: "$11.68", RRP: "RRP:$23.99" },
  { image: "https://gloimg.gbtcdn.com/soa/gb/item/6901174613791928320/16469/goods_thumb_220-v1/8741c2939368.jpg", head: "G20 TWS Mini Bluetooth 5.1 Headphones 9D SUrround Sound", price: "$13.89", RRP: "RRP:$19.89" },
  { image: "https://gloimg.gbtcdn.com/soa/gb/item/6901962188706213888/16473/goods_thumb_220-v8/5cfe39f2fc03.jpg", head: "New Smartwatch 2022 KOSPET TANK M1 Rugged Outdoor", price: "$64.99", RRP: "RRP:$64.99" },
  { image: "https://gloimg.gbtcdn.com/soa/gb/item/6880467893788798976/16546/goods_thumb_220-v1/e0ede8519a77.jpg", head: "New For Nintendo NS Wireless Jo-Con Handle Colored Lights", price: "$56.20", RRP: "RRP:$58.99" },
  { image: "https://gloimg.gbtcdn.com/soa/gb/item/6898654298117435392/16545/goods_thumb_220-v1/1331604d0515.jpg", head: "TWS Bluetooth Earphones J88 Sports Wireless Headphines", price: "$23.80", RRP: "RRP:$70.00" },
  { image: "https://gloimg.gbtcdn.com/soa/gb/item/6878024886355423232/16453/goods_thumb_220-v1/311bfd34aecb.jpg", head: "Electric Neck Massager Pulse Back 6 Models Power Control", price: "$22.80", RRP: "RRP:$69.99" },
  { image: "https://gloimg.gbtcdn.com/soa/gb/item/6878024886355423232/16416/goods_thumb_220-v1/9dbf47dbe530.jpg", head: "A9 Mini Camera WiFi Camera 1080P HD Night Version Voice", price: "$10.60", RRP: "RRP:$39.99" },
  { image: "https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16473/goods_thumb_220-v1/41b471a4b273.jpg", head: "Global Version 12 Pro Max 12GB 512GB Smartphone 5G", price: "$120.30", RRP: "RRP:$301.00" },
  { image: "https://gloimg.gbtcdn.com/soa/gb/item/6507287161137004544/16407/goods_thumb_220-v1/d1f9cad3c2dc.jpg", head: "2 in 1 Full HD 720P Car DVR Camera English-Russian", price: "$71.98", RRP: "RRP:$79.99" },
  { image: "https://gloimg.gbtcdn.com/soa/gb/item/6771730315905003520/16413/goods_thumb_220-v1/269f4c5405b3.jpg", head: "LED Car Foot Ambient Light With USB Cigarette Lighter", price: "$23.99", RRP: "RRP:$30.99" },
  { image: "https://gloimg.gbtcdn.com/soa/gb/item/6771730315905003520/16406/goods_thumb_220-v1/623d9fe86b50.jpg", head: "ZHIYU Portable Mini Flashlight Q5+COB LED Headlamp High", price: "$7.87", RRP: "RRP:$16.99" },
  { image: "https://gloimg.gbtcdn.com/soa/gb/item/6771730315905003520/16407/goods_thumb_220-v1/e49d42522be1.jpg", head: "Netac P500 Micro SD Card 512GB 256GB 64GB 32GB 16GB", price: "$27.99", RRP: "RRP:34.99" },




];

let gridBox = document.getElementById("gridbox");

function displayProduct(product) {
  product.forEach(function (ele) {
    console.log(ele.image)
    let gridDiv = document.createElement("div")
    let image = document.createElement("img");
    image.src = ele.image;
    let head = document.createElement("p");
    head.innerText = ele.head;
    let price = document.createElement("p");
    price.innerText = ele.price;
    
    let rrp = document.createElement("p");
    rrp.innerText = ele.RRP;
    
    let button = document.createElement("button");
    let cartLogo =document.createElement("img");
    cartLogo.src= "https://uidesign.gbtcdn.com/GB/image/2019/20190417_9244/cart_default.png"
    button.append(cartLogo)
    gridDiv.append(image, head, price,rrp,button);
    gridBox.append(gridDiv)
  })
};

displayProduct(product)

