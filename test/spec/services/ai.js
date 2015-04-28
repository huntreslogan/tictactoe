describe('Service: AI', function() {
	//load ctrl
	beforeEach(module('ticTacToeApp'));

	var ai;
	var ticTacToeGame;

	beforeEach(inject(function(AI, TicTacToeGame) {
		ai = AI;
		ticTacToeGame = TicTacToeGame;
	}));

	it('selects the optimal space based on current board', function() {
		ticTacToeGame.moveAt('X', 0);
		ai.makeMove().should.eql(4);
	});

	it('selects pos 2 when pos 0 and 1 are full', function() {
		ticTacToeGame.moveAt('X', 0);
		ticTacToeGame.moveAt('O', 4);
		ticTacToeGame.moveAt('X', 3);
		ai.makeMove().should.eql(6);
	});
})