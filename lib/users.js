// Collections are the way of storing data
Users = new Mongo.Collection("users");

// Service for the users collection
UsersService = {
    getUsers: function() {
        return Users.find({});
    },
    getUser: function(id) {
        return Users.findOne(id);
    },
    addUser: function(data) {
        Users.insert(data);
    },
    updateUser: function(id, data) {
        Users.update(id, {$set: data});
    },
    deleteUser: function(id) {
        Users.remove(id);
    }
};
