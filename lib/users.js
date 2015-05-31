// Collections are the way of storing data, just like a MongoDB collection
Users = new Mongo.Collection("users");

// Service for the collection
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