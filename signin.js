let form=document.querySelector("form");
let userdata=JSON.parse(localStorage.getItem("userdata"));
console.log(userdata);
form.addEventListener("submit",function(event){
    event.preventDefault();
    let data={
        email:document.getElementById("email").value,
        password:document.getElementById("pwd").value
    }
    console.log(data);
    if(checksignin(data.email,data.password)==true){
        localStorage.setItem("signin",JSON.stringify(data));
        alert("sign in successful")
    }else{
        alert("wrong username and password");
    }
})
function checksignin(email,password){
    console.log(email,password);
    let filtered=userdata.filter(function(element){
        return email==element.email && password==element.password ;
        
    })
    console.log(filtered);
    if(filtered.length=="0"){
        return false;
    }else{
        return true;
    }
}