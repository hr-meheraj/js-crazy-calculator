const result = document.querySelector("#result");
const btns = document.querySelectorAll("input[type='button']");
btns.forEach(btn => {
	btn.addEventListener("click", e => {
		const value = e.target.value;
		switch (value) {
			case '0':
			case '1':
			case '2':
			case '3':
			case '4':
			case '5':
			case '6':
			case '7':
			case '8':
			case '9':
			case '10':
			case '+':
			case '/':
			case '*':
			case '.':
			case '-':
			case '(':
			case ')':
				result.value += value;
				break;
			case 'C':
				result.value = "";
				break;
			case '=':
				if (result.value != "") {
					const myOutput = eval(result.value);
					result.value = myOutput;
				}
				break;
			case 'DEL':
				const slice = result.value.slice(0, -1);
				result.value = slice;
				break;
			default:
				console.log('hello')
		}
	})
});

//for Dark mode body color 
const circle = document.querySelector(".circle");
circle.addEventListener("click", () => {
	document.body.classList.toggle('bg-[#112233]');
})