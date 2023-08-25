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
const TIMEOUT = 2000
function redirectWithTimeout(url){
	setTimeout(() => {
		window.location.replace(url);
	}, TIMEOUT);
}
const platform = getMobileOS();
const target = getQueryVariable();
common_url = "https://space.brothersproduction.ru/";
if (platform === "iOS") {
	if (target == "Theater"){
		redirectWithTimeout(common_url + "ar_iphone/theater.usdz");
	} else if (target == "Cube"){
		alert("Unimpleneted yet: " + platform + " " + target);
	} else if (target == "Pokaz"){
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


