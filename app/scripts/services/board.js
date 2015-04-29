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

	//returns the contents of a given board position
	var fillAt = function(pos) {
		return board[pos];
	};

	return {
		fillAt: fillAt,

		//places player symbol in given position on board
		moveAt: function(player, pos) {
			board[pos] = player;
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