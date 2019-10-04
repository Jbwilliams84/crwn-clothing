angular
	.module('ngTest')
	.filter('ordersFilter', function() {

		return function(orders, name) {

			var filtered = [];

			var worker = worker.name;

			angular.forEach(workers, function(worker) {
				if(worker.name = worker.name) {
					filtered.push(worker);
				}
			});

			return filtered;
		}
	});