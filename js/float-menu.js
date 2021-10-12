const $profileBtn = document.querySelector('.profile');

$profileBtn.addEventListener('click', showMenu);

function showMenu(e) {
	const isOpen = this.classList.toggle('is-open');

	this.ariaChecked = isOpen ? 'true' : 'false';
}
