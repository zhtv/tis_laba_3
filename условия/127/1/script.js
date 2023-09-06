let day = 1;
if (day > 0 && day <= 10) {
	console.log('Первая декада');
} else if (day > 10 && day <= 20) {
	console.log('Вторая декада');
} else if (day > 20 && day <= 30) {
	console.log('Третья декада');
} else if (day == 31) {
	console.log('Четвёртая декада');
}