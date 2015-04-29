'use strict';


//service that tests to see if the game is over
//the first method sees if a given player has won based on the state of a given board
//the second method tests to see if all spaces have been taken
//the recursive minimax functions use these methods to test if a basecase has been met and if so will break out of the loop


angular.module('ticTacToeApp').factory('GameOver', function() {
	return {
		checkWinner: function(player, board) {
			if((board[0] === player && board[1] === player && board[2] === player) || (board[3] === player && board[4] === player && board[5] === player) || (board[6] === player && board[7] === player && board[8] === player) || (board[0] === player && board[3] === player && board[6] === player) || (board[1] === player && board[4] === player && board[7] === player) || (board[2] === player && board[5] === player && board[8] === player) || (board[0] === player && board[4] === player && board[8] === player) || (board[2] === player && board[4] === player && board[6] === player)
				) {
				return true;
			} else {
				return false;
			}
		},

		checkTie: function(board) {
			for(var i=0; i < board.length; i++) {
				if(board[i] === '') {
					return false;
				}
			}
			return true;
		}

	};

});