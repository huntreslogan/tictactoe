describe('Controller: TicTacToeCtrl', function() {
	var scope;
	var testAI;
	//load ctrl module
	beforeEach(module('ticTacToeApp'));

	beforeEach(function() {
		var testApp = angular.module('TestApp', []);
		testApp.factory('AI', function() {
			return {
				makeMove: sinon.stub()
			}
		});
		module('TestApp');
	});

	//init ctrl and mock scope
	beforeEach(inject(function($controller, $rootScope, AI) {
		testAI = AI;
		scope = $rootScope.$new();
		$controller('TicTacToeCtrl', {$scope: scope});
	}));

	it('makes my move and sets up new game', function() {
		testAI.makeMove.returns(2);
		scope.move(3);
		scope.fillAt(3).should.eql('X');
		scope.fillAt(2).should.eql('O');
		scope.newGame();
		scope.fillAt(3).should.eql('');
		scope.fillAt(2).should.eql('');
	});

	if('cannot fill used position', function() {
		testAI.makeMove.returns(2);
		scope.move(3);
		scope.move(2);
		scope.fillAt(3).should.eql('X');
		scope.fillAt(2).should.eql('O');
	});

	it('can tell when I have won', function() {
		testAI.makeMove.returns(3);
		scope.move(0);
		scope.move(1);
		scope.move(2);
		scope.winner.should.eql('X');
	});

	if('will not let us play once game is over', function() {
		scope.winner = 'X';
		scope.move(4);
		scope.fillAt(2).should.eql('');
	});
});

