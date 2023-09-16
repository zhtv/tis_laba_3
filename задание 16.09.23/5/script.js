let start = document.querySelector('#start');
if (start) {
	start.addEventListener('click', function() {
		let i = 100;
		setInterval(() => console.log(--i), 1000);
	});
	this.removeEventListener('click', func);
}