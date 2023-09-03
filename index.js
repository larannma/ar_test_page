const concert_img = document.querySelector('.main__theatre');
const pokaz_img = document.querySelector('.main__pokaz');
const object_img = document.querySelector('.main__cube');

const highlightText = document.querySelector('.main__title-highlight');

const cube_usdz = document.querySelector('.cube-usdz');
const pokaz_usdz = document.querySelector('.pokaz-usdz');
const theatre_usdz = document.querySelector('.theatre-usdz');


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
	  console.log(countdown);
	  timerLabel.innerText = "0:0" + countdown
	  countdown--;
	  
	  setTimeout(updateCountdown, 1000);
	} else {
	  console.log("done");
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
} else if (target == "Cube"){
	object_img.hidden = false
	highlightText.classList.add("main__title-highlight-object");
} else if (target == "Theater"){
	concert_img.hidden = false
	highlightText.classList.add("main__title-highlight-concert");
}

common_url = "https://space.brothersproduction.ru/";
if (platform === "iOS") {
	if (target == "Theater"){
		theatre_usdz.hidden = false
		redirectWithTimeout(common_url + "ar_iphone/theater.usdz");
	} else if (target == "Cube"){
		cube_usdz.hidden = false
		alert("Unimpleneted yet: " + platform + " " + target);
	} else if (target == "Pokaz"){
		pokaz_usdz.hidden = false
		alert("Unimpleneted yet: " + platform + " " + target);
	}
} else if (platform === "Android"){
	if (target == "Theater"){
		alert("Unimpleneted yet: " + platform + " " + target);
	}else if (target == "Cube"){
		alert("Unimpleneted yet: " + platform + " " + target);
	}else if (target == "Pokaz"){
		alert("Unimpleneted yet: " + platform + " " + target);
	}
} else {
	alert("Wrong platform: " + platform + " " + target);
}


