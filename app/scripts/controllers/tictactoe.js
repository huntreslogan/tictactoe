'use strict';

angular.module('ticTacToeApp')
  .controller('TicTacToeCtrl', function ($scope, Board, AI, GameOver) {

    var returnBoard = function() {
      return Board.gimmeBoard();
    };

    //checks to see if either player has won or if tie game and displays appropriate message
  	var checkWinner = function(player) {
      var currentBoard = returnBoard();
  		if(GameOver.checkWinner(player, currentBoard)) {
  			$scope.winner = player;
        $scope.isDisabled = true;
        $scope.letsPlay = 'go-time';
  		}else if(GameOver.checkTie(currentBoard) && (!$scope.winner)) {
        $scope.tie = 'It is a tie game.';
        $scope.letsPlay = 'go-time';
      }

  	};

    //checks to see if game has a winner and if not places player symbol in table position
    //checks for winner after symbol is placed in board
  	var moveAt = function(player, pos) {
      var currentBoard = returnBoard();
  		if(!$scope.winner) {
        currentBoard[pos] = player;
  			checkWinner(player);
  		}
  	};

    //checks to see if position on board is empty and if not places player move in position
    //AI then makes move in best possible position to minimize players maximum gain
    $scope.move = function(pos) {
      var currentBoard = returnBoard();
    	if(Board.fillAt(pos) === '') {
    	moveAt('X', pos);
    	moveAt('O', AI.findMove(currentBoard));
    	}
    };


    //clears board and sets winner and tie values to null
    $scope.newGame = function() {
    	Board.newGame();
    	$scope.winner = null;
      $scope.tie = null;
      $scope.letsPlay = '';
    };

    //returns contents of position in board
    $scope.fillAt = function(pos) {
    	return Board.fillAt(pos);
    };
  });