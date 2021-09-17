const doc = document;
const wnw = window;

export default function scrollTopButton(btn) {
 	const $scrollBtn = doc.querySelector(btn);

 	wnw.addEventListener('scroll', (e)=>{
 		let scrollTop = wnw.pageYOffset || doc.documentElement.scrollTop;

 		if(scrollTop > 400) {
 			$scrollBtn.classList.remove('hidden');
 		}else{
 			$scrollBtn.classList.add('hidden');
 		}
 	});

 	doc.addEventListener('click', (e)=>{
 		if(e.target.matches(btn)) {
 			wnw.scrollTo({
 				behavior: 'smooth',
 				top: 0,
 			});
 		};
 	});
};