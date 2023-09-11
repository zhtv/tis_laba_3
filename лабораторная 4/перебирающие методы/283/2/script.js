let arr = [1, 2, 3, 4, 5];

let check = arr.some((elem, index) => elem * index > 30);
console.log(check);