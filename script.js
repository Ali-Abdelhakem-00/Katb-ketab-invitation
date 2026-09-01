const eventDate = new Date("September 26, 2026 17:30:00").getTime();

setInterval(function () {

    const now = new Date().getTime();

    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

}, 1000);
const openBtn = document.getElementById("openBtn");
const bgMusic = document.getElementById("bgMusic");

openBtn.addEventListener("click", function (e) {

    e.preventDefault();

    bgMusic.play();

    document.querySelector(".hero").classList.add("hide");

    setTimeout(() => {

    document.querySelector(".hero").style.display = "none";

    document.body.style.overflow = "auto";

    document.getElementById("invitation").scrollIntoView({
        behavior: "smooth"
    });

},1800);
});
const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

});

hiddenElements.forEach(el => observer.observe(el));
function createPetals(){

    const petals = document.getElementById("petals");

    for(let i = 0; i < 35; i++){

        const petal = document.createElement("div");

        petal.classList.add("petal");

        petal.style.left = Math.random() * 100 + "%";

        petal.style.animationDuration =
        (3 + Math.random() * 4) + "s";

        petal.style.animationDelay =
        Math.random() * 2 + "s";

        petals.appendChild(petal);

    }
}


openBtn.addEventListener("click", function(){

    createPetals();

});
