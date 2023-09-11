let arr = [1, 2, 3, 4, 5];
let sum = 0;

arr.forEach(function(elem) {
    elem = elem ** 2;
	sum += elem;
});

console.log(sum);