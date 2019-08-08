
let carre1 = document.getElementById("carre1")
let carre2 = document.getElementById("carre2")
let carre3 = document.getElementById("carre3")
let carre4 = document.getElementById("carre4")
let carre5 = document.getElementById("carre5")
let carre6 = document.getElementById("carre6")
let carre7 = document.getElementById("carre7")
let carre8 = document.getElementById("carre8")
let carre9 = document.getElementById("carre9")

let number = 0 

let cross = '<img class="image" src="ressources/red-cross-png-red-cross-png-file-2000.png">'
let circle = '<img class="image" src="ressources/1024px-Circle_-_black_simple.svg.png">'


function isplayed(element) {
	
	let isplayed1 = false
	let isplayed2 = false
	let isplayed3 = false
	let isplayed4 = false
	let isplayed5 = false
	let isplayed6 = false
	let isplayed7 = false
	let isplayed8 = false
	let isplayed9 = false

	if (element.target == carre1) {
 		if (isplayed1 == false) {
			isplayed1 = true; return false
		} else if ( isplayed1 == true ) { return true } } 

	if (element.target == carre2) {
 		if (isplayed7 == false) {
			isplayed7 = true; return false
		} else if ( isplayed2 == true ) { return true } } 

	if (element.target == carre3) {
 		if (isplayed3 == false) {
			isplayed3 = true; return false
		} else if ( isplayed3 == true ) { return true } } 

	if (element.target == carre4) {
 		if (isplayed4 == false) {
			isplayed4 = true; return false
		} else if ( isplayed4 == true ) { return true } } 

	if (element.target == carre5) {
 		if (isplayed5 == false) {
			isplayed5 = true; return false
		} else if ( isplayed5 == true ) { return true } } 

	if (element.target == carre6) {
 		if (isplayed6 == false) {
			isplayed6 = true; return false
		} else if ( isplayed6 == true ) { return true } } 

	if (element.target == carre7) {
 		if (isplayed7 == false) {
			isplayed7 = true; return false
		} else if ( isplayed7 == true ) { return true } } 

	if (element.target == carre8) {
 		if (isplayed8 == false) {
			isplayed8 = true; return false
		} else if ( isplayed8 == true ) { return true } } 

	if (element.target == carre9) {
 		if (isplayed9 == false) {
			isplayed9 = true; return false
		} else if ( isplayed9 == true ) { return true } } }



function reset() {
	carre1.innerHTML = ""
	carre2.innerHTML = ""
	carre3.innerHTML = ""
	carre4.innerHTML = ""
	carre5.innerHTML = ""
	carre6.innerHTML = ""
	carre7.innerHTML = ""
	carre8.innerHTML = ""
	carre9.innerHTML = ""
	number = 0;
}

function play(element) {
	
	if (number % 2 == 0) {
		element.target.innerHTML = cross
	} else {
		element.target.innerHTML = circle 
	}
	
	if (isplayed(element) == false) { number++ }
	if (number == 9) { reset() }
	if (number > 4  ) { gameOver()
	}
}





carre1.onclick = (element) => { play(element) }
carre2.onclick = (element) => { play(element) }
carre3.onclick = (element) => { play(element) }
carre4.onclick = (element) => { play(element) }
carre5.onclick = (element) => { play(element) }
carre6.onclick = (element) => { play(element) }
carre7.onclick = (element) => { play(element) }
carre8.onclick = (element) => { play(element) }
carre9.onclick = (element) => { play(element) }




function gameOver() {
	if (   carre1.innerHTML == carre2.innerHTML && carre1.innerHTML == carre3.innerHTML 	// 1 line
		|| carre1.innerHTML == carre4.innerHTML && carre1.innerHTML == carre7.innerHTML // 1 colone
		|| carre1.innerHTML == carre5.innerHTML && carre1.innerHTML == carre9.innerHTML // diagonnale 1
		|| carre2.innerHTML == carre5.innerHTML && carre2.innerHTML == carre8.innerHTML // 2 collone
		|| carre3.innerHTML == carre6.innerHTML && carre3.innerHTML == carre9.innerHTML // 3 collone
		|| carre3.innerHTML == carre5.innerHTML && carre3.innerHTML == carre7.innerHTML // 2 collones
		|| carre4.innerHTML == carre5.innerHTML && carre4.innerHTML == carre6.innerHTML	// 2 lignes
		|| carre7.innerHTML == carre8.innerHTML && carre7.innerHTML == carre9.innerHTML // 3 lignes
 


) { reset()}
	}
	






