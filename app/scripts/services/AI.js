'use strict';

angular.module('ticTacToeApp').factory('AI', function(TicTacToeGame) {
	// var minPlayer = 'X';
	var maxPlayer = 'O';

	return {
		findMove: function(board) {

			var bestMove = -100;
			var move = 0;

			for(var i=0; i < board.length; i++) {
				var newBoard = TicTacToeGame.makeMove(i, maxPlayer, board);
				if(newBoard) {
					var predictedMove = TicTacToeGame.minValue(newBoard, maxPlayer);
					if(predictedMove > bestMove) {
						bestMove = predictedMove;
						move = i;
					}
				}
			}
			console.log(move);
			return move;
		}
	};
});