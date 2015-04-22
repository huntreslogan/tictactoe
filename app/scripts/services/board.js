'use strict';

angular.module('ticTacToeApp').factory('TicTacToeGame', function(){
	// var minPlayer = 'X';
	// var maxPlayer = 'O';

	var newBoard = function() {
	return [
		'', '', '',
		'', '', '',
		'', '', ''
		];
	};

	var board = newBoard();

	var fillAt = function(pos) {
		return board[pos -1];
	};

	var winningRow = function(positions, player) {
		return fillAt(positions[0]) === player && fillAt(positions[1]) === player && fillAt(positions[2]) === player && fillAt(positions[0]) !== '';
	};

	return {
		fillAt: fillAt,

		moveAt: function(player, pos) {
			board[pos - 1] = player;
		},

		newGame: function() {
			board = newBoard();
		},

		gameWon: function(player) {
			var threeInRow = [
				[1,2,3], [4,5,6], [7,8,9], [1,5,9], [3,5,7], [1,4,7], [2,5,8], [3,6,9]
				];

			for(var i=0; i<threeInRow.length; i++) {
				if(winningRow(threeInRow[i], player)) {
					return true;
				}
			}
			return false;
		},

		checkTie: function(board) {

			for(var i=0; i < board.length; i++) {
				if(board[i] === '') {
					return false;
				}
			}
			return true;
		},

		gimmeBoard: function() {
			console.log(board);
			return board;
		}

		// cloneBoard: function(board) {
		// 	return board.slice(0);
		// },

		// makeMove: function(move, player, board) {
		// 	var newBoard = this.cloneBoard(board);
		// 	// console.log(newBoard);
		// 	if(newBoard[move] === '') {
		// 		newBoard[move] = player;
		// 		return newBoard;
		// 	}else {
		// 		return null;
		// 	}
		// },

		// minValue: function(board) {
		// 	if(this.gameWon(maxPlayer)) {
		// 		return 1;
		// 	}else if(this.gameWon(minPlayer)) {
		// 		return -1;
		// 	}else if(this.checkTie()) {
		// 		return 0;
		// 	}else {
		// 		var bestMove = 100;
		// 		var move = 0;
		// 		for(var i=0; i < board.length; i++) {
		// 			var newBoard = this.makeMove(i, minPlayer, board);
		// 			if(newBoard) {
		// 				var predictedMove = this.maxValue(newBoard);
		// 				if(predictedMove < bestMove) {
		// 					bestMove = predictedMove;
		// 					move = i;
		// 				}
		// 			}
		// 		}
		// 		return bestMove;
		// 	}
		// },

		// maxValue: function(board) {
		// 	if(this.gameWon(maxPlayer)) {
		// 		return 1;
		// 	}else if(this.gameWon(minPlayer)) {
		// 		return -1;
		// 	}else if(this.checkTie()) {
		// 		return 0;
		// 	}else {
		// 		var bestMove = -100;
		// 		var move = 0;
		// 		for(var i=0; i < board.length; i++) {
		// 			var newBoard = this.makeMove(i, maxPlayer, board);
		// 			if(newBoard) {
		// 				var predictedMove = this.minValue(newBoard);
		// 				if(predictedMove > bestMove) {
		// 					bestMove = predictedMove;
		// 					move = i;
		// 				}
		// 			}
		// 		}
		// 		return bestMove;
		// 	}
		// }



	};
});