angular
	.module('ngTest')
	.factory('ordersFactory', function($http) {

		function getOrders() {
			return $http.get('https://www.hatchways.io/api/assessment/work_orders');
		}

		function getWorkers() {
			return $http.get('https://www.hatchways.io/api/assessment/workers/0');
		}

		function getName() {
			return $http.get('https://www.hatchways.io/api/assessment/workers/0');
		}

		return {
			getOrders: getOrders,
			getWorkers: getWorkers
		}
	});