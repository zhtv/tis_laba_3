function func(num) {
	let i = 0;
	while (true) {
		num = num / 2;
		if (num < 10) {
			i++;
			return i;
		}
		
		i++;
	}
}

console.log( func(100) );