window.onload = function() {
    document.body.classList.add('barrel-roll');
    setTimeout(() => {
        document.body.classList.remove('barrel-roll');
    }, 5000); // Duration of the animation in milliseconds
}
