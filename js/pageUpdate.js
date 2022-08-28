

document.addEventListener("DOMContentLoaded", function(){
	loadFonts();
	console.log("pageload update complete!");
	logPasskey();
});

function loadFonts(){
	
	var fontSheet = '<link rel="stylesheet" href="https://use.typekit.net/cfj6fax.css">';
 
	document.head.innerHTML += fontSheet;
	
	console.log('fonts added!')
}

function logPasskey(){
	if(localStorage.planesriftPasskey){
		console.log("planesrift passkey set: " + localStorage.planesriftPasskey + " !");
	}else{
		console.log("no planesrift passkey found...")
	}
}