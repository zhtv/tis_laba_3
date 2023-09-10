function getParams(num) {
	let params = [];
	for (let i = 1; i <= num; i++) {
	  if (num % i === 0) {
		params.push(i);
	  }
	}
	return params;
  }
  