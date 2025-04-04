const apologyText = document.querySelector('.apology-container');
apologyText.style.opacity = 0;
let opacity = 0;

function fadeIn() {
    opacity += 0.01;
    apologyText.style.opacity = opacity;
    if (opacity < 1) {
        requestAnimationFrame(fadeIn);
    }
}

fadeIn();
