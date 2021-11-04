console.log("Michel");
const table = [
    "img/boubouille.jpg", 
    "img/boubouille.jpg",
    "img/ganesh.jpg",
    "img/ganesh.jpg",
    "img/oreo.jpg",
    "img/oreo.jpg",
    "img/yoko.jpg",
    "img/yoko.jpg",
    "img/boubouille_2.jpg",
    "img/boubouille_2.jpg",
    "img/blue_eyed.jpeg",
    "img/blue_eyed.jpeg"
];

let deck = document.getElementById("deck");
let beginCard = '<div class="cards col col-4 col-lg-3 my-2"><div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front face"></div><div class="flip-card-back face" style="background-image: url(';
let endCard = ');"></div></div></div></div>';

for (let i = 0; i < 12; i++) {
    //deck.appendChild(oneCard);

    deck.innerHTML += beginCard + "'" + table[i] + "'" + endCard ;
    console.log(table[i]);
    
}
// .flip-card-back {