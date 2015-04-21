describe('Service: TicTacToeGame', function() {
	beforeEach(module('ticTacToeApp'));

	var ticTacToeGame;

	beforeEach(inject(function(TicTacToeGame) {
		ticTacToeGame = TicTacToeGame;
	}));

	describe('.gameWon', function() {
		it('knows that top row is winning row', function() {
			ticTacToeGame.moveAt('X', 1);
			ticTacToeGame.moveAt('X', 2);
			ticTacToeGame.moveAt('X', 3);
			ticTacToeGame.gameWon().should.be.true;
		});
		it('knows that middle row is winning row', function() {
			ticTacToeGame.moveAt('X', 4);
			ticTacToeGame.moveAt('X', 5);
			ticTacToeGame.moveAt('X', 6);

		});
		it('know that bottom row is winning row', function() {
			ticTacToeGame.moveAt('X', 7);
			ticTacToeGame.moveAt('X', 8);
			ticTacToeGame.moveAt('X', 9);
		});
		it('knows that a row with AI and player moves is not winning row', function() {
			ticTacToeGame.moveAt('X', 1);
			ticTacToeGame.moveAt('O', 2);
			ticTacToeGame.moveAt('X', 3);
			ticTacToeGame.gameWon().should.be.false;
		});
	});
})