const synth = window.speechSynthesis;

// fill select box with voices
const voiceSelect = document.querySelector('#voice-select');

function addVoicesToSelect(){
    const voices = synth.getVoices();

    for (let i = 0; i < voices.length; i++){
        const option = document.createElement('option');
        option.textContent = `${voices[i].name}`;

        if(voices[i].default) {
            option.textContent += ' - DEFAULT';
        }
        option.setAttribute('data-lang', voices[i].lang);
        option.setAttribute('data-name', voices[i].name);
        voiceSelect.appendChild(option)
    }
}


// submit and have it speak
function onSubmit (e) {
    e.preventDefault();

    const textInput = document.querySelector('#text-input');

    const utterThis = new SpeechSynthesisUtterance(textInput.value);
    synth.speak(utterThis)
}

document.querySelector('#form').addEventListener('submit', onSubmit);

