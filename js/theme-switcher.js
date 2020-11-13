let trans = () => {
	document.documentElement.classList.add('transition');
	window.setTimeout(() => {
		document.documentElement.classList.remove('transition')
	}, 1000)
}

function switch_theme() {
	let theme = document.documentElement.getAttribute('data-theme');
	let switcher = document.getElementById('switcher');
	if (theme == 'dark') {
		trans()
		document.documentElement.setAttribute('data-theme', 'light')
		document.getElementById("switcher-light").classList.add('hidden');
		document.getElementById("switcher-dark").classList.remove('hidden');
	} else {
		trans()
		document.documentElement.setAttribute('data-theme', 'dark')
		document.getElementById("switcher-dark").classList.add('hidden');
		document.getElementById("switcher-light").classList.remove('hidden');
	}
}


