const WINNING_COMBINATION = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 4, 8],
	[2, 4, 6],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
];
export const checkWinner = array => {
	for (let combo in WINNING_COMBINATION) {
		WINNING_COMBINATION[combo].forEach(item => {
			if (arr[item[0]] === '' || arr[item[1]] === '' || arr[item[2]] === '') {
			} else if (arr[item[0]] === arr[item[1]] && arr[item[1]] === arr[item[2]]) {
			}
		});
	}
};
