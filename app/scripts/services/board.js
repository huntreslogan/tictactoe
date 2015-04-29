'use strict';


//service that creates the game board and handles the UI for the game


angular.module('ticTacToeApp').factory('TicTacToeGame', function(){

	//creates empty board
	var newBoard = function() {
	return [
		'', '', '',
		'', '', '',
		'', '', ''
		];
	};

	var board = newBoard();

	return {

		//returns the contents of a given board position
		fillAt: function(pos) {
			return board[pos];
		},

		newGame: function() {
			board = newBoard();
		},

		//returns current board state
		gimmeBoard: function() {
			console.log(board);
			return board;
		}

	};
});