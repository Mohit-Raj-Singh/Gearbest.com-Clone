let productCont= document.getElementById("tableCart")

let cartNewArrivalLs= JSON.parse(localStorage.getItem("cartPage")) || [];



function displayProduct(productData){
    productCont.innerHTML="";
    productData.forEach(function(element){
       let trCart=document.createElement("tr");
      

       
       let tdCart1=document.createElement("td");
       let cartDiv=document.createElement("div");
       let cartImage=document.createElement("img");

       cartDiv.append(cartImage);
       tdCart1.append(cartDiv);


       let tdCart2=document.createElement("td");

       let tdCart3=document.createElement("td");

       let tdCart4=document.createElement("td");

       trCart.append(tdCart1, tdCart2, tdCart3, tdCart4);
       document.querySelector("tbody").append(trCart);

    })
}