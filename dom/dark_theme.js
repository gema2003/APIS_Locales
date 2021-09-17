const doc = document;
const lsg = localStorage;

export default function darkTheme(btn, classDark){
	const $themeBtn = doc.querySelector(btn);
	const $selector = doc.querySelectorAll('[data-dark]');
	let moon = '🌜';
	let sun = '🌞';

	const ligthMode = ()=>{
		$selector.forEach(el => el.classList.remove(classDark));
		$themeBtn.textContent = moon;
		lsg.setItem('theme', 'ligth'); 
	}
	const darkMode = ()=>{
		$selector.forEach(el => el.classList.add(classDark));
		$themeBtn.textContent = sun;
		lsg.setItem('theme', 'dark');
	}

	doc.addEventListener('click', (e)=>{
		if(e.target.matches(btn)) {
			// console.log($themeBtn.textContent);
			if($themeBtn.textContent === moon) {
			 	darkMode()
			}else {
				ligthMode();
			}
		}
	});

	doc.addEventListener('DOMContentLoaded', (e)=>{
		if(lsg.getItem('theme') === null)lsg.setItem('theme', 'ligth');
		if(lsg.getItem('theme') === 'ligth')ligthMode();
		if(lsg.getItem('theme') === 'dark')darkMode();
	});
}
























