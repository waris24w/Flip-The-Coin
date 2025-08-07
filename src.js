const head = "heads.svg";
const tail = 'tails.svg';
let Heading = document.getElementById('heading');
let Img = document.getElementById('coin-img');
let Mybtn = document.getElementById('mybtn');
let myResult = document.getElementById('result');


Mybtn.onclick = function(){
	let isHead = Math.floor(Math.random() * 2);  // Generate new random number each click
	if (isHead == 1){
		Img.src = head;
		myResult.textContent = 'Head'
	}
	else{
		Img.src = tail;
		myResult.textContent = 'Tail'

	}


}