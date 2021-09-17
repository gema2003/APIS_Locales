const doc = document;
const nav = navigator;
const nua = nav.userAgent;

export default function userDeviceInfo(id){
	const $id = doc.getElementById(id);

	const mobile = {
		android:()=> nua.match(/android/i),
		ios:()=> nua.match(/iphone|ipad|ipod/i),
		windows:()=> nua.match(/windows phone/i),
		any:function() {
			return this.android() || this.ios() || this.windows();
		}
	};

	const desktop = {
		linux:()=> nua.match(/linux/i),
		mac:()=> nua.match(/mac os/i),
		windows:()=> nua.match(/windows nt/i),
		any:function() {
			return this.linux() || this.mac() || this.windows();
		}
	};

	const browser = {
		chrome:()=> nua.match(/chrome/i),
		safari:()=> nua.match(/safari/i),
		firefox:()=> nua.match(/firefox/i),
		opera:()=> nua.match(/opera|opera mini/i),
		ie:()=> nua.match(/msie|iemobile/i),
		edge:()=> nua.match(/edge/i),
		any:function() {
			return this.chrome() || this.safari() || this.firefox() || this.opera() || this.ie() || this.edge();
		}
	};

	$id.innerHTML = `
		<ul>
			<li>User Agent: <b>${nua}</b></li>
			<li>Platform: <b>${mobile.any() ? mobile.any() : desktop.any()}</b></li>
			<li>Browser: <b>${browser.any()}</b></li>
		</ul>
	 `
	// Condicionando contenindo
	if(browser.safari()) {
		$id.innerHTML += `<p><mark>Content for Apple  Systems only</mark></p>`
	}else if (browser.firefox()) {
		$id.innerHTML += `<p><mark>Buy an Apple  Device for exclusive content</mark></p>`
	}

	// Redireccionando
	if(mobile.ios()) {
		window.location.href = 'https://gema2003.github.io/myFolder/'
	}

	// console.log(nua);
	// console.log(mobile.any());


}