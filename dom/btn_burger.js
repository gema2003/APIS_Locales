export default function hamburgerMenu(btn, panel, links, link){
	const doc = document;

	doc.addEventListener('click', (e)=>{
		if(e.target.matches(btn) || e.target.matches(`${btn} *`)){
			doc.querySelector(panel).classList.toggle('open');
			doc.querySelector(btn).classList.toggle('open');
			doc.querySelectorAll(links).forEach((el) =>{
				if(e.target.matches(btn) || e.target.matches(`${btn} *`)){
					el.classList.toggle('fade');
				};
			});
		};
		if(e.target.matches(link)){
			doc.querySelector(panel).classList.remove('open');
			doc.querySelector(btn).classList.remove('open');
			doc.querySelectorAll(links).forEach((el) =>{
				if(e.target.matches(btn) || e.target.matches(`${btn} *`) || e.target.matches(link)){
					el.classList.remove('fade');
				};
			});
		}
	});
	
};
