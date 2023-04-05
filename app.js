let prev = document.getElementById("prev");
let next = document.getElementById("next");
let thumbnail = document.getElementsByClassName("thumbnail");
let hero = document.getElementById("hero");

let backgroundImg = new Array(
    "image/bg1.png",
    "image/bg2.png",
    "image/bg3.png",
    "image/bg4.png",
    "image/bg5.png",
);

let i = 0;
next.onclick = function () {
    if (i < backgroundImg.length - 1) {
        hero.style.backgroundImage = 'url("' + backgroundImg[i + 1] + '")';
        thumbnail[i + 1].classList.add("active");
        thumbnail[i].classList.remove("active");
        i++;
    }
}

prev.onclick = function () {
    if (i > 0) {
        hero.style.backgroundImage = 'url("' + backgroundImg[i - 1] + '")';
        thumbnail[i - 1].classList.add("active");
        thumbnail[i].classList.remove("active");
        i--;
    }
}