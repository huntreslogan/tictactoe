'use strict';

/**
 * @ngdoc function
 * @name ticTacToeApp.controller:TicTacToeCtrl
 * @description
 * # TicTacToeCtrl
 * Controller of the ticTacToeApp
 */
angular.module('ticTacToeApp')
  .controller('TicTacToeCtrl', function ($scope, TicTacToeGame, AI) {

  	var checkWinner = function(player) {
  		if(TicTacToeGame.gameWon(player)) {
  			$scope.winner = player;
  		}else if(TicTacToeGame.checkTie(TicTacToeGame.gimmeBoard())) {

        $scope.tie = 'It is a tie game.';
      }

  	};

  	var moveAt = function(player, pos) {
  		if(!$scope.winner) {
  			TicTacToeGame.moveAt(player, pos);
  			checkWinner(player);
  		}
  	};

    $scope.move = function(pos) {
    	if(TicTacToeGame.fillAt(pos) === '') {
    	moveAt('X', pos);
      console.log(TicTacToeGame.gimmeBoard());
    	moveAt('O', AI.findMove(TicTacToeGame.gimmeBoard()));
    	}
    };

    $scope.newGame = function() {
    	TicTacToeGame.newGame();
    	$scope.winner = null;
      $scope.tie = null;
    };

    $scope.fillAt = function(pos) {
    	return TicTacToeGame.fillAt(pos);
    };
  });