'use strict';

document.addEventListener('DOMContentLoaded', () => {
	fetch('https://v6.exchangerate-api.com/v6/3b75513717b258598da70aca/pair/USD/BYN')
	.then(response => response.json())
	.then(response => {
		const exRate = response,
			  inputFirst = document.querySelector('[data-input-1]'),
			  inputSecond = document.querySelector('[data-input-2]');
		
		inputFirst.addEventListener('input', () => {
			inputSecond.value = (inputFirst.value * exRate.conversion_rate).toFixed(4);
		});

		inputSecond.addEventListener('input', () => {
			inputFirst.value = (inputSecond.value / exRate.conversion_rate).toFixed(4);
		});

		console.log(exRate);
	});
});