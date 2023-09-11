let arr = [, , 31];
function func() {
	return (new Date).getDate();
}
function func1() {
	return (new Date).getFullYear();
}
function func2() {
	return (new Date).getMonth();
}
let [year = func1(), month = func2(), day] = arr;
console.log (year)
console.log (month)
console.log (day)