document.querySelector("form").addEventListener("submit",mylogin);
let userdata=JSON.parse(localStorage.getItem("userdata"))||[];
function mylogin(event){
    event.preventDefault();
    console.log("ank");
    let data={
        email:document.getElementById("email").value,
        password:document.getElementById("pwd").value,
        rpassword:document.getElementById("rpwd").value
    }
    console.log(data);
    if(checkemails(data.email)==true){
        userdata.push(data);
        localStorage.setItem("userdata",JSON.stringify(userdata));
        window.location.href="signin.html"
        console.log(userdata);
    }else{
        alert("Account already exist")
    }
}
function checkemails(email){
    let filtered=userdata.filter(function(elem){
        return email==elem.email;
        
    })
    console.log(filtered);
    if(filtered.length>0){
        return false;
    }else{
        return true;
    }
}