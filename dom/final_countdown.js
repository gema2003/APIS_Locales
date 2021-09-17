const doc = document;

export default function countdown(id, limitDate, finalMessage){
	const $countdown = document.getElementById(id);
	const date = new Date(limitDate).getTime();

	let countdownTempo = setInterval(()=> {
		let now = new Date().getTime();

		let limit = date - now, 
		days = Math.floor(limit/(1000*60*60*24)),
		hours = ('0'+Math.floor((limit % (1000*60*60*24))/(1000*60*60))).slice(-2),
		minutes = ('0'+Math.floor((limit % (1000*60*60))/(1000*60))).slice(-2),
		seconds = ('0'+Math.floor((limit % (1000*60))/(1000))).slice(-2);

		$countdown.innerHTML = `<h2>Missing BD: ${days} days ${hours} 
		hours ${minutes} minutes ${seconds} seconds</h2>`;

		if(limit < 0){
			clearInterval(countdownTempo);
			$countdown.innerHTML = `<h2>${finalMessage}</h2>`;
		}

	},1000);
}

















