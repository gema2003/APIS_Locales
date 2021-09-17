const doc = document;
const wnw = window;

export default function responsiveMedia(id, mq, mbContent, dkContent){
	let breakpoint = wnw.matchMedia(mq);

	const responsive = (e)=>{
		if(e.matches){
			doc.getElementById(id).innerHTML = dkContent;
		}else {
			doc.getElementById(id).innerHTML = mbContent;
		}
	};
	breakpoint.addListener(responsive);
	responsive(breakpoint);
};