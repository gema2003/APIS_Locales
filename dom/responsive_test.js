const doc = document;

export default function responsiveTester(form){
	const $form = doc.getElementById(form);
	let tester;

	doc.addEventListener('submit', (e)=>{
		if(e.target === $form){
			e.preventDefault();
			tester = window.open($form.direction.value, 'tester', 
				`innerWidth=${$form.width.value}, innerHeight=${$form.height.value}`);
		}
	});

	doc.addEventListener('click', (e)=>{
		if(e.target === $form.close)tester.close();
	});
}