let arr = [1, 2, 3, 0, 4, 5];

for (let elem of arr) {
	if (elem == 0) {
		console.log('есть');
		break; // выйдем из цикла
	}
}