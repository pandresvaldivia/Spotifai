const $prevBtn = document.getElementById('prev');
const $next = document.getElementById('next');

$prevBtn.addEventListener('click', goBack);
$next.addEventListener('click', goForward);

blockButton('127.0.0.1:5500');

function goBack() {
	if (!$prevBtn.disabled) {
		window.history.back();
	}
}

function goForward() {
	window.history.forward();
}

function blockButton(url) {
	if (!document.referrer.includes(url)) {
		$prevBtn.disabled = true;
	} else {
		$prevBtn.disabled = false;
	}
}
