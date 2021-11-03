// cache back et montre face
console.log("Michel");


// function hideAndShow() {
// console.log("Michel");
//     let faces = document.getElementsByClassName("face");
//     let backs = document.getElementsByClassName("back");
//     let cards = document.getElementsByClassName("cards");

//     console.log(faces);
//     console.log(backs);
//     console.log(cards);

// backs.classList.remove("hide");


// };
// hideAndShow();

document.getElementsByClassName("cards").addEventListener("click", function(e){
    e.preventdefault();
    let backs = document.getElementsByClassName("back");
    this.remove(backs);
});