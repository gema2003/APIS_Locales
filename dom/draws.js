const doc = document;

export default function draw(btn, selector) {

	const getWinner = (selector) =>{

		const $players = doc.querySelectorAll(selector);
		const random = Math.floor(Math.random() * $players.length);
		const winner = $players[random];

		// console.log($players, random, winner);

		return `The winner is: 👩🏼‍💻 "${winner.textContent}"`;
	};

	// getWinner(clases, ids, span etc... del codigo);

	doc.addEventListener('click', (e)=>{
		if(e.target.matches(btn)) {
			let result = getWinner(selector);
			alert(result)
			// console.log(result);
		}
	});
};