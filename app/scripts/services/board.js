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




	};
});