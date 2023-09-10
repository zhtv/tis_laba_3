let num = 22;
if (num >= 10 && num <= 99) {
    let sum = Number(String(num)[0]) + Number(String(num)[1]);
	alert(sum);
        if (sum <= 9) {
            alert('Сумма цифр однозначна');
        } else {
    alert('Сумма цифр двузначна');
}}