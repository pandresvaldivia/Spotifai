const root = document.querySelector(':root');
const $progressBar = document.getElementById('progressBar');
const $volume = document.getElementById('volume');

$progressBar.addEventListener('input', handleProgressBar);
$volume.addEventListener('input', handleVolume);

function getCssVar(variable) {
	return getComputedStyle(root).getPropertyValue(variable);
}

function setCssVar(variable, value) {
	root.style.setProperty(variable, value);
}

function handleProgressBar() {
	const progressValue = ($progressBar.value / $progressBar.max) * 100;

	setCssVar('--progress', `${progressValue}%`);
}

function handleVolume() {
	const volumeValue = ($volume.value / $volume.max) * 100;

	setCssVar('--volume', `${volumeValue}%`);
}
