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


    document.getElementById("days").innerHTML = "00";

    document.getElementById("hours").innerHTML = "00";

    document.getElementById("minutes").innerHTML = "00";

    document.getElementById("seconds").innerHTML = "00";


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


document.getElementById("days").innerHTML =
    String(days).padStart(2, "0");


document.getElementById("hours").innerHTML =
    String(hours).padStart(2, "0");


document.getElementById("minutes").innerHTML =
    String(minutes).padStart(2, "0");


document.getElementById("seconds").innerHTML =
    String(seconds).padStart(2, "0");


}

/* RUN COUNTDOWN */

updateCountdown();

setInterval(


updateCountdown,

1000


);

/* =========================================
OPEN INVITATION BUTTON
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
                "Music needs user interaction."
            );

        });


    /* HIDE HERO */

    document
        .querySelector(".hero")
        .classList
        .add("hide");


    /* CREATE PETALS */

    createPetals();


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

/* =========================================
FALLING PETALS
========================================= */

function createPetals() {


  const petals = document.getElementById("petals");


    /* Prevent duplicate petals */

    if (petals.children.length > 0) {

        return;

    }


    for (let i = 0; i < 25; i++) {


        /* Create image instead of div */

        const petal = document.createElement("img");


        /* Your uploaded petal image */

        petal.src = "petal.png";


        petal.classList.add("petal");


        /* Random horizontal position */

        petal.style.left = Math.random() * 100 + "%";


        /* Random size */

        petal.style.width =
            15 + Math.random() * 20 + "px";


        /* Random falling speed */

        petal.style.animationDuration =
            4 + Math.random() * 5 + "s";


        /* Random delay */

        petal.style.animationDelay =
            Math.random() * 3 + "s";


        petals.appendChild(petal);

    }


}
