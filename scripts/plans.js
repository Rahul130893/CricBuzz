let comboplans = [
  {
    pic: "https://www.cricbuzz.com/a/img/v1/120x120/i1/c222004/feature_image.jpg",
    about: "EXCLUSIVE DEALS",
    details:
      "Avail benefit of amazing deal on PayTM First Games and more such exclusive deals on great products coming soon",
  },
  {
    pic: "https://www.cricbuzz.com/a/img/v1/120x120/i1/c218378/feature_image.jpg",
    about: "NEWS",
    details:
      "Read amazing articles written by some of the best cricket writers",
  },
  {
    pic: "https://www.cricbuzz.com/a/img/v1/120x120/i1/c218379/feature_image.jpg",
    about: "MATCH PARTY",
    details:
      "Join virtual match parties live with fans for select IPL and WC matches",
  },
  {
    pic: "https://www.cricbuzz.com/a/img/v1/120x120/i1/c218376/feature_image.jpg",
    about: "VIDEOS",
    details: "Watch exclusive shows like Cricbuzz in Conversation and more",
  },
  {
    pic: "https://www.cricbuzz.com/a/img/v1/120x120/i1/c219068/feature_image.jpg",
    about: "MATCH CLIPS",
    details: "Watch In-match clips for BBL and Ashes",
  },
  {
    pic: "https://www.cricbuzz.com/a/img/v1/120x120/i1/c223048/feature_image.jpg",
    about: "NO ADS",
    details: "Experience Cricbuzz without any Intrusive Ads",
  },
];

display(comboplans);
function display(comboplans) {
  let displayBox = document.getElementById("displayPlans");
  comboplans.forEach(function (el) {
    let abt = document.createElement("h5");
    abt.innerText = el.about;
    abt.setAttribute("class", "abt");

    let pic = document.createElement("img");
    pic.src = el.pic;

    let details = document.createElement("p");
    details.innerText = el.details;
    details.setAttribute("class", "ptag");

    let box = document.createElement("div");

    let imgBox = document.createElement("div");
    imgBox.append(pic);

    let detailsBox = document.createElement("div");
    detailsBox.append(abt, details);

    box.append(imgBox, detailsBox);

    displayBox.append(box);
  });
}

let plans = [
  {
    year: "1year combo plan",
    rate: 999,
    desc:"Save more than INR 4000 with this combo plan. Get 1 year subscription of Cricbuzz Plus and Times Prime. Get complimentary access to SonyLIV, Zee5, Zomato Pro, Gaana+ & many more with Times Prime.",
  },
  {
    year: "1 year plan",
    rate: 500,
    desc:"Get 1 year subscription of Cricbuzz Plus. And enjoy exclusive articles, videos and more without any intrusive Ads."
  },
  {
    year: "3 month plan",
    rate: 250,
    desc:"Get 90 days of Cricbuzz Plus. And enjoy exclusive articles, videos and more without any intrusive Ads."
  },
];

function select(plans){
    let choice=document.getElementById("selectChoice")
    plans.forEach((el)=>{
        let year=document.createElement("h3")
        year.innerText=el.year;

        let rate=document.createElement("h2")
        rate.innerText=`INR ${el.rate}`;

        let desc=document.createElement("p")
        desc.innerText=el.desc;

        let ratebox=document.createElement("div")
        ratebox.append(year, rate)
        ratebox.setAttribute("id", "ratebox")
        


        let box=document.createElement("div")
        box.append(ratebox, desc)
        box.setAttribute("id", "box")
       

        box.onclick=()=>{
            localStorage.setItem("clicked_plan", JSON.stringify(el.rate))
         
            box.style.background="teal";
            
        }
      
        



        choice.append(box)
    })
}
select(plans)


function gotopayment(){
    window.location.href="payment.html"
}
