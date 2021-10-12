const $playBtn = document.getElementById('play-button');
const $audioPlayer = document.getElementById('audio');
// const $progressBar = document.getElementById('progressBar');

$playBtn.addEventListener('click', handleAudio);
$audioPlayer.addEventListener('loadedmetadata', setDuration);
$audioPlayer.addEventListener('timeupdate', handleTimeUpdate);
$progressBar.addEventListener('input', handleProgressBar);

function handleAudio() {
	const isActive = this.classList.toggle('is-active');

	if (isActive) {
		$audioPlayer.play();
		this.ariaChecked = 'true';
	} else {
		$audioPlayer.pause();
		this.ariaChecked = 'false';
	}
}

function setDuration() {
	progressBar.max = $audioPlayer.duration;
}

function handleTimeUpdate() {
	$progressBar.value = $audioPlayer.currentTime;
	const progressValue = ($progressBar.value / $progressBar.max) * 100;

	setCssVar('--progress', `${progressValue}%`);
}

function handleProgressBar() {
	$audioPlayer.currentTime = $progressBar.value;
}
