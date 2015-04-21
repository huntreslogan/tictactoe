'use strict';

angular.module('ticTacToeApp').factory('TicTacToeGame', function(){
	var board = [
		'', '', '',
		'', '', '',
		'', '', ''
	];

	var board = newBoard();

	var fillAt = function(pos) {
		return board[pos -1];
	};

	var winningRow = function(positions) {
		return fillAt(positions[0]) == fillAt(positions[1]) && fillAt(positions[1]) == fillAt(positions[2]) && fillAt(positions[0]) != ''
	};

	return {
		fillAt: fillAt,

		moveAt: function(player, pos) {
			board[pos - 1] = player;
		},

		newGame: function() {
			board = newBoard();
		},

		gameWon = function() {
			var threeInRow = [
				[1,2,3], [4,5,6], [7,8,9], [1,5,9], [3,5,7], [1,4,7], [2,5,8], [3,6,9]
				]

			for(var i=0; i<threeInRow.length; i++) {
				if(winningRow(threeInRow[i])) {
					return true;
				}
			}
			return false;
		}

	};
});