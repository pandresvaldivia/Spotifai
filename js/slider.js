const root = document.querySelector(':root');
const $progressBar = document.getElementById('progressBar');
const $volume = document.getElementById('volume');

$progressBar.addEventListener('input', printProgressBar);
$volume.addEventListener('input', printVolume);

function getCssVar(variable) {
	return getComputedStyle(root).getPropertyValue(variable);
}

function setCssVar(variable, value) {
	root.style.setProperty(variable, value);
}

function printProgressBar() {
	const progressValue = ($progressBar.value / $progressBar.max) * 100;

	setCssVar('--progress', `${progressValue}%`);
}

function printVolume() {
	const volumeValue = ($volume.value / $volume.max) * 100;

	setCssVar('--volume', `${volumeValue}%`);
}
