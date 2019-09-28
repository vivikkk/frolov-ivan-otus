function sum(num1) {
	let result = num1;

	const addition = (num2) => {
		if (num2 === undefined) {
			return result;
		} else {
			result += num2;

			return addition;
		}
	};

	return addition;
}
