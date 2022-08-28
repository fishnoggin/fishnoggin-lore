

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
		if (passkey == "shalogorot") {
			hid[i].style.visibility = 'visible';
		}
		if (passkey == "mageslayer" && hid[i].classList.contains("azmira")) {
			hid[i].style.visibility = 'visible';
		}
	}
}