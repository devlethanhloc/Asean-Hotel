let navArray = document.querySelectorAll('.nav-bar-top a img');
let navArrayBottom = document.querySelectorAll('.nav-bar-bottom a img');

navArray[0].addEventListener('click', ()=>{
   if(navArray[0].getAttribute('src') === "/img/happen.gif"){
       navArray[0].setAttribute('src',"/img/happen_over.gif");
       navArray[0].setAttribute('class',"animation");
   }
   else{
    navArray[0].setAttribute('src',"/img/happen.gif")
    navArray[0].setAttribute('class',"");
   }
});

navArray[1].addEventListener('click', ()=>{
   if(navArray[1].getAttribute('src') === "/img/About.gif"){
       navArray[1].setAttribute('src',"/img/About_over.gif");
       navArray[1].setAttribute('class',"animation");
   }
   else{
    navArray[1].setAttribute('src',"/img/About.gif")
    navArray[1].setAttribute('class',"");
   }
});

navArray[2].addEventListener('click', ()=>{
   if(navArray[2].getAttribute('src') === "/img/guess.gif"){
       navArray[2].setAttribute('src',"/img/guess_over.gif");
       navArray[2].setAttribute('class',"animation");
   }
   else{
    navArray[2].setAttribute('src',"/img/guess.gif")
    navArray[2].setAttribute('class',"");
   }
});

navArray[3].addEventListener('click', ()=>{
   if(navArray[3].getAttribute('src') === "/img/conference.gif"){
       navArray[3].setAttribute('src',"/img/conference_over.gif");
       navArray[3].setAttribute('class',"animation");
   }
   else{
    navArray[3].setAttribute('src',"/img/conference.gif")
    navArray[3].setAttribute('class',"");
   }
});

navArray[4].addEventListener('click', ()=>{
   if(navArray[4].getAttribute('src') === "/img/restaurant.gif"){
       navArray[4].setAttribute('src',"/img/restaurant_over.gif");
       navArray[4].setAttribute('class',"animation");
   }
   else{
    navArray[4].setAttribute('src',"/img/restaurant.gif")
    navArray[4].setAttribute('class',"");
   }
});

navArray[5].addEventListener('click', ()=>{
   if(navArray[5].getAttribute('src') === "/img/Entertainment.gif"){
       navArray[5].setAttribute('src',"/img/Entertainment_over.gif");
       navArray[5].setAttribute('class',"animation");
   }
   else{
    navArray[5].setAttribute('src',"/img/Entertainment.gif")
    navArray[5].setAttribute('class',"");
   }
});

navArrayBottom[0].addEventListener('click', ()=>{
    if(navArrayBottom[0].getAttribute('src') === "/img/home.gif"){
        navArrayBottom[0].setAttribute('src',"/img/home_over.gif");
    }
    else{
     navArrayBottom[0].setAttribute('src',"/img/home.gif")
     navArrayBottom[0].setAttribute('class',"");
    }
 });

navArrayBottom[1].addEventListener('click', ()=>{
    if(navArrayBottom[1].getAttribute('src') === "/img/Asean.gif"){
        navArrayBottom[1].setAttribute('src',"/img/Asean_over.gif");
    }
    else{
     navArrayBottom[1].setAttribute('src',"/img/Asean.gif")
     navArrayBottom[1].setAttribute('class',"");
    }
 });

navArrayBottom[2].addEventListener('click', ()=>{
    if(navArrayBottom[2].getAttribute('src') === "/img/reservation.gif"){
        navArrayBottom[2].setAttribute('src',"/img/reservation_over.gif");
    }
    else{
     navArrayBottom[2].setAttribute('src',"/img/reservation.gif")
     navArrayBottom[2].setAttribute('class',"");
    }
 });

navArrayBottom[3].addEventListener('click', ()=>{
    if(navArrayBottom[3].getAttribute('src') === "/img/Survey.gif"){
        navArrayBottom[3].setAttribute('src',"/img/Survey_over.gif");
    }
    else{
     navArrayBottom[3].setAttribute('src',"/img/Survey.gif")
     navArrayBottom[3].setAttribute('class',"");
    }
 });