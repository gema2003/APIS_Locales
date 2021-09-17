const doc = document;
let x = 0;
let y = 0;

export function moveBall(e, ball, stage) {
	const $ball = doc.querySelector(ball);
	const $stage = doc.querySelector(stage);
	const limitsBall = $ball.getBoundingClientRect();
	const limitsStage = $stage.getBoundingClientRect();
	// console.log(e.keyCode);
	// console.log(e.key);
	// console.log(limitsBall, limitsStage);

	switch(e.keyCode){
		case 37:
			if(limitsBall.left > limitsStage.left){
				e.preventDefault();
				x--;
			}
			break
		case 38:
			
			if(limitsBall.top > limitsStage.top){
				e.preventDefault();
				y--;
			}
			break
		case 39:
			if(limitsBall.right < limitsStage.right){
				e.preventDefault();
				x++;
			}
			break
		case 40:
			if(limitsBall.bottom < limitsStage.bottom){
				e.preventDefault();
				y++;
			}
			break
		default:
			break
	}
	$ball.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
}

export function shortcuts(e){

	if(e.key === 'q' && e.ctrlKey && e.altKey){
		alert('🤔 R U Ready to go?');
	}
	if(e.key === 'a' && e.ctrlKey && e.altKey){
		confirm('😃👍 I m Ready to go!!!');
	}
	if(e.key === 'p' && e.ctrlKey && e.altKey){
		prompt('📟 Insert your Code');
	}
}