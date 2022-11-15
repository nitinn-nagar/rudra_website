const btn = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');
const menu = document.getElementById('mobile-menu');


btn.addEventListener('click', () => {
    console.log("ham was clicked");
    btn.classList.toggle('open');
    overlay.classList.toggle('overlay-show');
    document.body.classList.toggle('stop-scrolling');
    menu.classList.toggle('show-menu');
});


const inputs = document.querySelectorAll(".input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
});

//based on an Example by @curran
window.requestAnimFrame = (function() { return window.requestAnimationFrame })();
var canvas = document.getElementById("space");
var c = canvas.getContext("2d");

var numStars = 1900;
var radius = '0.' + Math.floor(Math.random() * 9) + 1;
var focalLength = canvas.width * 2;
var warp = 0;
var centerX, centerY;

var stars = [],
    star;
var i;

var animate = true;

initializeStars();

function executeFrame() {

    if (animate)
        requestAnimFrame(executeFrame);
    moveStars();
    drawStars();
}

function initializeStars() {
    centerX = canvas.width / 2;
    centerY = canvas.height / 2;

    stars = [];
    for (i = 0; i < numStars; i++) {
        star = {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            z: Math.random() * canvas.width,
            o: '0.' + Math.floor(Math.random() * 99) + 1
        };
        stars.push(star);
    }
}

function moveStars() {
    for (i = 0; i < numStars; i++) {
        star = stars[i];
        star.z--;

        if (star.z <= 0) {
            star.z = canvas.width;
        }
    }
}

function drawStars() {
    var pixelX, pixelY, pixelRadius;

    // Resize to the screen
    if (canvas.width != window.innerWidth || canvas.width != window.innerWidth) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        initializeStars();
    }
    if (warp == 0) {
        c.fillStyle = "rgba(0,10,20,1)";
        c.fillRect(0, 0, canvas.width, canvas.height);
    }
    c.fillStyle = "rgba(209, 255, 255, " + radius + ")";
    for (i = 0; i < numStars; i++) {
        star = stars[i];

        pixelX = (star.x - centerX) * (focalLength / star.z);
        pixelX += centerX;
        pixelY = (star.y - centerY) * (focalLength / star.z);
        pixelY += centerY;
        pixelRadius = 1 * (focalLength / star.z);

        c.fillRect(pixelX, pixelY, pixelRadius, pixelRadius);
        c.fillStyle = "rgba(209, 255, 255, " + star.o + ")";
        //c.fill();
    }
}
var canvas = document.getElementById('space');
var heightRatio = 1.5;
canvas.height = canvas.width * heightRatio;

document.getElementById('warp').addEventListener("click", function(e) {
    window.warp = window.warp == 1 ? 0 : 1;
    window.c.clearRect(0, 0, window.canvas.width, window.canvas.height);
    executeFrame();
});

executeFrame();


$('.team-slider').owlCarousel({
    loop: true,
    nav: false,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 450,
    margin: 20,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        991: {
            items: 3
        },
        1200: {
            items: 3
        },
        1920: {
            items: 3
        },

    }
});