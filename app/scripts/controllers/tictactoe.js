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
  		if(TicTacToeGame.gameWon()) {
  			$scope.winner = player;
  		}
  	}

  	var moveAt = function(player, pos) {
  		if(!$scope.winner) {
  			TicTacToeGame.moveAt(player, pos);
  			checkWinner(player);
  		}
  	}

    $scope.move = function(pos) {
    	if(TicTacToeGame.fillAt(pos) == '') {
    	moveAt('X', pos);
    	moveAt('O', AI.makeMove());
    	}
    }

    $scope.newGame = function() {
    	TicTacToeGame.newGame();
    	$scope.winner = null;
    }

    $scope.fillAt = function(pos) {
    	return TicTacToeGame.fillAt(pos);
    }
  });