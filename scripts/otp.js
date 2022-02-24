function clickEvent(first, last){
    if(first.value.length){
        document.getElementById(last).focus();
    }
}

let email=localStorage.getItem("Email-for-otp")
let returned = document.getElementById("email-on-otp");
returned.innerText=`OTP sent to ${email}`
