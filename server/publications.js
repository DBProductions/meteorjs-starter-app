Meteor.startup(function() {
	// publish all users
	Meteor.publish("users", function () {
	    return UsersService.getUsers();
	});
});