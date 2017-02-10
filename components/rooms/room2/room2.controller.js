(function (angular) {
	angular
		.module("application")
		.controller("room2Controller", ["roomsService", function($routeParams) {
			this.$onInit = function() {
				this.fetchRooms = roomsService.fetchRooms;
			};
		}]);
}(window.angular));