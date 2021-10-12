const $volumeBtn = document.getElementById('volume-button');
let currentVolume;

$volume.addEventListener('input', setVolume);
$volumeBtn.addEventListener('click', handleVolume);

function setVolume() {
	$audioPlayer.volume = $volume.value / 100;

	if ($audioPlayer.volume === 0) {
		$volumeBtn.className = 'player-control is-mute';
	} else if ($audioPlayer.volume <= 0.25) {
		$volumeBtn.className = 'player-control is-low';
	} else if ($audioPlayer.volume <= 0.5) {
		$volumeBtn.className = 'player-control is-normal';
	} else {
		$volumeBtn.className = 'player-control';
	}
}

function handleVolume() {
	const isMute = this.classList.toggle('is-mute');

	if (isMute) {
		currentVolume = $audioPlayer.volume;
		$audioPlayer.volume = 0;
	} else {
		$audioPlayer.volume = currentVolume;
	}
}
