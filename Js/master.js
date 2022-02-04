let landingPage = document.querySelector(".landing-page");
//get array of images
let imgarray =["1.png","2.png","3.png","s4.png","5.png"];
//change background image url

//get random number
let randomNumber = Math.floor(Math.random()*imgarray.length);
setInterval(()=>{
    let randomNumber = Math.floor(Math.random()*imgarray.length);
    landingPage.style.backgroundImage ='url("images/'+imgarray[randomNumber]+'")';
},10000);