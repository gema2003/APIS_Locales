const doc = document;
const wnw = window;
const nua = navigator;

export default function networkStatus() {

	const isOnLine = () =>{
		const $div = doc.createElement('div');

		if(nua.onLine) {
			$div.textContent = 'Restated Connection 😃👍🔌'
			$div.classList.add('online');
			$div.classList.remove('offline');
		}else {
			$div.textContent = 'Lost Connection 😵👎🔌'
			$div.classList.add('offline');
			$div.classList.remove('online');
		}
		
		doc.body.insertAdjacentElement('afterbegin', $div);

		setTimeout(() => doc.body.removeChild($div),3000);
	}
	wnw.addEventListener('online', (e)=> isOnLine());
	wnw.addEventListener('offline', (e)=> isOnLine());
}





















