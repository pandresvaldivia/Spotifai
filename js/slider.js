const root = document.querySelector(':root');
const $slider = document.querySelector('.slider');

$slider.addEventListener('input', handleProgressBar);

function getCssVar(variable) {
	return getComputedStyle(root).getPropertyValue(variable);
}

function setCssVar(variable, value) {
	return root.style.setProperty(variable, value);
}

function handleProgressBar() {
	const progressValue = ($slider.value / $slider.max) * 100;

	setCssVar('--progress', `${progressValue}%`);
}
