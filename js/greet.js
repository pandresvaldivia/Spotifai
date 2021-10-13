const $greetContainer = document.querySelector('.greet-container');

document.addEventListener('DOMContentLoaded', function () {
	printGreet($greetContainer);
});

function printGreet(element) {
	let greet = '';
	let hour = new Date().getHours();

	if (hour < 12) {
		greet = 'Buenos días';
	} else if (hour < 19) {
		greet = 'Buenas tardes';
	} else {
		greet = 'Buenas noches';
	}

	element.innerText = greet;
}
