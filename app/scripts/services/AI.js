'use strict';

angular.module('ticTacToeApp').factory('AI', function(TicTacToeGame, BaseCase) {
	var minPlayer = 'X';
	var maxPlayer = 'O';

	return {

		cloneBoard: function(board) {
			return board.slice(0);
		},

		makeMove: function(move, player, board) {
			var newBoard = this.cloneBoard(board);
			// console.log(newBoard);
			if(newBoard[move] === '') {
				newBoard[move] = player;
				return newBoard;
			}else {
				return null;
			}
		},

		minValue: function(board) {
			if(BaseCase.checkWinner(maxPlayer, board)) {
				return 1;
			}else if(BaseCase.checkWinner(minPlayer, board)) {
				return -1;
			}else if(BaseCase.checkTie(board)) {
				return 0;
			}else {
				var bestMove = 100;
				var move = 0;
				for(var i=0; i < board.length; i++) {
					var newBoard = this.makeMove(i, minPlayer, board);
					if(newBoard) {
						var predictedMove = this.maxValue(newBoard);
						if(predictedMove < bestMove) {
							bestMove = predictedMove;
							move = i;
						}
					}
				}
				return bestMove;
			}
		},


		maxValue: function(board) {
			if(BaseCase.checkWinner(maxPlayer, board)) {
				return 1;
			}else if(BaseCase.checkWinner(minPlayer, board)) {
				return -1;
			}else if(BaseCase.checkTie(board)) {
				return 0;
			}else {
				var bestMove = -100;
				var move = 0;
				for(var i=0; i < board.length; i++) {
					var newBoard = this.makeMove(i, maxPlayer, board);
					if(newBoard) {
						var predictedMove = this.minValue(newBoard);
						if(predictedMove > bestMove) {
							bestMove = predictedMove;
							move = i;
						}
					}
				}
				return bestMove;
			}
		},

		findMove: function(board) {

			var bestMove = -100;
			var move = 0;

			for(var i=0; i < board.length; i++) {
				var newBoard = this.makeMove(i, maxPlayer, board);
				if(newBoard) {
					var predictedMove = this.minValue(newBoard, maxPlayer);
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

