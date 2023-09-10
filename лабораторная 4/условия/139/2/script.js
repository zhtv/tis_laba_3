let num = 12345;
let last = String([num.length - 1]);

if (last == 0 || last == 2 || last == 4 || last == 6 || last == 8) {
	console.log('+++');
} else {
	console.log('---');
}