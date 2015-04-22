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
		console.log(board[pos]);
		return board[pos];
	};

	var winningRow = function(positions, player) {
		return fillAt(positions[0]) === player && fillAt(positions[1]) === player && fillAt(positions[2]) === player && fillAt(positions[0]) !== '';
	};

	return {
		fillAt: fillAt,

		moveAt: function(player, pos) {
			board[pos] = player;
		},

		newGame: function() {
			board = newBoard();
		},

		gameWon: function(player) {
			var threeInRow = [
				[0,1,2], [3,4,5], [6,7,8], [0,4,8], [2,4,6], [0,3,6], [1,4,7], [2,5,8]
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