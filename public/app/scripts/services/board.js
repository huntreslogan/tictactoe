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

	//checks to see if a row or diagonal trio contains the same player symbol for each position
	var winningCombos = function(positions, player) {
		return fillAt(positions[0]) === player && fillAt(positions[1]) === player && fillAt(positions[2]) === player && fillAt(positions[0]) !== '';
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

		//given possible winning trios will loop through each and see if any have been achieved for a given player
		gameWon: function(player) {
			var threeInRow = [
				[0,1,2], [3,4,5], [6,7,8], [0,4,8], [2,4,6], [0,3,6], [1,4,7], [2,5,8]
				];

			for(var i=0; i<threeInRow.length; i++) {
				if(winningCombos(threeInRow[i], player)) {
					return true;
				}
			}
			return false;
		},

		//checks each spot on a given board to see if all position have been taken and if so returns true
		checkTie: function(board) {

			for(var i=0; i < board.length; i++) {
				if(board[i] === '') {
					return false;
				}
			}
			return true;
		},

		//returns current board state
		gimmeBoard: function() {
			console.log(board);
			return board;
		}

	};
});