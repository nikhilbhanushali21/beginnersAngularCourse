(function (angular) {
	angular
		.module("application")
		.component("loggedInUser", {
			templateUrl  : "components/loggedInUser/loggedInUser.htm",
			controller   : "loggedInUserController",
			controllerAs : "vm"
		});
} (window.angular))