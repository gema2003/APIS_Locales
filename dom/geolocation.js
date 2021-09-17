const doc = document;
const nav = navigator;

export default function getGeolocation(id) {
	const $id = doc.getElementById(id);
	const options = {
		enableHighAccuracy:true,
		timeout:5000,
		maximumAge:0
	};

	const success = (position) =>{
		let coords = position.coords;
		$id.innerHTML = `
		<p>Your current position is:</p>
		<ul>
			<li>Latitude: <b>${coords.latitude}</b></li>
			<li>Longitude: <b>${coords.longitude}</b></li>
			<li>Precision: <b>${coords.accuracy}</b> metres</li>
		</ul>
		<a href="https://www.google.com/maps/@${coords.latitude}, ${coords.longitude}, 
		20z" target="_blank">See Google Maps</a>
		`;
		// console.log(position);
	};

	const error = (err) =>{
		$id.innerHTML = `<p>Erro: <mark>Erro ${err.code}: ${err.message}</mark></p>`
		// console.log(`Erro ${err.code}: ${err.message}`);
	};

	nav.geolocation.getCurrentPosition(success, error, options);
};





















