const doc = document;

export default function slider() {
	const $nextBtn = doc.querySelector('.slider-btn .next');
	const $prevBtn = doc.querySelector('.slider-btn .prev');
	const $slides = doc.querySelectorAll('.slider-slide');
	let i = 0;

	doc.addEventListener('click', (e)=>{
		if(e.target === $prevBtn) {
			e.preventDefault();
			$slides[i].classList.remove('active');
			i--;

			if(i < 0) {
				i = $slides.length - 1;
			}

			$slides[i].classList.add('active');
		}

		if(e.target === $nextBtn) {
			e.preventDefault();
			$slides[i].classList.remove('active');
			i++;

			if(i >= $slides.length) {
				i = 0;
			}

			$slides[i].classList.add('active');
		}
	});
}