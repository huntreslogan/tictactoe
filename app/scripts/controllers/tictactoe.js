'use strict';

/**
 * @ngdoc function
 * @name ticTacToeApp.controller:TicTacToeCtrl
 * @description
 * # TicTacToeCtrl
 * Controller of the ticTacToeApp containing game logic
 */
angular.module('ticTacToeApp')
  .controller('TicTacToeCtrl', function ($scope, TicTacToeGame, AI) {

    //checks to see if either player has won or if tie game and displays appropriate message
  	var checkWinner = function(player) {
  		if(TicTacToeGame.gameWon(player)) {
  			$scope.winner = player;
        $scope.tie = null;
  		}else if(TicTacToeGame.checkTie(TicTacToeGame.gimmeBoard()) && (!$scope.winner)) {
        $scope.tie = 'It is a tie game.';
      }

  	};

    //checks to see if game has a winner and if not places player symbol in table position
    //checks for winner after symbol is placed in board
  	var moveAt = function(player, pos) {
  		if(!$scope.winner) {
  			TicTacToeGame.moveAt(player, pos);
  			checkWinner(player);
  		}
  	};

    //checks to see if position on board is empty and if not places player move in position
    //AI then makes move in best possible position to minimize players maximum gain
    $scope.move = function(pos) {
    	if(TicTacToeGame.fillAt(pos) === '') {
    	moveAt('X', pos);
    	moveAt('O', AI.findMove(TicTacToeGame.gimmeBoard()));
    	}
    };


    //clears board and sets winner and tie values to null
    $scope.newGame = function() {
    	TicTacToeGame.newGame();
    	$scope.winner = null;
      $scope.tie = null;
    };

    //returns contents of position in board
    $scope.fillAt = function(pos) {
    	return TicTacToeGame.fillAt(pos);
    };
  });