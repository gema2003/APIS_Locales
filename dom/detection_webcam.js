const doc = document;
const nav = navigator;

export default function webCam(id) {
	const $video = doc.getElementById(id);

	if(nav.mediaDevices.getUserMedia) {
		nav.mediaDevices
		.getUserMedia({video:true, audio:true})
		.then((strem) =>{
			// console.log(strem);
			$video.srcObject = strem;
			$video.play();
		})
		.catch((error) => {
			$video.insertAdjacentHTML('beforebegin', 
				`<p>The next mistake has happened:<mark>The user denied permission</mark></p>` );
			// console.log(`The next mistake has happened: ${error}`);
		});
	}
}




























