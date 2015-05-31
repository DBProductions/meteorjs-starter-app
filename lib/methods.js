// define methods
Meteor.methods({
	getUsers: function () {
        return UsersService.getUsers();
    },
	getUser: function (id) {
    	return UsersService.getUser(id);
    },
    addUser: function (data) {
    	UsersService.addUser(data);
    },
    updateUser: function (id, data) {
    	UsersService.updateUser(id, data);
    },
    deleteUser: function (id) {
        UsersService.deleteUser(id);	
    }
});