

document.addEventListener("DOMContentLoaded", function(){
	updateVisibility();
});



function planesriftSetPasskey(newKey){
	localStorage.setItem("planesriftPasskey", newKey);
	logPasskey();
}

function planesriftPasskeyInput(){
	var input = document.getElementById('ppki').value;
  	planesriftSetPasskey(input);
  	window.location.href = 'planesrift/planesrift.html';
}

function updateVisibility(){
	hid = document.getElementsByClassName("hidden");
	passkey = localStorage.planesriftPasskey;
	for (var i = hid.length - 1; i >= 0; i--) {
		var tagType = hid[i].tagName.toLowerCase();
		var displayType;
		if (tagType == 'h1' || tagType == 'h2' || tagType == 'h3' || tagType == 'h4') {
			displayType = 'flex';
		}else{
			displayType = 'inherit';
		}
		if (passkey == "shalogorot") {
			hid[i].style.display = displayType;
		}
		if (passkey == "mageslayer" && hid[i].classList.contains("azmira")) {
			hid[i].style.display = displayType;
		}

		if (passkey == "Leroy Jankins" && hid[i].classList.contains("marwen")) {
			hid[i].style.display = displayType;
		}
	}
}