const doc = document;

export function digitalClock(btnClock, btnPlay, btnStop){
	let clockTempo;
	doc.addEventListener('click', (e)=>{
		if(e.target.matches(btnPlay)){
			clockTempo = setInterval(()=>{
				let clockHour = new Date().toLocaleTimeString();
				doc.querySelector(btnClock).innerHTML = `<h3>${clockHour}</h3>`;
				e.target.disabled = true;
			},1000);
			
		};
		if(e.target.matches(btnStop)){
			clearInterval(clockTempo);
			doc.querySelector(btnClock).innerHTML = null;
			doc.querySelector(btnPlay).disabled = false;
		}
	});
};

export function alarmClock(sound, btnPlay, btnStop){
	let alarmTempo;
	const $alarm = doc.createElement('audio');
	$alarm.src = sound;
	doc.addEventListener('click', (e)=>{
		if(e.target.matches(btnPlay)){
			alarmTempo = setTimeout(()=>{
				$alarm.play();
				e.target.disabled = true;
			},2000);
		}
		if(e.target.matches(btnStop)){
			clearTimeout(alarmTempo);
			$alarm.pause();
			$alarm.currentTime = 0;
			doc.querySelector(btnPlay).disabled = false;
		}
	});
}

































