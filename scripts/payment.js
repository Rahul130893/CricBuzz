let payable_amt = localStorage.getItem("clicked_plan");

let amtshow = document.getElementById("payable_amt");
amtshow.innerText = `Payable amount = INR  ${payable_amt}`;

function backtoplan() {
  window.location.href = "plans.html";
}

function done() {
  let cardnumber = document.getElementById("cardNum").value;

  let expiry = document.getElementById("expiry").value;

  let cvv = document.getElementById("cvv").value;

  if (cardnumber.length != 16 || expiry.length != 4 || cvv.length != 3) {
    alert("invalid credentials");
    console.log(cardnumber.length);
  } else {
    alert("Payment done successfully");
    window.location.href="index.html"
  }
}