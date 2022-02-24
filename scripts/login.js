

function getOtp(){
    let inputEmail=document.getElementById("email").value;
   

    if(inputEmail!=""){
        let otp=Math.floor(Math.random()*1000000)
       localStorage.setItem("sent-otp", otp)
       alert("otp send to your Email")

    }
 
}

