
const table = [
    "img/christal_ball.jpg", 
    "img/christal_ball.jpg",
    "img/oeil.jpg",
    "img/oeil.jpg",
    "img/pendule.jpg",
    "img/pendule.jpg",
    "img/saturne.jpg",
    "img/saturne.jpg",
    "img/serpent.jpg",
    "img/serpent.jpg",
    "img/taureau.jpg",
    "img/taureau.jpg"
];

let deck = document.getElementById("deck");
let beginCard = '<div class="row align-items-center justify-content-center cards col-4 col-lg-3 m-0 my-4 p-0"><div class="flip-card m-0 p-0"><div class="flip-card-inner m-0 p-0"><div class="flip-card-front face m-0 p-0"></div><div class="flip-card-back face m-0 p-0" style="background-image: url(';
let endCard = ');"></div></div></div></div>';
let numberReturnedCards = 0; 

function shuffle(array) {
    let currentIndex = array.length;
    let randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

shuffle(table);


for (let i = 0; i < 12; i++) {
  deck.innerHTML += beginCard + "'" + table[i] + "'" + endCard ;
}

let flipCardInner = document.getElementsByClassName("flip-card-inner");

for (let i = 0; i < flipCardInner.length ; i++) {
  flipCardInner[i].addEventListener("click",function(){
    if(this.classList.contains("returned")) {
      this.style.transform="rotateY(0deg)";
      this.classList.remove("returned");
      numberReturnedCards--;
      this.style.boxShadow="0px 0px 15px 4px rgba(0, 0, 0, 0.75)";
    }
    else{
    this.style.transform="rotateY(180deg)";
    this.classList.add("returned");
    numberReturnedCards++;
    console.log(numberReturnedCards);
    this.style.boxShadow="0px 0px 10px 4px rgba(224, 192, 136, 0.75)";
    }
  });
}



