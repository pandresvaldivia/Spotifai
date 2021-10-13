const $layout = document.querySelector('.layout');

$layout.addEventListener('click', likeSong);

function likeSong(e) {
	if (e.target.classList.contains('icon-heart-active')) {
		e.target.parentElement.classList.toggle('is-like');
	}
}
