// Table matching each ID to how the api should pronounce it 
const pronunciationTable = {
    identification = ["p", "b", "m", "f", "v", "th1", "th2", "t", "s", "d", "z", "n", "l", "r", "sh", "ch", "dg", "y", "k", "g", "w", "ng", "h"],
    pronunciation = ["puh", "buh", "mm", "ff", "vuh", "th", "the", "tuh", "ss", "duh", "zz", "nn", "ull", "ar", "sh", "ch", "juh", "yuh", "kuh", "guh", "wuh", "ng", "huh"]
}

// Initiate speech synthesis 
var synth = window.speechSynthesis;

// Add event listener to each button when page loads 
window.onload = () => {
    const buttons = document.querySelectorAll("button");
    for(const button of buttons) {
        button.addEventListener("click", speak());
    }
}

// Pronounce the desired sound based on the button's id 
function speak(event) {
    const target = event.target;
    const text = target.id;
    const ind = identification.findIndex(text);
    const pronounce = pronunciation[ind];
    var utterance = new SpeechSynthesisUtterance(pronounce);
    utterance.pitch = 1.2;
    utterance.rate = 1.1;
    synth.speak(utterance);
}