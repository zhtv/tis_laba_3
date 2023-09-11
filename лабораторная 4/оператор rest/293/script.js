function average(...numbers) {
    let sum = 0;
    for (let number of numbers) {
      sum += number;
    }
    return sum / numbers.length;
  }

  console.log(average(10, -20, 8, 15, -4));
  console.log(average(5, 8, 60)); 
  console.log(average(22, 9, 100, -7)); 
  