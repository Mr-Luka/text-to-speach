const synth = window.speechSynthesis;

// fill select box with voices
const voiceSelect = document.querySelector('#voice-select');
let voices;

function addVoicesToSelect(){
     voices = synth.getVoices();

    for (let i = 0; i < voices.length; i++){
        const option = document.createElement('option');
        option.textContent = `${voices[i].name} - ${voices[i].lang}`;

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

    const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    for(let i = 0; i < voices.length; i++){
        if(voices[i].name === selectedOption){
            utterThis.voice = voices[i];
        }
    }

    synth.speak(utterThis)
}

addVoicesToSelect();
if(speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = addVoicesToSelect;
}

document.querySelector('#form').addEventListener('submit', onSubmit);

