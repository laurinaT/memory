// console.log("coucou toi");

// change the appearance on click

document.getElementById("pair_1_1").addEventListener("click", function(){

    let toHide = getElementById("pair_1_1");
    let toShow = getElementById("replace");
    toHide.classList.remove(toHide);
    toShow.classList.add(toShow);
    hideAndshow(toHide, toShow);
});


        