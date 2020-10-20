var h3Tag = document.querySelector("h3");
var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var body = document.getElementById("gradient");
var butt = document.getElementById("butt");
var butt2 = document.getElementById("butt2");


butt.addEventListener("click", function() {
    alert("this is it");
})

var RNG= Math.random();
var RNG2 = Math.floor((RNG * 4) + 1);

butt2.addEventListener("click", function() {
	alert(RNG2);
})

color1.addEventListener("input", function() {
    body.style.background = 
	"linear-gradient(to top, "   
	+ color1.value 
	+ ", " 
	+ color2.value 
    + ")";
    
})

color2.addEventListener("input", function() {
    body.style.background = 
	"linear-gradient(to top, "   
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
})
