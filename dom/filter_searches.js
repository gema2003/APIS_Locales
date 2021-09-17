const doc = document;

export default function searchFilter(input, selector) {
	doc.addEventListener('keyup', (e)=>{
		if(e.target.matches(input)) {
			if(e.key === 'escape') {
				e.target = '';
			};
			doc.querySelectorAll(selector).forEach((el) =>
			el.textContent.toLowerCase().includes(e.target.value)
			? el.classList.remove('filter')
			: el.classList.add('filter')
			);
		};
	});
}