function prostoe(number) {
	if (number <= 1) {
	  return false;
	}
	for (let i = 2; i < number; i++) {
	  if (number % i === 0) {
		return false;
	  }
	}
	return true;
  }
  let number = 17; // Здесь можно поменять число для проверки
  if (prostoe(number)) {
	console.log('Число простое');
  } else {
	console.log('Число не простое');
  }
  