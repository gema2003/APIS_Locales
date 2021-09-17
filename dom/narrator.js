const doc = document;
const wnw = window;

export default function speechReader() {
	const $speechSelect = doc.getElementById('speech-select');
	const $speechText = doc.getElementById('speech-text');
	const $speechBtn = doc.getElementById('speech-btn');
	const speechMessage = new SpeechSynthesisUtterance();

	// console.log(speechMessage);

	let voices = wnw.speechSynthesis.getVoices();

	doc.addEventListener('DOMContentLoaded', (e)=>{
		// console.log(voices);
		voices.forEach(voice =>{
			const $option = doc.createElement('option');
			$option.value = voice.name;
			$option.textContent = `${voice.name} - ${voice.lang}`;
			$speechSelect.appendChild($option);
		});
	});

	doc.addEventListener('change', (e)=>{
		if(e.target === $speechSelect) {
			speechMessage.voice = voices.find(voice => voice.name === e.target.value);
		}
		// console.log(speechMessage);
	});

	doc.addEventListener('click', (e)=>{
		if(e.target === $speechBtn) {
			speechMessage.text = $speechText.value;
			wnw.speechSynthesis.speak(speechMessage);
		}
	});

	
}