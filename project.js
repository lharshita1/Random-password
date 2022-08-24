// Bingo! it is working!!! 

// date: 23-05-2022


let pass1El= document.getElementById("pass1")
let pass2El= document.getElementById("pass2")
let pass3El= document.getElementById("pass3")
let pass4El= document.getElementById("pass4")

let pass;


function getPass(){
	const vowels = []
	for (let i = 1; i <= 15; i++) {
	
		let values = Math.floor(Math.random()*93)+33
		let letter = String.fromCharCode(values);
		vowels.push(letter);
		//vowels[values]
		//let vowels.push(String.fromCharCode(values))
	
    }
 pass=vowels.join('')
return pass;
		
}

function getPassel(){
pass1El.textContent = getPass();
pass2El.textContent = getPass();
pass3El.textContent = getPass();
pass4El.textContent = getPass();
}