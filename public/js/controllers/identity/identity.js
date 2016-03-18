define(function () {
	app.registerController('IdentityCtrl', ['$scope', '$state', function($scope, $state) {
		$scope.delete = function () {
			$scope.identity.delete();

			$state.transitionTo('credentials.list');
		}
	}]);
});