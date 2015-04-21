describe('Service: AI', function() {
	//load ctrl
	beforeEach(module('ticTacToeApp'));

	var ai;
	var ticTacToeGame;

	beforeEach(inject(function(AI, TicTacToeGame) {
		ai = AI;
		ticTacToeGame = TicTacToeGame;
	}));

	it('selects the first empty space at pos 1', function() {
		ticTacToeGame.fillAt(1).should.eql('');
		ai.makeMove().should.eql(1);
	});

	it('selects pos 3 when pos 1 and 2 are full', function() {
		ticTacToeGame.moveAt('X', 1);
		ticTacToeGame.moveAt('O', 2);
		ticTacToeGame.moveAt('X', 4);
		ai.makeMove().should.eql(3);
	});
})