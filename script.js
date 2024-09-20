const synth = window.speechSynthesis;

// submit and have it speak
function onSubmit (e) {
    e.preventDefault();

    const textInput = document.querySelector('#text-input');

    const utterThis = new SpeechSynthesisUtterance(textInput.value);
    synth.speak(utterThis)
}

document.querySelector('#form').addEventListener('submit', onSubmit);

// fill select box with voices