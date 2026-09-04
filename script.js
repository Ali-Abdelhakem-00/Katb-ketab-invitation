/* =========================================
EVENT DATE
========================================= */

const eventDate = new Date(
"September 26, 2026 17:30:00"
).getTime();

/* =========================================
COUNTDOWN
========================================= */

function updateCountdown() {

 
const now = new Date().getTime();

const distance = eventDate - now;


/* EVENT HAS STARTED */

if (distance <= 0) {

    document.getElementById("days").textContent = "00";
    document.getElementById("hours").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";

    return;

}


const days = Math.floor(
    distance / (1000 * 60 * 60 * 24)
);


const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24))
    / (1000 * 60 * 60)
);


const minutes = Math.floor(
    (distance % (1000 * 60 * 60))
    / (1000 * 60)
);


const seconds = Math.floor(
    (distance % (1000 * 60))
    / 1000
);


document.getElementById("days").textContent =
    String(days).padStart(2, "0");


document.getElementById("hours").textContent =
    String(hours).padStart(2, "0");


document.getElementById("minutes").textContent =
    String(minutes).padStart(2, "0");


document.getElementById("seconds").textContent =
    String(seconds).padStart(2, "0");
 

}

/* START COUNTDOWN */

updateCountdown();

setInterval(updateCountdown, 1000);

/* =========================================
FALLING PETALS
========================================= */

function createPetals() {

 
const petalsContainer =
    document.getElementById("petals");


/* Prevent duplicate petals */

if (petalsContainer.children.length > 0) {

    return;

}


for (let i = 0; i < 25; i++) {

    const petal =
        document.createElement("img");


    /* PETAL IMAGE */

    petal.src = "petal.png";


    petal.classList.add("petal");


    /* RANDOM POSITION */

    petal.style.left =
        Math.random() * 100 + "%";


    /* RANDOM SIZE */

    petal.style.width =
        15 + Math.random() * 20 + "px";


    /* RANDOM FALLING SPEED */

    petal.style.animationDuration =
        4 + Math.random() * 5 + "s";


    /* RANDOM START DELAY */

    petal.style.animationDelay =
        Math.random() * 3 + "s";


    petalsContainer.appendChild(petal);

}
 

}

/* =========================================
OPEN INVITATION
========================================= */

const openBtn =
document.getElementById("openBtn");

const bgMusic =
document.getElementById("bgMusic");

openBtn.addEventListener(
"click",
function (e) {

 
    e.preventDefault();


    /* PLAY MUSIC */

    bgMusic.play()
        .catch(() => {

            console.log(
                "Music could not play."
            );

        });


    /* CREATE PETALS */

    createPetals();


    /* HIDE HERO */

    document
        .querySelector(".hero")
        .classList
        .add("hide");


    /* WAIT FOR ANIMATION */

    setTimeout(() => {

        document
            .querySelector(".hero")
            .style
            .display = "none";


        /* SCROLL TO INVITATION */

        document
            .getElementById("invitation")
            .scrollIntoView({

                behavior: "smooth"

            });


    }, 1500);

}
 

);
