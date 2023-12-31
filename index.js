const concert_img = document.querySelector('.main__theatre');
const pokaz_img = document.querySelector('.main__pokaz');
const object_img = document.querySelector('.main__cube');

const title = document.querySelector('.main__title');
const highlightText = document.querySelector('.main__title-highlight');

const cube_usdz = document.querySelector('.cube-usdz');
const pokaz_usdz = document.querySelector('.pokaz-usdz');
const theatre_usdz = document.querySelector('.theatre-usdz');

const timer = document.querySelector('.main__timer-value');
const timer_text = document.querySelector('.main__timer-title');


//название в уголочке
const pokaz_ribbon = document.getElementById('pokaz');
const theatre_ribbon = document.getElementById('concert');
const cube_ribbon = document.getElementById('object');

const getMobileOS = () => {
    const ua = navigator.userAgent
    if (/android/i.test(ua)) {
      return "Android"
    }
    else if ((/iPad|iPhone|iPod/.test(ua))
       || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)){
      return "iOS"
    }
    return "Other"
  }


function getQueryVariable() {
	return window.location.search.substring(1);
}

const timerLabel = document.querySelector('.main__timer-value');
let countdown = 3;


function updateCountdown() {
	if (countdown >= 0) {
	  timerLabel.innerText = "0:0" + countdown
	  countdown--;
	  
	  setTimeout(updateCountdown, 1000);
	} else {
	}
  }



const TIMEOUT = 3000
function redirectWithTimeout(url){
	
	setTimeout(() => {
		window.location.replace(url);
	}, TIMEOUT);
}

updateCountdown()

const platform = getMobileOS();
const target = getQueryVariable();
if (target == "Pokaz"){
	pokaz_img.hidden = false
	pokaz_ribbon.hidden = false;
} else if (target == "Cube"){
	object_img.hidden = false
	cube_ribbon.hidden = false
	highlightText.classList.add("main__title-highlight-object");
} else if (target == "Theater"){
	concert_img.hidden = false;
	theatre_ribbon.hidden = false;
	title.innerHTML = 'Садись на&nbsp;свободное&nbsp;место<p class="main__title-highlight">и&nbsp;запускай&nbsp;AR&nbsp;спектакль!</p>';
	highlightText.classList.add("main__title-highlight-concert");
}

common_url = "https://space.brothersproduction.ru/";
if (platform === "iOS") {
	if (target == "Theater"){
		theatre_usdz.hidden = false
	} else if (target == "Cube"){
		cube_usdz.hidden = false
	} else if (target == "Pokaz"){
		pokaz_usdz.hidden = false
	}
} else if (platform === "Android"){
	timer.hidden = false;
	timer_text.hidden = false;
	if (target == "Theater"){
		redirectWithTimeout("https://obuchash.8thwall.app/theatre");
	}else if (target == "Cube"){
		redirectWithTimeout("https://obuchash.8thwall.app/cube");
	}else if (target == "Pokaz"){
		redirectWithTimeout("https://obuchash.8thwall.app/pokaz/");
	}
} else {
	//alert("Wrong platform: " + platform + " " + target);
}
