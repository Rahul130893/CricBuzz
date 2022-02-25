async function getdata() {
  let login_url = `https://unofficial-cricbuzz.p.rapidapi.com/matches/list?matchState=recent`;
  let response = await fetch(login_url, {
    method: "GET",

    headers: {
      "x-rapidapi-host": "unofficial-cricbuzz.p.rapidapi.com",
      "x-rapidapi-key": "8e4c985770msh4542bb69707a938p1d9815jsn4c84ca41a2af",
    },
  });
  let data = await response.json();

  console.log("data:", data);

}
//  getdata()

let matches = [
  { team1: "LHQ", team2: "ISU", score1: "168-7(20)", score2: "162(19.4)", res:"Lahore Qalandars won by runs", },
  { team1: "BAN", team2: "AFG", score1: "306-4(50)", score2: "218(45.1)", res:"Bangladesh won by 88 runs", },
  { team1: "RSA", team2: "NZ", score1: "238-3(20)", score2: "   ", res:"Day1: Stumps", },
  { team1: "IND", team2: "SL", score1: "", score2: "", res:"Saturday, 26 Feb, 07:00PM"},
];

appendmatches(matches)

function appendmatches(matches){
    let fourpart=document.getElementById("fourpart")
    matches.forEach(function(el){
        let t1=document.createElement("p")
        t1.innerText=el.team1
        let s1=document.createElement("p")
        s1.innerText=el.score1
        let t2=document.createElement("p")
        t2.innerText=el.team2
        let s2=document.createElement("p")
        s2.innerText=el.score2
        let result=document.createElement("p")
        result.innerText=el.res
        result.style.color="Red"

        let upperdiv=document.createElement("div")
        upperdiv.append(t1,s1)
        upperdiv.style.display="flex"
        upperdiv.style.justifyContent="space-around"

        let lowerdiv=document.createElement("div")
        lowerdiv.append(t2,s2)
        lowerdiv.style.display="flex"
        lowerdiv.style.justifyContent="space-around"


      let onepart=document.createElement("div")
      onepart.append(upperdiv, lowerdiv, result)

      fourpart.append(onepart)

    })
}

let imagesArrNews=[
    {img:"https://www.cricbuzz.com/a/img/v1/165x95/i1/c227086/new-zealand-vs-south-africa-2.jpg",news:"NZ batter Lauren Down ruled out of Women's World Cup",details:"New Zealnd vs South africa, 2nd test, day1"},
    {img:"https://www.cricbuzz.com/a/img/v1/165x95/i1/c227058/india-vs-sri-lanka-1st-t20i.jpg",news:"BCCI sets up committee to investigate threats to Saha", details:"India vs Sri Lanka, 1is T201"},
    {img:"https://www.cricbuzz.com/a/img/v1/165x95/i1/c226918/india-vs-west-indies-3rd-t20i.jpg",news:"After Ruturaj injury, Agarwal added to T20 squad as back up", details:"India vs West Indies, 3rd T20I"},
    {img:"https://www.cricbuzz.com/a/img/v1/165x95/i1/c226867/australia-vs-sri-lanka-5th-t2.jpg",news:"We just needed to bat a bit longer: Rahmanullah Gurbaz", details:"Aus vs SL, 5th T20I"},
    {img:"https://www.cricbuzz.com/a/img/v1/165x95/i1/c226805/india-vs-west-indies-2nd-t20i.jpg",news:"BCCI plans to start Women's domestic competitions in March", details:"India vs West Indies, 2nd T20I"},
    {img:"https://www.cricbuzz.com/a/img/v1/165x95/i1/c226748/australia-vs-sri-lanka-4th-t2.jpg",news:"Kusal Mendis, Dickwella named in SL squad for India Tests", details:"Aus vs SL, 4th T20I"},
   
]
appendImgandNews(imagesArrNews)
function appendImgandNews(x){
    let imgdiv=document.getElementById("imgDiv")
    let newsdiv=document.getElementById("newsDiv")

    x.forEach(function(el){
       let image=document.createElement("img")
       image.src=el.img

       let detl=document.createElement("p")
       detl.innerText=el.details

       let news=document.createElement("p")
       news.innerText=el.news

       let box=document.createElement("div")
       box.append(image,detl)

       imgdiv.append(box)

       let newsbox=document.createElement("div")
       newsbox.append(news)

       newsdiv.append(newsbox)


    })
}


let middleArr=[{h:"IPL 2022", img:"https://www.cricbuzz.com/a/img/v1/420x235/i1/c227102/mi-csk-headline-two-ipl-2022.jpg", head:"MI, CSK headline two IPL 2022 groups", details:"Each team will play fellow group members and one team from the other group twice, and the others once - amounting to a total of 14 league games", p1:"IPL 2022 to kick off on March 26", p2:"IPL 2022 set to have 55 matches in Mumbai, 15 in Pune",},
               {h:"SRI LANKA TOUR OF INDIA, 2022", img:"https://www.cricbuzz.com/a/img/v1/420x235/i1/c227082/india-reap-the-benefits-of-cha.jpg", head:"India reap the benefits of changing intent", details:"India have won 10 games on the bounce since losing to New Zealand at the T20 World Cup last year. Friday's was the fifth of those while batting first", p1:"After Ruturaj injury, Agarwal added to T20 squad as back up", p2:"2nd T20I preview / Rain threat over Dharamsala contest",},
               {h:"NZ VS RSA, 2ND TEST", img:"https://www.cricbuzz.com/a/img/v1/420x235/i1/c227083/erwee-ton-gives-sa-opening-day.jpg", head:"Erwee ton gives SA opening day honours", details:"Hosts give a good account of themselves after a bold call to bat", p1:"Report / Erwee 108 gives South Africa opening day edge'Middle order banker' Bavuma the key as SA eye turnaround", p2:"Day 1 / In PicturesThe strength and courage of Sarel Erwee",},
               {h:"BAN VS AFG", img:"https://www.cricbuzz.com/a/img/v1/420x235/i1/c227108/clinical-bangladesh-go-up-2-0.jpg", head:"Clinical Bangladesh go up 2-0", details:"Liton made 136 while Rahim got 86 as the hosts posted 306", p1:"Liton, Rahim ease Bangladesh to 2-0 lead", p2:"Liton continues to shine after turning a corner"},
                 ]
 
appendmiddlepart(middleArr)

function appendmiddlepart(x){
    let middlepart=document.getElementById("middle")
    x.forEach(function(el){

        let topic=document.createElement("p")
        topic.innerText=el.h
        
        let pic=document.createElement("img")
        pic.src=el.img

        let head=document.createElement("h2")
        head.innerText=el.head
        
        let details=document.createElement("p")
        details.innerText=el.details

        let p1=document.createElement("h4")
        p1.innerText=el.p1

        let p2=document.createElement("h4")
        p2.innerText=el.p2

        let box=document.createElement("div")
        box.append(topic, pic, head, details, p1, p2)

        middlepart.append(box)
        console.log("yes")

    })

}            

let videoArr=[
           {vid:"https://www.cricbuzz.com/a/img/v1/290x164/i1/c227104/ipl-2022-explainer-10-teams.jpg", h3:"IPL 2022 EXPLAINER: 10 TEAMS, 4 VENUES, MI &CSK LEAD GROUPS"},
           {vid:"https://www.cricbuzz.com/a/img/v1/290x164/i1/c227075/aggressive-bowling-is-chahals.jpg", h3:"AGRESSIVE BOWLING IS THE STRENGTH OF CHAHAL, GOT WELL RESULTS:PRAGYAN OJHA"},
           {vid:"https://www.cricbuzz.com/a/img/v1/290x164/i1/c227068/india-v-sri-lanka-2nd-t20i-p.jpg", h3:"INDIA VS SRI LANKA, 2ND T20I: PREVIEW"},
          
      ]

appendvid(videoArr)

function appendvid(x){
    let videoDiv=document.getElementById("video")
    x.forEach(function(el){

        let pic=document.createElement("img")
        pic.src=el.vid

        
        let p1=document.createElement("h3")
        p1.innerText=el.h3
      
        let box=document.createElement("div")
        box.append(pic, p1)

        videoDiv.append(box)

    })
}


let splImgArr=[
    {pic:"https://www.cricbuzz.com/a/img/v1/300x170/i1/c226157/the-draft-model-was-considere.jpg", h4:"'IPL is still young, the auction must not disapear in a hurry'", p:"In an exclusive interview, former COO of the league Sundar Raman discusses the IPL auction, how it was conceived and whether it has outlived its usefulness"},
    {pic:"https://www.cricbuzz.com/a/img/v1/300x170/i1/c225869/ambati-rayudu-has-been-csks-s.jpg", h4:"The CSK hand in Rayudu's return to cricket", p:"The middle-order batter had announced his retirement after failing to make the cut for the 2019 World Cup, but turned a new page in his career thereafter"},
    {pic:"https://www.cricbuzz.com/a/img/v1/300x170/i1/c224446/india-won-a-series-in-australi.jpg", h4:"Stats:India's incredible journey under Captain Kohli", p:"With 40 wins as captain, Virat Kohli is India's most successful Test captain"},
    {pic:"https://www.cricbuzz.com/a/img/v1/300x170/i1/c123313/bavuma-earned-scholarships-to.jpg", h4:"Temba Bavuma: Ambassador for South Africa's progressive prayers", p:"Few people seem willing to talk about how the current transformation policies are affecting the players in South Africa's cricket systems"}, 
    {pic:"https://www.cricbuzz.com/a/img/v1/300x170/i1/c213577/venkatesh-iyer-pulverised-the.jpg", h4:"A studious rise: the maling of Venkatesh Iyer", p:"The people behind the rise of KKR's newest star shed light on a calm-headed boy and a batting powerhouse"},
   ]

   appendSpImg(splImgArr)

   function appendSpImg(x){
       let spimg=document.getElementById("spImg")

       x.forEach(function(el){
        let pic=document.createElement("img")
        pic.src=el.pic

        
        let p1=document.createElement("h4")
        p1.innerText=el.h4

        let p=document.createElement("p")
        p.innerText=el.p
      
        let box=document.createElement("div")
        box.append(pic, p1, p)

        spimg.append(box)
       })
   }

