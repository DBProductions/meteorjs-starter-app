Meteor.publish("users", function () {
    return UsersService.getUsers();
});