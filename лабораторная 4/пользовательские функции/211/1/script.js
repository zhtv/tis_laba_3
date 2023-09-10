function isChetni(arr) {
	for (let elem of arr) {
		if (elem % 2 != 0) {
			return false;
		}
	}
	return true;
}
console.log(isChetni([2, 4, 6]));
console.log(isChetni([2, 3, 4]));