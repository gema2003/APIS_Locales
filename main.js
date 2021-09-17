
import hamburgerMenu from './dom/btn_burger.js';
import { digitalClock, alarmClock } from './dom/clock.js';
import { shortcuts, moveBall } from './dom/keyboard.js';
import countdown from './dom/final_countdown.js';
import scrollTopButton from './dom/button_scroll.js';
import darkTheme from './dom/dark_theme.js';
import responsiveMedia from './dom/object_responsive.js';
import responsiveTester from './dom/responsive_test.js';
import userDeviceInfo from './dom/detection_devices.js';
import networkStatus from './dom/network_detection.js';
import webCam from './dom/detection_webcam.js';
import getGeolocation from './dom/geolocation.js';
import searchFilter from './dom/filter_searches.js';
import draw from './dom/draws.js';
import slider from './dom/carousel.js';
import scrollSpy from './dom/scroll_spy.js';
import smartVideo from './dom/smart_video.js';
import contactFormValidation from './dom/form_validation.js';
import speechReader from './dom/narrator.js';

const doc = document;

doc.addEventListener('DOMContentLoaded', (e)=>{
	hamburgerMenu('.nav-toggle', '.nav-link', 'li', 'a');
	digitalClock('#clock', '#activate-clock', '#turnoff-clock');
	alarmClock('./assets/chainsmokers.m4r', '#activate-alarm', '#turnoff-alarm');
	countdown('countdown', 'July 07,2022 00:00:00', 'Happy Birthday 🤓 🎂🎉🎊 Gema López!!!');
	scrollTopButton('.scroll-top-btn');
	responsiveMedia('youtube', '(min-width: 1024px)', `<a href="https://www.youtube.com/watch?v=svnE-eQVtPM" target="_blank">E-Type - Angels Crying</a> / `, 
		`<iframe width="560" height="315" src="https://www.youtube.com/embed/svnE-eQVtPM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
	responsiveMedia('gmaps', '(min-width: 1024px)', '/ <a href="https://goo.gl/maps/WxB997JrDuFH5ZYL7" target="_blank">Watch Map(Reforma, Guatemala)</a>', 
		'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.9699153879305!2d-90.51804544984975!3d14.600789689752288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8589a3cfe50851dd%3A0x88feb91d04fba381!2sReforma%20Mont%C3%BAfar%2C%20Avenida%20La%20Reforma%2012-01%2C%20Cdad.%20de%20Guatemala!5e0!3m2!1ses!2sgt!4v1618369687986!5m2!1ses!2sgt" width="480" height="315" style="border:0;" allowfullscreen="" loading="lazy"></iframe>');
	responsiveTester('responsive-tester');
	userDeviceInfo('user-device');
	webCam('webcam');
	getGeolocation('geolocation');
	searchFilter('.card-filter', '.card');
	draw('#winner-btn', '.player');
	slider();
	scrollSpy();
	smartVideo();
	contactFormValidation();

});

doc.addEventListener('keydown', (e)=>{
	shortcuts(e);
	moveBall(e, '.ball', '.stage');
})

darkTheme('.dark-theme-btn', 'dark-mode');
networkStatus();
speechReader();








