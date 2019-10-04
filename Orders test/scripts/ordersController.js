angular
	.module('ngTest')
	.controller('ordersController', function($scope, $filter, ordersFactory) {

		$scope.orders;

		$scope.worker;
	
		


		ordersFactory.getOrders().success(function(data) {
			$scope.orders = data.orders;
		}).error(function(error) {
			console.log(error);
		});

		ordersFactory.getWorkers().success(function(data) {
			$scope.worker = data.worker;
		}).error(function(error) {
			console.log(error);
		});

		

	});