const buttons = document.querySelectorAll("div[class='key']");

function playAudio(e) {
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    let div = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if(!audio) return;
    if(!div) return;

    div.classList.add("playing");

    audio.currentTime = 0;
    audio.play();

}

function removeClass() {
    this.classList.remove("playing");
}

window.addEventListener("keydown", playAudio);
buttons.forEach(button => button.addEventListener("transitionend", removeClass));