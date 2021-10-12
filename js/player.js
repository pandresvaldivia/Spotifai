const $playBtn = document.getElementById('play-button');
const $audioPlayer = document.getElementById('audio');
const $audioLimit = document.getElementById('audio-limit');
const $audioCurrentTime = document.getElementById('audio-currentTime');

$playBtn.addEventListener('click', handleAudio);
$audioPlayer.addEventListener('loadedmetadata', setDuration);
$audioPlayer.addEventListener('loadedmetadata', printDuration);
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

function printDuration() {
	const minutes = parseInt($audioPlayer.duration / 60);
	const seconds = parseInt($audioPlayer.duration % 60).toLocaleString('en-US', {
		minimumIntegerDigits: 2,
		useGrouping: false,
	});
	$audioLimit.innerText = `${minutes}:${seconds}`;
}

function printCurrentTime() {
	const minutes = parseInt($audioPlayer.currentTime / 60);
	const seconds = parseInt($audioPlayer.currentTime % 60).toLocaleString(
		'en-US',
		{ minimumIntegerDigits: 2, useGrouping: false }
	);
	$audioCurrentTime.innerText = `${minutes}:${seconds}`;
}

function handleTimeUpdate() {
	$progressBar.value = $audioPlayer.currentTime;
	const progressValue = ($progressBar.value / $progressBar.max) * 100;

	setCssVar('--progress', `${progressValue}%`);
	printCurrentTime();
}

function handleProgressBar() {
	$audioPlayer.currentTime = $progressBar.value;
}
