const doc = document;
const wnw = window;

export default function smartVideo() {
	const $videos = doc.querySelectorAll('video[data-smart-video]');

	const cb = (entries) =>{
		entries.forEach((entry)=>{
			if(entry.isIntersecting) {
				entry.target.play();
			}else {
				entry.target.pause();
			}

			wnw.addEventListener('visibilitychange', (e)=>
			doc.visibilityState === 'visible'
				? entry.target.play()
				: entry.target.pause()
			);
		});
	};

	const observer = new IntersectionObserver(cb, { rootMargin: "-250px" });

	$videos.forEach(el => observer.observe(el));
}