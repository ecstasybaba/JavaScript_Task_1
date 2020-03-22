/* Stores my name into a variable myName */
let myName = document.getElementById('name');

/*Stores my courses into an Array myCourses */
let myCourses = ['Html', 'Css', 'JavaScript'];

/* Displays my name */
myName.innerHTML = "Emeka Oluwaseun JONAS";

/* Displays my courses */
for(let i = 0; i < myCourses.length; i++){
	document.write(myCourses[i] + '<br/> ');
}

/* Displays odd numbers from 1-200(inclusive) */
for(let i = 1; i <= 200; i++){
	if( i % 2 !== 0){
		document.write(i + '<br/> ');
	}
}


