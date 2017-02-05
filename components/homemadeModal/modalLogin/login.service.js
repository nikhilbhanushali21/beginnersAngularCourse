(function (angular) {
	angular
		.module("application")
		.factory("loginService", function() {
			let loggedInUser = null;

			return {
				login,
				logout,
				fetchLoggedInUser
			};

			function login(usernameParam, passwordParam, isRememberedParam) {
				console.log((isRememberedParam ? "Logging in and remembering " : "Logging in ") + usernameParam);

				loggedInUser = {
					username: usernameParam,
					loggedInTime: Date.now()
				};
			}

			function logout() {
				console.log("Logged out " + loggedInUser.username);

				loggedInUser = null;
			}

			function fetchLoggedInUser() {
				return loggedInUser;
			}
		});
} (window.angular))
