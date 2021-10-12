// const $volume = document.getElementById('volume');

$volume.addEventListener('input', setVolume);

function setVolume() {
	$audioPlayer.volume = $volume.value / 100;
}
