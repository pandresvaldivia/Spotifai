const $likeBtn = document.querySelector('.likeButton');

$likeBtn.addEventListener('click', likeSong);

function likeSong() {
	this.classList.toggle('is-like');
}
