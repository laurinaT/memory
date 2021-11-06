const table = [
    ["img/christal_ball.jpg", 0],
    ["img/christal_ball.jpg", 0],
    ["img/oeil.jpg", 1],
    ["img/oeil.jpg", 1],
    ["img/pendule.jpg", 2],
    ["img/pendule.jpg", 2],
    ["img/saturne.jpg", 3],
    ["img/saturne.jpg", 3],
    ["img/serpent.jpg", 4],
    ["img/serpent.jpg", 4],
    ["img/taureau.jpg", 5],
    ["img/taureau.jpg", 5]
];

let deck = document.getElementById("deck");
let beginCard = '<div class="row align-items-center justify-content-center cards col col-4 col-lg-3 m-0 my-3 p-0"><div class="flip-card m-0 p-0"><div class="flip-card-inner m-0 p-0"><div class="flip-card-front face m-0 p-0"></div><div class="flip-card-back face m-0 p-0 img-fluid" style="background-image: url(';
let endCard = ');"></div></div></div></div>';
let numberReturnedCards = 0;
let firstCard = "";
let secondCard = "";

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
            array[randomIndex], array[currentIndex]
        ];
    }

    return array;
}

shuffle(table);


for (let i = 0; i < 12; i++) {
    deck.innerHTML += beginCard + "'" + table[i][0] + "'" + endCard;
}


let flipCardInner = document.getElementsByClassName("flip-card-inner");

function flipCard() {
    if (numberReturnedCards < 2) {
        this.style.transform = "rotateY(180deg)";
        this.classList.add("returned");
        numberReturnedCards++;
        this.style.boxShadow = "0px 0px 10px 4px rgba(224, 192, 136, 0.75)";
        this.querySelector(".flip-card-back").style.boxShadow = "0px 0px 3px 1px rgba(0, 255, 255, 0.97)";
        if (numberReturnedCards === 1) {
            firstCard = this;
            console.log(firstCard);
        }
        if (numberReturnedCards === 2) {
            secondCard = this;
            console.log(secondCard);
            checkMatch(firstCard, secondCard);
        }
    }
}


for (let i = 0; i < flipCardInner.length; i++) {
    flipCardInner[i].addEventListener("click", flipCard);
}

function checkMatch(firstCard, secondCard) {
    if (firstCard.querySelector(".flip-card-back").style.backgroundImage === secondCard.querySelector(".flip-card-back").style.backgroundImage) {
        numberReturnedCards = 0;
        firstCard.removeEventListener("click", flipCard);
        secondCard.removeEventListener("click", flipCard);
        firstCard.style.boxShadow = "0px 0px 15px 4px rgba(224, 192, 136, 0.75)";
        secondCard.style.boxShadow = "0px 0px 15px 4px rgba(224, 192, 136, 0.75)";

    } else {
        numberReturnedCards = 0;
        //++ temps;
        firstCard.style.transform = "rotateY(0deg)";
        firstCard.classList.remove("returned");
        firstCard.style.boxShadow = "0px 0px 15px 4px rgba(0, 0, 0, 0.75)";
        firstCard.querySelector(".flip-card-back").style.boxShadow = "none";
        secondCard.style.transform = "rotateY(0deg)";
        secondCard.classList.remove("returned");
        secondCard.style.boxShadow = "0px 0px 15px 4px rgba(0, 0, 0, 0.75)";
        secondCard.querySelector(".flip-card-back").style.boxShadow = "none";
    }


}







// if (this.classList.contains("returned")) {
// this.style.transform = "rotateY(0deg)";
// this.classList.remove("returned");
// numberReturnedCards = 0;
// this.style.boxShadow = "0px 0px 15px 4px rgba(0, 0, 0, 0.75)";
// this.querySelector(".flip-card-back").style.boxShadow = "none";

// } else