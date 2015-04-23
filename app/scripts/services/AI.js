'use strict';



//AI player service that computes the best possible move for the AI player based on all possible moves made by the human player
//uses minimax algorithm to compute all possible moves and selects the best move to minimize the upper bound of the human player's score for that move


angular.module('ticTacToeApp').factory('AI', function(TicTacToeGame, BaseCase) {
	//minplayer is the human and maxplayer is the AI
	//makes sure that the minimax gives the best move for the AI and not the human player
	var minPlayer = 'X';
	var maxPlayer = 'O';

	return {

		//returns copy of a board
		cloneBoard: function(board) {
			return board.slice(0);
		},

		//takes copy of board and if given move is available, makes move for given player
		//returns board with new move
		//if move is taken returns null
		makeMove: function(move, player, board) {
			var newBoard = this.cloneBoard(board);
			if(newBoard[move] === '') {
				newBoard[move] = player;
				return newBoard;
			}else {
				return null;
			}
		},

		//first checks to see if there is a winner or tie and if so will return a score based on the result of the game
		//simulates the moves of the human player and will select the option that will minimize the score for the AI player
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

		//again will test for a winner or tie game and break from the loop if those base cases are reached
		//if not will simulate moves for the AI player and will select the option that maximizes the score for that player
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

		//starts the recursive algorithm and once a move is found that minimizes the score for the human player will return that move
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

