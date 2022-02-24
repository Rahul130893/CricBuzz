

function getOtp(){
    let inputEmail=document.getElementById("email").value;
   

    if(inputEmail!=""){
        let otp=Math.floor(Math.random()*1000000)
       localStorage.setItem("sent-otp", otp)
       alert("O tp send to your Email")
       window.location.href="otp.html"

    }
 
}
function gotoHome(){
    window.location.href="index.html"
}

