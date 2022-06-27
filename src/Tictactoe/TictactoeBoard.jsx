import { useState } from 'react';
import { Button } from '@mantine/core';
import classes from './board.module.css';

const TictactoeBoard = () => {
	const randomPlayer = ['X', 'O'];
	const random = randomPlayer[Math.floor(Math.random() * randomPlayer.length)];
	const [player, setPlayer] = useState(random);
	const [winner, setWinner] = useState();
	const [draw, setDraw] = useState(false);

	const [box, setBox] = useState(Array(9).fill(''));
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
	const checkWinner = arr => {
		WINNING_COMBINATION.forEach(item => {
			if (arr[item[0]] === '' || arr[item[1]] === '' || arr[item[2]] === '') {
			} else if (arr[item[0]] === arr[item[1]] && arr[item[1]] === arr[item[2]]) {
				setWinner(arr[item[0]]);
			}
		});
	};

	const changeHandler = num => {
		const allValues = [...box];
		if (allValues[num] !== '') {
			console.log('You clicked it already');
			return;
		}

		if (player === 'X') {
			allValues[num] = 'X';
			setPlayer('O');
		} else {
			allValues[num] = 'O';
			setPlayer('X');
		}
		if (winner) {
			return;
		}

		checkWinner(allValues);
		setBox(allValues);
	};

	const Item = ({ num }) => {
		return (
			<div className={classes.item} onClick={() => changeHandler(num)}>
				{box[num]}
			</div>
		);
	};
	return (
		<div className={classes.main}>
			<h1 style={{ textAlign: 'center', fontFamily: 'inherit' }}>Tic Tac Toe</h1>
			{!winner && (
				<h2 style={{ textAlign: 'center', fontFamily: 'inherit' }}>
					Player turn: {player}
				</h2>
			)}
			<div className={classes.board}>
				<Item num={0} />
				<Item num={1} />
				<Item num={2} />
				<Item num={3} />
				<Item num={4} />
				<Item num={5} />
				<Item num={6} />
				<Item num={7} />
				<Item num={8} />
			</div>
			{winner && (
				<h2 style={{ textAlign: 'center', fontFamily: 'inherit' }}>
					Winner : {winner} wins
				</h2>
			)}
			{draw && <p>The game was draw</p>}
			<Button
				className={classes.btn}
				onClick={() => {
					setWinner(null);
					setBox(Array(9).fill(''));
				}}
			>
				Replay the game
			</Button>
		</div>
	);
};
export default TictactoeBoard;
