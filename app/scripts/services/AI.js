'use strict';

angular.module('ticTacToeApp').factory('AI', function(TicTacToeGame) {
	return {
		makeMove: function() {
			for (var = 0; i < 9; i++) {
				if(TicTacToeGame.fillAt(i) == '') {
					return i;
				}
			}
		}
	}
});