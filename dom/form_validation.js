const doc = document;

export default function contactFormValidation() {
	const $form = doc.querySelector('.contact-form');
	const $inputs = doc.querySelectorAll('.contact-form [required]');
	// console.log($inputs);

	$inputs.forEach((input) =>{
		const $span = doc.createElement('span');
		$span.id = input.name;
		$span.textContent = input.title;
		$span.classList.add('contact-form-error', 'none');
		input.insertAdjacentElement('afterend', $span);
	});

	doc.addEventListener('keyup', (e)=>{
		if(e.target.matches('.contact-form [required]')) {
			let $input = e.target;
			let pattern = $input.pattern || $input.dataset.pattern;

			// console.log($input, pattern)

			if(pattern && $input.value !== '') {
				// console.log('tiene patron');
				let regex = new RegExp(pattern);
				return !regex.exec($input.value)
					? doc.getElementById($input.name).classList.add('is-active')
					: doc.getElementById($input.name).classList.remove('is-active');
			};

			if(!pattern) {
				// console.log('no tiene patron');
				return $input.value === ''
					? doc.getElementById($input.name).classList.add('is-active')
					: doc.getElementById($input.name).classList.remove('is-active');
			}
		}
	});

	doc.addEventListener('submit', (e)=>{
		// e.preventDefault();
		confirm('Do you want to send this information?');
		const $loader = doc.querySelector('.cantact-form-loader');
		const $response = doc.querySelector('.contact-form-response');

		$loader.classList.remove('none');

		setTimeout(() =>{
			$loader.classList.add('none');
			$response.classList.remove('none');
			$form.reset();
			setTimeout(()=> $response.classList.add('none'), 2000);
		},3000);
	});
}








